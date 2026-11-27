"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "./smooth";
import { FitWord } from "./fit-word";
import { Media } from "./media";
import { Arrow } from "./arrow";
import { range, easeOutCubic } from "./store";

export type Row = {
  index: string;
  name: string;
  body: string;
  tags: string[];
  href: string;
  media: { kind: "image" | "video"; src: string; poster?: string; alt: string };
  meta?: string;
};

/**
 * Giant section word pinned in place while a panel of numbered rows slides up over it.
 * `tone="light"` is the paper panel from the reference; `tone="dark"` is our Studio variant.
 */
export function PinnedList({
  id,
  word,
  label,
  intro,
  rows,
  tone = "light",
}: {
  id: string;
  word: string;
  label: string;
  intro: string;
  rows: Row[];
  tone?: "light" | "dark";
}) {
  const wordRef = useRef<HTMLDivElement>(null);
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sec.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "top top",
      onUpdate: (s) => {
        const k = easeOutCubic(range(s.progress, 0.15, 1));
        if (wordRef.current) {
          wordRef.current.style.transform = `translate3d(0, ${(1 - k) * 55}%, 0)`;
          wordRef.current.style.clipPath = `inset(0 0 ${(1 - k) * 35}% 0)`;
        }
      },
    });
    return () => st.kill();
  }, []);

  const light = tone === "light";
  return (
    <section ref={sec} id={id} className={`relative ${light ? "" : "nx-dark"}`} aria-labelledby={`${id}-h`}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[var(--ink)]">
        <div className="nx-pinstripe absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(45,16,8,0.9), rgba(7,7,7,0) 70%)" }}
          aria-hidden
        />
        <div className="nx-lines" aria-hidden>
          <span /><span /><span /><span />
        </div>
        <div className="nx-gutter relative z-[2] pt-[13vh] md:pt-[11vh]">
          <div ref={wordRef} style={{ transform: "translate3d(0,55%,0)" }}>
            <h2 id={`${id}-h`} className="sr-only">
              {word}
            </h2>
            <FitWord word={word} className="block w-full text-[var(--paper)]" />
          </div>
          <div className="nx-grid mt-6 md:mt-8">
            <p className="nx-mono col-span-4 text-[var(--signal)] md:col-span-1">{label}</p>
            <p className="col-span-4 mt-3 max-w-[460px] text-[15px] leading-[1.55] text-white/70 md:col-span-2 md:col-start-3 md:mt-0">
              {intro}
            </p>
          </div>
        </div>
      </div>

      <div className="nx-gutter relative z-10 -mt-[38svh] pb-[14vh]">
        <ul
          className={light ? "bg-[var(--paper)] text-[var(--ink)]" : "border border-white/[0.07] bg-[#0c0a09] text-[var(--paper)]"}
          style={{ boxShadow: "0 -40px 120px rgba(0,0,0,0.45)" }}
        >
          {rows.map((r, i) => (
            <li key={r.index} className={i ? (light ? "border-t border-black/[0.08]" : "border-t border-white/[0.07]") : ""}>
              <Link href={r.href} className="nx-row group grid grid-cols-1 gap-6 p-5 md:grid-cols-4 md:gap-0 md:p-0">
                <div className="md:px-6 md:py-7">
                  <p className="flex items-baseline gap-3">
                    <span className={`nx-row-num nx-mono ${light ? "text-black/40" : "text-white/40"}`}>{r.index}</span>
                    <span className="text-[26px] leading-none tracking-[-0.02em] md:text-[clamp(22px,1.9vw,32px)]">{r.name}</span>
                  </p>
                  {r.meta && <p className={`nx-mono mt-3 ${light ? "text-black/45" : "text-white/45"}`}>{r.meta}</p>}
                </div>
                <div className="flex flex-col justify-between gap-6 md:px-6 md:py-7">
                  <p className={`max-w-[34ch] text-[14px] leading-[1.6] ${light ? "text-black/70" : "text-white/65"}`}>{r.body}</p>
                  <p className="flex flex-wrap gap-x-3 gap-y-1">
                    {r.tags.map((t) => (
                      <span key={t} className={`nx-tag nx-mono !text-[10.5px] ${light ? "text-black/55" : "text-white/50"}`}>
                        [ {t} ]
                      </span>
                    ))}
                  </p>
                </div>
                <div className="relative md:col-span-2 md:py-7 md:pr-6">
                  <div className="nx-row-media relative ml-auto aspect-[16/10] w-full overflow-hidden bg-[#111] md:w-[64%]">
                    <Media media={r.media} className="absolute inset-0 h-full w-full object-cover" />
                    <span className="nx-row-go absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-[var(--signal)] text-white">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
