"use client";

import { useCallback, useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>[]";

/** Text that decodes through random glyphs on hover (nav + buttons in the reference). */
export function Scramble({
  text,
  className,
  trigger = "hover",
  duration = 420,
}: {
  text: string;
  className?: string;
  trigger?: "hover" | "mount" | "none";
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);

  const run = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const chars = text.split("");
    const step = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      const settled = Math.floor(t * chars.length);
      el.textContent = chars
        .map((c, i) => (c === " " || i < settled ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
        .join("");
      if (t < 1) raf.current = requestAnimationFrame(step);
      else el.textContent = text;
    };
    step();
  }, [text, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (trigger === "mount") run();
    if (trigger !== "hover") return;
    const host = (el.closest("a,button") as HTMLElement) || el;
    host.addEventListener("mouseenter", run);
    host.addEventListener("focus", run);
    return () => {
      host.removeEventListener("mouseenter", run);
      host.removeEventListener("focus", run);
      cancelAnimationFrame(raf.current);
    };
  }, [run, trigger]);

  return (
    <span className={className} aria-label={text}>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
