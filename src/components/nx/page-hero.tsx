"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { FitWord } from "./fit-word";
import { Scramble } from "./scramble";

/** Inner-page hero: ember field, gridlines, copy in column 3, a giant word sitting on the bottom edge. */
export function PageHero({ eyebrow, title, word, aside }: { eyebrow: string; title: ReactNode; word: string; aside?: ReactNode }) {
  const [on, setOn] = useState(false);
  const wordRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true));
    const onScroll = () => {
      const h = Math.min(1, window.scrollY / window.innerHeight);
      if (wordRef.current) wordRef.current.style.transform = `translate3d(0, ${-h * 14}vh, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(55% 60% at 80% 28%, rgba(92,30,10,0.75), rgba(45,16,8,0.45) 38%, rgba(7,7,7,0) 72%)" }}
        aria-hidden
      />
      <div className="nx-pinstripe absolute inset-0" aria-hidden />
      <div className="nx-lines" aria-hidden>
        <span /><span /><span /><span />
      </div>
      <div className="nx-noise absolute inset-0" aria-hidden />
      <div className="nx-gutter nx-grid relative z-[2] h-full">
        <div className="col-span-4 pt-[30vh] md:col-span-2 md:col-start-3">
          <p className="nx-mono mb-5 text-[var(--signal)]">{on ? <Scramble text={eyebrow} trigger="mount" duration={700} /> : eyebrow}</p>
          <h1
            className="max-w-[16ch] text-[34px] leading-[1.08] tracking-[-0.02em] md:text-[clamp(30px,2.6vw,44px)]"
            style={{
              clipPath: on ? "inset(0 0 -10% 0)" : "inset(0 0 100% 0)",
              transform: on ? "none" : "translateY(30px)",
              transition: "clip-path 1.1s var(--ease-out), transform 1.1s var(--ease-out)",
            }}
          >
            {title}
          </h1>
          {aside && (
            <div className="mt-8" style={{ opacity: on ? 1 : 0, transition: "opacity 1s var(--ease-out) 0.4s" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
      <div ref={wordRef} className="nx-gutter absolute inset-x-0 bottom-[var(--wm-bottom)] z-[2]">
        <div style={{ clipPath: on ? "inset(0 0 0 0)" : "inset(100% 0 0 0)", transition: "clip-path 1.3s var(--ease-out) 0.1s" }}>
          <FitWord word={word} className="block w-full text-[var(--paper)]" />
        </div>
      </div>
    </section>
  );
}
