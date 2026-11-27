"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AGENT_CAPABILITIES } from "./data";
import { Arrow } from "./arrow";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

type Line = { t: string; k: "in" | "agent" | "tool" | "done"; who: string; msg: string };

const RUN: Line[] = [
  { t: "09:41:02", k: "in", who: "whatsapp", msg: "New message: “Can I get 2 shea butters and the hair oil?”" },
  { t: "09:41:02", k: "agent", who: "agent", msg: "Intent → place order · confidence 0.97" },
  { t: "09:41:03", k: "tool", who: "inventory", msg: "check(sku_114 ×2, sku_208 ×1)  ✓ in stock" },
  { t: "09:41:04", k: "tool", who: "payments", msg: "create_link($46.00)  ✓ sent" },
  { t: "09:41:19", k: "in", who: "whatsapp", msg: "Payment received" },
  { t: "09:41:19", k: "tool", who: "orders", msg: "create()  ✓ #1042 · delivery Thu" },
  { t: "09:41:20", k: "agent", who: "agent", msg: "Reply → “Order #1042 is confirmed. See you Thursday.”" },
  { t: "09:41:20", k: "done", who: "done", msg: "Resolved in 18s · no human needed" },
];

const COLOR: Record<Line["k"], string> = {
  in: "text-white/80",
  agent: "text-[var(--signal)]",
  tool: "text-white/55",
  done: "text-[var(--ok)]",
};
const GLYPH: Record<Line["k"], string> = { in: "▸", agent: "◆", tool: "↳", done: "●" };

/** A live-looking agent log: the clearest way to show what "an agent that does real work" means. */
function AgentConsole() {
  const host = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(RUN.length);
      return;
    }
    const id = window.setTimeout(
      () => setShown((n) => (n >= RUN.length ? 0 : n + 1)),
      shown >= RUN.length ? 3800 : shown === 0 ? 500 : 700 + Math.random() * 500
    );
    return () => clearTimeout(id);
  }, [visible, shown]);

  return (
    <div ref={host} className="border border-white/[0.08] bg-[#0b0908]/90 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur" aria-label="Example AI agent activity log">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
        <span className="nx-mono flex items-center gap-2.5 text-white/70">
          <span className="nx-dot" aria-hidden /> agent.orders · live
        </span>
        <span className="nx-mono text-white/35">[ Example run ]</span>
      </div>
      <ol className="min-h-[300px] space-y-2.5 px-4 py-5 font-[var(--font-mono)] text-[12px] leading-[1.5]" style={{ fontFamily: "var(--font-mono)" }}>
        {RUN.slice(0, shown).map((l, i) => (
          <li key={i} className="grid grid-cols-[64px_18px_76px_1fr] gap-x-2 animate-[nx-line_0.5s_var(--ease-out)_both] max-sm:grid-cols-[18px_1fr]">
            <span className="text-white/30 max-sm:hidden">{l.t}</span>
            <span className={COLOR[l.k]}>{GLYPH[l.k]}</span>
            <span className="uppercase tracking-[0.06em] text-white/40 max-sm:hidden">{l.who}</span>
            <span className={COLOR[l.k]}>{l.msg}</span>
          </li>
        ))}
        {shown < RUN.length && (
          <li className="grid grid-cols-[64px_18px_1fr] gap-x-2 max-sm:grid-cols-[18px_1fr]">
            <span className="max-sm:hidden" />
            <span className="inline-block h-[14px] w-[7px] animate-pulse bg-[var(--signal)]" aria-hidden />
          </li>
        )}
      </ol>
    </div>
  );
}

export function AgentsSection() {
  return (
    <section id="agents" className="relative overflow-hidden border-t border-white/[0.06] bg-[var(--ink)]" aria-labelledby="nx-agents-h">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 80% 40%, rgba(92,30,10,0.55), rgba(7,7,7,0) 70%)" }}
        aria-hidden
      />
      <div className="nx-pinstripe absolute inset-0" aria-hidden />
      <div className="nx-lines" aria-hidden>
        <span /><span /><span /><span />
      </div>
      <div className="nx-gutter nx-grid relative z-[2] gap-y-14 py-[16vh]">
        <div className="col-span-4 lg:col-span-2 lg:pr-[8%]">
          <Reveal>
            <p className="nx-mono mb-6 text-[var(--signal)]">[ AI agents · Development · Implementation ]</p>
            <h2 id="nx-agents-h" className="text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[clamp(40px,4.4vw,76px)]">
              We build AI agents that do real work.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-white/70">
              AI agents are at the core of what Nexusbizz does. We design, build and implement them for our own ventures and
              for other businesses: agents that sell, support and run operations inside the tools you already use.
            </p>
          </Reveal>
          <ul className="mt-12 border-t border-white/[0.08]">
            {AGENT_CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c.index} delay={i * 0.06} y={16} className="nx-row grid grid-cols-[48px_1fr] gap-x-4 border-b border-white/[0.08] px-2 py-5 md:grid-cols-[48px_200px_1fr]">
                <span className="nx-row-num nx-mono pt-1 text-white/40">{c.index}</span>
                <h3 className="text-[20px] tracking-[-0.01em]">{c.title}</h3>
                <p className="col-start-2 mt-2 text-[14px] leading-[1.6] text-white/60 md:col-start-3 md:mt-0">{c.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-2">
            <Link href="/ai-agents" className="nx-cta nx-mono min-w-[280px] !text-[13px]">
              <Scramble text="See how we build agents" />
              <Arrow />
            </Link>
            <Link href="/contact" data-brief className="nx-box nx-mono !h-14 !text-[12px]">
              <Scramble text="Start an AI project" />
            </Link>
          </div>
        </div>
        <Reveal className="col-span-4 self-center lg:col-span-2 lg:pl-[6%]" delay={0.1}>
          <AgentConsole />
          <p className="nx-mono mt-3 text-white/35">Illustrative run of an ordering agent. Numbers are examples.</p>
        </Reveal>
      </div>
    </section>
  );
}
