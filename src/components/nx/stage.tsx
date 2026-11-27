"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "./smooth";
import { stage, range, easeOutCubic, easeInOutCubic, T, clamp } from "./store";
import { Wordmark } from "./logo";
import { Scramble } from "./scramble";
import { Loader } from "./loader";
import { DecodeColumns } from "./decode-columns";
import { Arrow } from "./arrow";

const Scene = dynamic(() => import("./scene"), { ssr: false });

const BELIEF =
  "Every business will soon run on AI agents. Nexusbizz builds them: agents and custom AI that sell, support and operate inside the tools a company already uses. We prove it in our own ventures first, then build it for yours.";

export function Stage() {
  const root = useRef<HTMLDivElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const wordmark = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLDivElement>(null);
  const words = useRef<(HTMLSpanElement | null)[]>([]);
  const beliefBlock = useRef<HTMLDivElement>(null);
  const sweep = useRef<HTMLDivElement>(null);
  const sweepLine = useRef<HTMLDivElement>(null);
  const decode = useRef<HTMLDivElement>(null);
  const manifesto = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [live, setLive] = useState(false);
  const [manifestoOn, setManifestoOn] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const go = () => {
      stage.live = true;
      setLive(true);
    };
    window.addEventListener("nx:loaded", go);
    return () => window.removeEventListener("nx:loaded", go);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const wordEls = words.current.filter(Boolean) as HTMLSpanElement[];
    let lastManifesto = false;

    const update = () => {
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const u = Math.max(0, (window.scrollY - top) / vh);
      stage.u = u;

      // hero copy drifts up and dims as the belief block arrives
      const h = range(u, 0, 0.9);
      if (heroContent.current) {
        heroContent.current.style.transform = `translate3d(0, ${-h * 18}vh, 0)`;
        heroContent.current.style.opacity = String(1 - easeOutCubic(h));
      }
      if (wordmark.current) wordmark.current.style.transform = `translate3d(0, ${-h * 12}vh, 0)`;
      if (pill.current) pill.current.style.setProperty("--p", String(clamp(u / T.end)));

      // word-by-word reveal
      const wp = range(u, 0.55, 2.55) * wordEls.length;
      wordEls.forEach((w, i) => {
        const k = clamp(wp - i);
        w.style.opacity = String(0.13 + 0.87 * k);
      });

      // accent sweep: wipes in from the left, then burns off to the right
      if (sweep.current && sweepLine.current) {
        const sIn = easeInOutCubic(range(u, T.sweepStart + 0.05, T.shatter));
        const sOut = easeInOutCubic(range(u, T.shatter, T.sweepEnd));
        sweep.current.style.transform = `scaleX(${sIn}) translateX(${sOut * 30}%)`;
        sweep.current.style.opacity = String(sIn * (1 - sOut));
        sweepLine.current.style.transform = `scaleX(${sIn})`;
        sweepLine.current.style.opacity = String(1 - sOut);
      }

      // manifesto + decoding columns
      const m = range(u, T.manifestoStart - 0.35, T.manifestoStart + 0.15) * (1 - range(u, T.end - 1.15, T.end - 0.75));
      if (decode.current) decode.current.style.opacity = String(m);
      if (manifesto.current) {
        manifesto.current.style.opacity = String(m);
        manifesto.current.style.transform = `translate3d(0, ${(1 - m) * 24}px, 0)`;
      }
      const on = m > 0.4;
      if (on !== lastManifesto) {
        lastManifesto = on;
        setManifestoOn(on);
      }
    };

    const st = ScrollTrigger.create({ trigger: el, start: "top top", end: "bottom top", onUpdate: update, onRefresh: update });
    window.addEventListener("resize", update);
    update();
    return () => {
      st.kill();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Loader ready={ready} />
      <div ref={root} className="relative" id="top">
        {/* pinned WebGL layer */}
        <div className="sticky top-0 -mb-[100svh] h-[100svh] overflow-hidden">
          <Scene onReady={onReady} />
          <div className="nx-pinstripe pointer-events-none absolute inset-0 z-[1]" aria-hidden />
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-[61%] z-[2] h-[13vh] -translate-y-1/2" aria-hidden>
            <div
              ref={sweep}
              className="absolute inset-0 origin-left"
              style={{
                opacity: 0,
                transform: "scaleX(0)",
                background:
                  "linear-gradient(90deg, rgba(216,68,26,0) 0%, rgba(216,68,26,0.85) 18%, rgba(243,160,80,0.95) 46%, rgba(238,106,63,0.7) 70%, rgba(45,16,8,0) 100%)",
                filter: "blur(10px)",
                mixBlendMode: "screen",
              }}
            />
            <div
              ref={sweepLine}
              className="absolute inset-x-0 top-1/2 h-px origin-left bg-[var(--amber)]"
              style={{ transform: "scaleX(0)", boxShadow: "0 0 18px 2px rgba(243,160,80,0.7)" }}
            />
          </div>
          <DecodeColumns ref={decode} />
          <div className="nx-noise pointer-events-none absolute inset-0 z-[3]" aria-hidden />
        </div>

        {/* 1 · HERO */}
        <section className="relative z-10 h-[100svh] min-h-[560px]" aria-labelledby="nx-hero-title">
          <div ref={heroContent} className="nx-gutter nx-grid relative h-full will-change-transform">
            <div className="col-span-4 pt-[34vh] md:col-span-2 md:col-start-3 md:pt-[30vh]">
              <p className="nx-mono mb-5 text-[var(--signal)]">
                {live ? <Scramble text="[ AI agents · Ventures · Studio ]" trigger="mount" duration={700} /> : <span className="opacity-0">[ AI agents · Ventures · Studio ]</span>}
              </p>
              <h1 id="nx-hero-title" className="text-[34px] font-normal leading-[1.08] tracking-[-0.02em] md:text-[clamp(30px,2.6vw,44px)]">
                {["Building the companies", "behind what’s next."].map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-[0.08em]">
                    <span
                      className="block"
                      style={{
                        transform: live ? "none" : "translateY(110%)",
                        transition: `transform 1.1s var(--ease-out) ${0.08 + i * 0.09}s`,
                      }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
              <p
                className="mt-6 max-w-[44ch] text-[15px] leading-[1.6] text-white/70"
                style={{ opacity: live ? 1 : 0, transition: "opacity 1s var(--ease-out) 0.3s" }}
              >
                Nexusbizz is a US company that builds AI agents and custom AI for businesses, and the parent of Nepo Commerce,
                Fayaa Tech and Sohae Finance.
              </p>
              <div
                className="mt-8 max-w-[360px]"
                style={{
                  clipPath: live ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                  transition: "clip-path 1s var(--ease-out) 0.35s",
                }}
              >
                <Link href="#agents" className="nx-cta nx-mono !text-[13px]">
                  <Scramble text="See what we build" />
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>

          <div ref={wordmark} className="nx-gutter absolute inset-x-0 bottom-[var(--wm-bottom)] will-change-transform">
            <Wordmark className="block w-full text-[var(--paper)]" />
          </div>
          <div ref={pill} className="nx-pill absolute bottom-3 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden>
            <i />
          </div>
        </section>

        {/* 2 · BELIEF (word-by-word scroll reveal) */}
        <section className="relative z-10 h-[220vh]" aria-label="What we believe">
          <div className="sticky top-0 flex h-[100svh] items-start">
            <div ref={beliefBlock} className="nx-gutter nx-grid w-full pt-[22vh] md:pt-[26vh]">
              <div className="col-span-4 md:col-span-2 md:col-start-3">
                <p className="nx-mono mb-6 text-[var(--signal)]">[ What we believe ]</p>
                <p className="text-[24px] leading-[1.22] tracking-[-0.015em] md:text-[clamp(26px,2.25vw,38px)]">
                  {BELIEF.split(" ").map((w, i) => (
                    <span
                      key={i}
                      ref={(el) => {
                        words.current[i] = el;
                      }}
                      className="nx-word"
                      style={{ opacity: 0.13 }}
                    >
                      {w}&nbsp;
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · SWEEP + SHATTER (driven by the pinned layer) */}
        <section className="relative z-10 h-[130vh]" aria-hidden />

        {/* 4 · MANIFESTO */}
        <section className="relative z-10 h-[200vh]" aria-labelledby="nx-manifesto">
          <div className="sticky top-0 flex h-[100svh] items-center justify-center">
            <div ref={manifesto} className="nx-gutter relative mx-auto max-w-[760px] text-center" style={{ opacity: 0 }}>
              <div
                className="absolute -inset-x-[20%] -inset-y-[60%] -z-10"
                style={{ background: "radial-gradient(closest-side, rgba(7,7,7,0.62), rgba(7,7,7,0))" }}
                aria-hidden
              />
              <h2 id="nx-manifesto" className="nx-mono-lg mb-6 text-[18px] tracking-[0.08em] md:text-[22px]">
                {manifestoOn ? <Scramble text="One company. Many ventures." trigger="mount" duration={900} /> : "One company. Many ventures."}
              </h2>
              <p className="text-[17px] leading-[1.6] text-white/90 md:text-[20px]">
                Nexusbizz LLC builds AI agents, AI development and implementation for businesses, and is the US parent of
                Nepo Commerce, Fayaa Tech and Sohae Finance. Each venture runs on its own. All of them share one standard:
                build it properly, ship it fast, keep it honest.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
