"use client";

import Link from "next/link";
import { CLIENTS, CONTACT_EMAIL, VENTURES } from "./data";
import { Arrow } from "./arrow";
import { Scramble } from "./scramble";
import { NMark, Wordmark } from "./logo";

export function Proof() {
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[var(--ink)] py-10" aria-label="Clients">
      <div className="nx-gutter mb-6 flex items-center justify-between">
        <p className="nx-mono text-[var(--signal)]">[ Work shipped for ]</p>
        <p className="nx-mono hidden text-white/40 md:block">Real clients. No stock logos.</p>
      </div>
      <div className="group flex w-max animate-[nx-marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((c, i) => (
          <span key={i} className="flex items-center whitespace-nowrap pr-12 text-[clamp(28px,4vw,64px)] font-light tracking-[-0.03em] text-white/85">
            {c}
            <NMark className="ml-12 h-[0.42em] w-[0.42em] text-[var(--signal)]" />
          </span>
        ))}
      </div>
    </section>
  );
}

export function ReachOut() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)]" aria-labelledby="nx-cta-h">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(70% 80% at 85% 100%, rgba(120,36,12,0.55), rgba(45,16,8,0.35) 40%, rgba(7,7,7,0) 75%)" }}
        aria-hidden
      />
      <div className="nx-pinstripe absolute inset-0" aria-hidden />
      <div className="nx-lines" aria-hidden>
        <span /><span /><span /><span />
      </div>
      <div className="nx-gutter nx-grid relative z-[2] py-[16vh]">
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <p className="nx-mono mb-6 flex items-center gap-3 text-white/70">
            <span className="nx-dot" aria-hidden /> [ Taking on new projects ]
          </p>
          <h2 id="nx-cta-h" className="text-[34px] leading-[1.08] tracking-[-0.02em] md:text-[clamp(30px,2.6vw,44px)]">
            Opportunity doesn&rsquo;t wait.
            <br />
            Let&rsquo;s talk.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.6] text-white/70">
            Bring us the AI agent, product or site you need built, or a venture you want to partner on. Four quick steps,
            and we reply within two business days.
          </p>
          <div className="mt-10 space-y-2">
            <Link href="/contact" data-brief className="nx-cta nx-mono !text-[13px]">
              <Scramble text="Fill in the form" />
              <Arrow />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="nx-box nx-mono flex !h-12 w-full justify-between !text-[12px]">
              <Scramble text={CONTACT_EMAIL} />
              <span className="text-white/40">Email</span>
            </a>
          </div>
        </div>
        <div className="col-span-4 mt-14 flex items-end justify-end md:col-span-2 md:col-start-3 md:mt-0 lg:col-span-2 lg:col-start-3">
          <p className="nx-mono text-right text-white/40">
            Nexusbizz LLC
            <br />[ Registered in the United States ]
          </p>
        </div>
      </div>
    </section>
  );
}

/** Footer revealed like a curtain: the page lifts off it as you reach the end. */
export function Footer() {
  const year = new Date().getFullYear();
  const cols: { h: string; links: { href: string; label: string; ext?: boolean }[] }[] = [
    { h: "Ventures", links: VENTURES.map((v) => ({ href: `/ventures/${v.slug}`, label: v.name })) },
    {
      h: "Studio",
      links: [
        { href: "/ai-agents", label: "AI agents" },
        { href: "/studio#ai-development", label: "AI development" },
        { href: "/studio#websites", label: "Websites" },
        { href: "/studio#ai-video", label: "AI video" },
      ],
    },
    {
      h: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/case-studies", label: "Case studies" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "https://www.instagram.com/nexusbizz/", label: "Instagram", ext: true },
      ],
    },
  ];
  return (
    <div className="relative h-auto md:h-[var(--foot-h)]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <footer className="bottom-0 left-0 right-0 flex h-full flex-col bg-[var(--paper)] text-[var(--ink)] md:fixed md:h-[var(--foot-h)]">
        <div className="nx-lines dark" aria-hidden>
          <span /><span /><span /><span />
        </div>
        <div className="nx-gutter nx-grid relative z-[2] gap-y-10 pt-8">
          <Link href="/" className="col-span-4 flex items-center gap-2.5 md:col-span-1" aria-label="Nexusbizz home">
            <NMark className="h-[22px] w-[22px] text-[var(--signal-deep)]" />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800 }} className="text-[17px] leading-none">
              NEXUSBIZZ
            </span>
          </Link>
          {cols.map((c) => (
            <nav key={c.h} className="col-span-2 md:col-span-1" aria-label={c.h}>
              <p className="nx-mono mb-4 text-[var(--signal-deep)]">[ {c.h} ]</p>
              <ul className="space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    {l.ext ? (
                      <a href={l.href} target="_blank" rel="noreferrer" className="nx-mono nx-link text-black/80">
                        <Scramble text={l.label} />
                      </a>
                    ) : (
                      <Link href={l.href} className="nx-mono nx-link text-black/80">
                        <Scramble text={l.label} />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="nx-gutter relative z-[2] mt-auto">
          <div className="nx-grid items-end pb-5 pt-12">
            <div className="col-span-4 md:col-span-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="nx-mono nx-link text-black/60">
                {CONTACT_EMAIL}
              </a>
              <p className="mt-2 text-[clamp(28px,3vw,48px)] leading-none tracking-[-0.03em]">Let&rsquo;s build what&rsquo;s next.</p>
            </div>
            <p className="nx-mono col-span-4 mt-6 text-black/45 md:col-span-2 md:mt-0 md:text-right">
              © {year} Nexusbizz LLC · All rights reserved
            </p>
          </div>
          <Wordmark className="block w-full pb-[var(--wm-bottom)] text-[var(--ink)]" />
        </div>
      </footer>
    </div>
  );
}
