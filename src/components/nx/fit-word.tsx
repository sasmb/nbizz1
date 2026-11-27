"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A single word set in the display face at its natural proportions, scaled so its ink fills the
 * container edge to edge. The viewBox is fitted to the measured glyph box once the font is ready.
 */
export function FitWord({ word, className = "" }: { word: string; className?: string }) {
  const t = useRef<SVGTextElement>(null);
  // sensible default (Unbounded 800 at 176px ~ 0.83em per glyph) so SSR output is already close
  const [box, setBox] = useState(`0 0 ${Math.round(word.length * 146)} 128`);
  useEffect(() => {
    let alive = true;
    const fit = () => {
      if (!alive || !t.current) return;
      const b = t.current.getBBox();
      // trim to cap height: Unbounded caps sit ~0.71em above the baseline
      const capTop = 128 - 176 * 0.725;
      setBox(`${b.x.toFixed(1)} ${capTop.toFixed(1)} ${b.width.toFixed(1)} ${(128 - capTop).toFixed(1)}`);
    };
    fit();
    document.fonts?.ready.then(fit);
    return () => {
      alive = false;
    };
  }, [word]);
  return (
    <svg viewBox={box} className={className} role="img" aria-label={word} preserveAspectRatio="xMidYMid meet" overflow="visible">
      <text ref={t} x="0" y="128" fill="currentColor" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 176 }}>
        {word.toUpperCase()}
      </text>
    </svg>
  );
}
