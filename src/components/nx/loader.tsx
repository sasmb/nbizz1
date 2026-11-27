"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./logo";

/**
 * White grid loader with a real counter. The wordmark sits at the exact spot the hero wordmark
 * occupies, so the hard cut reads as the page "switching on" around it (as in the reference).
 */
export function Loader({ ready }: { ready: boolean }) {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(ready);
  readyRef.current = ready;

  useEffect(() => {
    const seen = sessionStorage.getItem("nx-loaded") === "1";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = seen || reduce ? 450 : 1900;
    const start = performance.now();
    let shown = 0;
    let raf = 0;
    document.documentElement.style.overflow = "hidden";
    let last = start;
    const tick = () => {
      const now = performance.now();
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const elapsed = now - start;
      // time-based target, held at 92% until the 3D assets are in; frame-rate independent smoothing
      const timeTarget = Math.min(1, elapsed / minMs);
      const target = readyRef.current ? timeTarget : Math.min(timeTarget, 0.92);
      shown += (target - shown) * Math.min(1, dt * 14);
      if (target - shown < 0.004) shown = target;
      const pct = Math.round(shown * 100);
      if (countRef.current) countRef.current.textContent = String(pct).padStart(3, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${shown})`;
      if (shown >= 1) {
        // brief hold on 100, then hard cut
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("nx-loaded", "1");
          document.documentElement.style.overflow = "";
          window.dispatchEvent(new Event("nx:loaded"));
          setTimeout(() => setGone(true), 50);
        }, 160);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // safety: never block the page for more than 6s
    const safety = setTimeout(() => {
      readyRef.current = true;
    }, 6000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (gone) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-[var(--paper)] text-[var(--ink)]"
      style={{ visibility: done ? "hidden" : "visible" }}
      role="progressbar"
      aria-label="Loading Nexusbizz"
    >
      <div className="nx-lines dark" aria-hidden>
        <span /><span /><span /><span />
      </div>
      <div className="nx-gutter absolute inset-x-0 top-5 flex justify-between">
        <span className="nx-mono text-black/60">[ Nexusbizz LLC ]</span>
        <span className="nx-mono text-black/60">[ Loading ]</span>
      </div>
      <div className="nx-gutter absolute inset-x-0 bottom-[var(--wm-bottom)]">
        <div className="mb-4 flex items-end justify-between">
          <span ref={countRef} className="nx-mono-lg text-[13px] tabular-nums">000</span>
          <span className="nx-mono text-black/50">Commerce · AI · Energy</span>
        </div>
        <div className="mb-6 h-px w-full bg-black/10">
          <div ref={barRef} className="h-px w-full origin-left bg-[var(--ink)]" style={{ transform: "scaleX(0)" }} />
        </div>
        <Wordmark className="block w-full" />
      </div>
    </div>
  );
}
