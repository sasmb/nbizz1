"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CONTACT_EMAIL } from "./data";
import { Arrow } from "./arrow";
import { Scramble } from "./scramble";

export const SERVICES = ["AI agents", "AI development", "AI implementation", "Website", "AI video", "Venture partnership"];
export const BUDGETS = ["Under $5,000", "$5,000+", "$10,000+", "$25,000+", "$50,000+", "Not sure yet"];
const KEYS = "ABCDEF";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Four-step project brief (services → budget → details → contact), modelled on the reference's
 * "Reach out" flow. Options are keyboard-selectable with A–F, Enter advances.
 */
export function BriefForm({ onClose, autoFocus = false }: { onClose?: () => void; autoFocus?: boolean }) {
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [dir, setDir] = useState(1);
  const root = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canNext = useMemo(
    () => [services.length > 0, budget !== "", details.trim().length >= 10, name.trim().length > 1 && emailOk][step],
    [step, services, budget, details, name, emailOk]
  );

  const go = useCallback((d: number) => {
    setDir(d);
    setError("");
    setStep((s) => Math.max(0, Math.min(3, s + d)));
  }, []);

  const submit = useCallback(async () => {
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services, budget, details, name, company, email, phone, website: hp, elapsedMs: Date.now() - startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.message || "Something went wrong.");
      setStatus("sent");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  }, [status, services, budget, details, name, company, email, phone, hp]);

  const next = useCallback(() => {
    if (!canNext) return;
    if (step === 3) submit();
    else go(1);
  }, [canNext, step, submit, go]);

  // keyboard: A–F toggles options on steps 1–2, Enter advances (not inside the textarea)
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";
      // Space still toggles a focused option; Enter always means "continue"
      if (e.key === "Enter" && !e.shiftKey && tag !== "TEXTAREA" && !(e.target as HTMLElement).closest("a")) {
        e.preventDefault();
        next();
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = KEYS.indexOf(e.key.toUpperCase());
      if (k < 0) return;
      if (step === 0) setServices((s) => (s.includes(SERVICES[k]) ? s.filter((x) => x !== SERVICES[k]) : [...s, SERVICES[k]]));
      if (step === 1) setBudget(BUDGETS[k]);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [step, next]);

  useEffect(() => {
    if (!autoFocus) return;
    const t = setTimeout(() => root.current?.querySelector<HTMLElement>("[data-first]")?.focus(), 350);
    return () => clearTimeout(t);
  }, [step, autoFocus]);

  const Q = ["What can we help you with?", "What’s your budget?", "Tell us what you want to build.", "Your brief is ready. Where should we reply?"];

  return (
    <div ref={root} className="relative text-[var(--paper)]">
      <div className="flex items-start justify-between gap-4">
        <p className="nx-mono inline-flex items-center gap-2.5 bg-white/[0.05] px-3 py-2 text-white/80">
          <span className="nx-dot" aria-hidden /> Taking new projects
        </p>
        {onClose && (
          <button type="button" onClick={onClose} className="nx-box !h-9 !w-9 justify-center !p-0" aria-label="Close">
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
              <path d="M1 1l10 10M11 1 1 11" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        )}
      </div>

      <h2 className="mt-7 text-[28px] leading-[1.15] tracking-[-0.02em] md:text-[34px]">
        Reach out.
        <br />
        Tell us what you&rsquo;re building.
      </h2>

      {status === "sent" ? (
        <div className="mt-10" role="status">
          <p className="nx-mono text-[var(--ok)]">[ Brief received ]</p>
          <p className="mt-4 max-w-[46ch] text-[18px] leading-[1.5]">
            Thanks, {name.split(" ")[0]}. Your brief is with the team and we&rsquo;ll reply to {email} within two business days.
          </p>
          <dl className="nx-mono mt-8 grid gap-2 text-white/55">
            <div><dt className="inline text-white/35">Services · </dt><dd className="inline">{services.join(", ")}</dd></div>
            <div><dt className="inline text-white/35">Budget · </dt><dd className="inline">{budget}</dd></div>
          </dl>
          {onClose && (
            <button type="button" onClick={onClose} className="nx-cta nx-mono mt-10 w-full max-w-[320px] !text-[13px]">
              <Scramble text="Back to the site" />
              <Arrow />
            </button>
          )}
        </div>
      ) : (
        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            next();
          }}
          noValidate
        >
          <p className="nx-mono-lg text-[13px] text-[var(--signal)]" aria-live="polite">
            0{step + 1} <span className="sr-only">of 4</span>
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-[2px] bg-white/10">
                <span
                  className="block h-full origin-left bg-[var(--signal)]"
                  style={{ transform: `scaleX(${i <= step ? 1 : 0})`, transition: "transform 0.6s var(--ease-out)" }}
                />
              </span>
            ))}
          </div>

          <div key={step} className="mt-8 min-h-[236px]" style={{ animation: `nx-step-${dir > 0 ? "in" : "back"} 0.55s var(--ease-out) both` }}>
            <h3 className="text-[20px] tracking-[-0.01em] md:text-[22px]" id={`brief-q-${step}`}>
              {Q[step]}
            </h3>

            {step === 0 && (
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3" role="group" aria-labelledby="brief-q-0">
                {SERVICES.map((s, i) => {
                  const on = services.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      data-first={i === 0 ? "" : undefined}
                      aria-pressed={on}
                      onClick={() => setServices((v) => (on ? v.filter((x) => x !== s) : [...v, s]))}
                      className={`nx-opt ${on ? "is-on" : ""}`}
                    >
                      <span className="nx-opt-key">{KEYS[i]}</span>
                      <span className="px-4">{s}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 1 && (
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3" role="radiogroup" aria-labelledby="brief-q-1">
                {BUDGETS.map((b, i) => (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={budget === b}
                    key={b}
                    data-first={i === 0 ? "" : undefined}
                    onClick={() => setBudget(b)}
                    className={`nx-opt ${budget === b ? "is-on" : ""}`}
                  >
                    <span className="nx-opt-key">{KEYS[i]}</span>
                    <span className="px-4">{b}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="mt-6">
                <label htmlFor="brief-details" className="nx-mono text-white/45">
                  What do you want to build?
                </label>
                <textarea
                  id="brief-details"
                  data-first=""
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={6}
                  placeholder="e.g. An AI agent that answers WhatsApp orders and updates our inventory, plus a new storefront."
                  className="nx-input mt-2 resize-none"
                />
                <p className="nx-mono mt-2 text-white/30">{details.trim().length < 10 ? "A sentence or two is enough." : "Looks good."}</p>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Name*" id="brief-name" value={name} onChange={setName} autoComplete="name" first />
                <Field label="Company" id="brief-company" value={company} onChange={setCompany} autoComplete="organization" />
                <Field label="Email*" id="brief-email" type="email" value={email} onChange={setEmail} autoComplete="email" invalid={email.length > 3 && !emailOk} />
                <Field label="Phone / WhatsApp" id="brief-phone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
                {/* honeypot: hidden from people, tempting to bots */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                  <label htmlFor="brief-website">Website</label>
                  <input id="brief-website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
                </div>
              </div>
            )}
          </div>

          {error && (
            <p className="nx-mono mt-4 text-[var(--signal)]" role="alert">
              {error}{" "}
              <a
                className="nx-link text-white"
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project brief from ${name || "the website"}`)}&body=${encodeURIComponent(
                  `Services: ${services.join(", ")}\nBudget: ${budget}\n\n${details}\n\n${name}${company ? `, ${company}` : ""}\n${email}${phone ? `\n${phone}` : ""}`
                )}`}
              >
                Send it by email instead
              </a>
              .
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="nx-mono nx-link text-white/45">
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-2">
              {step > 0 && (
                <button type="button" onClick={() => go(-1)} className="nx-box nx-mono !h-12 !text-[12px]">
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={!canNext || status === "sending"}
                className="nx-cta nx-mono !h-12 min-w-[150px] gap-6 !text-[12px] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span>{step === 3 ? (status === "sending" ? "Sending…" : "Submit") : "Next"}</span>
                <Arrow />
              </button>
            </div>
          </div>
          <p className="nx-mono mt-4 hidden text-white/25 md:block">Tip: press A–F to choose, Enter to continue.</p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  autoComplete,
  first,
  invalid,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  first?: boolean;
  invalid?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="nx-mono text-white/45">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        data-first={first ? "" : undefined}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={invalid || undefined}
        className="nx-input mt-2"
      />
    </div>
  );
}
