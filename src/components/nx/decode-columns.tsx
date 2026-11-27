"use client";

import { forwardRef, useEffect, useRef } from "react";

const CH = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789$#%&*+<>[]=";
const COLS = [
  { left: "7%", top: "-2%", len: 9 },
  { left: "15%", top: "58%", len: 12 },
  { left: "49.6%", top: "70%", len: 10 },
  { left: "86%", top: "52%", len: 15 },
  { left: "92%", top: "8%", len: 8 },
  { left: "71%", top: "-4%", len: 6 },
];

/** Vertical columns of characters that keep decoding, as on the reference manifesto. */
export const DecodeColumns = forwardRef<HTMLDivElement>(function DecodeColumns(_, ref) {
  const cols = useRef<(HTMLSpanElement | null)[]>([]);
  const host = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    const tick = () => {
      const visible = host.current && parseFloat(host.current.style.opacity || "0") > 0.01;
      if (visible) {
        cols.current.forEach((el, i) => {
          if (!el) return;
          const len = COLS[i].len;
          let s = "";
          // keep most glyphs stable, swap a few per tick: reads as decoding, not noise
          const prev = el.textContent || "";
          for (let k = 0; k < len; k++) {
            s += prev[k] && Math.random() > 0.22 ? prev[k] : CH[(Math.random() * CH.length) | 0];
          }
          el.textContent = s;
        });
      }
      id = window.setTimeout(tick, 90);
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      ref={(el) => {
        host.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      className="pointer-events-none absolute inset-0 z-[2]"
      style={{ opacity: 0 }}
      aria-hidden
    >
      {COLS.map((c, i) => (
        <span
          key={i}
          ref={(el) => {
            cols.current[i] = el;
          }}
          className="absolute font-[var(--font-mono)] text-[13px] leading-[1.32] text-[var(--signal)]"
          style={{
            left: c.left,
            top: c.top,
            writingMode: "vertical-rl",
            textOrientation: "upright",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.02em",
            maskImage: "linear-gradient(to bottom, transparent, #000 25%, #000 70%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 25%, #000 70%, transparent)",
            opacity: 0.55 + (i % 3) * 0.15,
          }}
        >
          {"X".repeat(c.len)}
        </span>
      ))}
    </div>
  );
});
