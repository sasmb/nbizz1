/** Mutable, render-free state shared between the DOM scroll timeline and the WebGL scene. */
export const stage = {
  /** scroll distance into the stage, in viewport heights */
  u: 0,
  /** true once assets are loaded and the loader has cut */
  live: false,
  reduce: false,
};

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** normalised progress of x through [a,b] */
export const range = (x: number, a: number, b: number) => clamp((x - a) / (b - a));
export const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
export const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Stage timeline, in viewport heights. Sections in stage.tsx are sized to match. */
export const T = {
  heroEnd: 1,
  beliefStart: 1,
  beliefEnd: 3.2,
  sweepStart: 3.2,
  shatter: 3.85,
  sweepEnd: 4.5,
  manifestoStart: 4.5,
  end: 6.5,
};
