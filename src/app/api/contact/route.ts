import { NextResponse, type NextRequest } from "next/server";

/**
 * Project brief intake.
 * Delivery, in order of preference (configure in Vercel env):
 *   1. RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL) → email via Resend's HTTP API
 *   2. CONTACT_WEBHOOK_URL → JSON POST (n8n, Zapier, Slack workflow, CRM…)
 * Both can be set. If neither is set the brief is logged server-side so nothing is silently dropped.
 */

const SERVICES = ["AI agents", "AI development", "AI implementation", "Website", "AI video", "Venture partnership"];
const BUDGETS = ["Under $5,000", "$5,000+", "$10,000+", "$25,000+", "$50,000+", "Not sure yet"];

type Rate = { n: number; t: number };
const hits = new Map<string, Rate>();
const WINDOW = 15 * 60 * 1000;
const MAX = 5;

function limited(ip: string) {
  if (process.env.NODE_ENV !== "production") return false;
  const now = Date.now();
  const r = hits.get(ip);
  if (!r || now - r.t > WINDOW) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  r.n += 1;
  return r.n > MAX;
}

const clip = (v: unknown, n: number) => String(v ?? "").trim().slice(0, n);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, message: "Too many submissions. Please try again later." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // bots: honeypot filled or form completed impossibly fast → pretend success, drop it
  if (clip(body.website, 200) || Number(body.elapsedMs) < 2500) return NextResponse.json({ ok: true });

  const brief = {
    services: (Array.isArray(body.services) ? body.services : []).map(String).filter((s) => SERVICES.includes(s)),
    budget: BUDGETS.includes(String(body.budget)) ? String(body.budget) : "",
    details: clip(body.details, 4000),
    name: clip(body.name, 120),
    company: clip(body.company, 160),
    email: clip(body.email, 200).toLowerCase(),
    phone: clip(body.phone, 40),
    submittedAt: new Date().toISOString(),
    source: "nexusbizz.com/contact",
  };

  if (!brief.services.length || !brief.budget || brief.details.length < 10 || brief.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email)) {
    return NextResponse.json({ ok: false, message: "Please complete the required fields." }, { status: 400 });
  }

  const tasks: Promise<void>[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (resendKey && to) {
    const html = `
      <h2>New project brief</h2>
      <p><b>${esc(brief.name)}</b>${brief.company ? ` · ${esc(brief.company)}` : ""}<br/>
      <a href="mailto:${esc(brief.email)}">${esc(brief.email)}</a>${brief.phone ? ` · ${esc(brief.phone)}` : ""}</p>
      <p><b>Services:</b> ${esc(brief.services.join(", "))}<br/><b>Budget:</b> ${esc(brief.budget)}</p>
      <p style="white-space:pre-wrap">${esc(brief.details)}</p>`;
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Nexusbizz <briefs@nexusbizz.com>",
          to: to.split(",").map((s) => s.trim()),
          reply_to: brief.email,
          subject: `Brief: ${brief.services.join(", ")} · ${brief.budget} · ${brief.name}`,
          html,
        }),
      }).then(async (r) => {
        if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text().catch(() => "")}`);
      })
    );
  }

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    tasks.push(
      fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(brief) }).then((r) => {
        if (!r.ok) throw new Error(`Webhook ${r.status}`);
      })
    );
  }

  if (!tasks.length) {
    console.warn("[contact] No RESEND_API_KEY/CONTACT_TO_EMAIL or CONTACT_WEBHOOK_URL set. Brief:", JSON.stringify(brief));
    // never pretend a lead was delivered in production: the form falls back to a pre-filled email
    if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production") {
      return NextResponse.json({ ok: false, message: "Online briefs are not switched on yet." }, { status: 503 });
    }
    return NextResponse.json({ ok: true, delivered: false });
  }

  const results = await Promise.allSettled(tasks);
  const failed = results.filter((r) => r.status === "rejected") as PromiseRejectedResult[];
  failed.forEach((f) => console.error("[contact] delivery failed:", f.reason));
  if (failed.length === results.length) {
    return NextResponse.json({ ok: false, message: "We couldn’t send your brief just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
