import type { SVGProps } from "react";

/**
 * The Nexusbizz N: a square split along the bottom-left to top-right diagonal.
 * The left column keeps the half above the diagonal, the right column the half below,
 * and the two pieces are pulled apart along the diagonal's normal.
 */
export function NMark({ gap = 5, ...props }: SVGProps<SVGSVGElement> & { gap?: number }) {
  return (
    <svg viewBox="-6 -6 112 112" fill="currentColor" aria-hidden="true" {...props}>
      <polygon points="0,100 50,50 50,0 0,0" transform={`translate(${-gap},${-gap})`} />
      <polygon points="50,50 100,0 100,100 50,100" transform={`translate(${gap},${gap})`} />
    </svg>
  );
}

/** Full-width wordmark: the N mark stands in for the first letter, the rest is set in Unbounded. */
export function Wordmark({ className, title = "Nexusbizz" }: { className?: string; title?: string }) {
  // viewBox tuned so the cap height fills the box edge to edge.
  return (
    <svg viewBox="0 0 1000 128" className={className} role="img" aria-label={title} preserveAspectRatio="xMidYMid meet">
      <g fill="currentColor">
        <polygon points="0,128 57,71 57,0 0,0" />
        <polygon points="65,57 122,0 122,128 65,128" />
        <text
          x="148"
          y="128"
          textLength="852"
          lengthAdjust="spacingAndGlyphs"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 176 }}
        >
          EXUSBIZZ
        </text>
      </g>
    </svg>
  );
}
