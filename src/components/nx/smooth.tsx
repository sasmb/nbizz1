"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

declare global {
  interface Window {
    __nxLenis?: Lenis;
  }
}

/** Inertia scroll matched to the reference: each wheel notch glides ~0.3s on an expo ease-out. */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });
    window.__nxLenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // smooth in-page anchors
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#'], a[href^='/#']") as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute("href")!.replace(/^\//, "");
      if (a.getAttribute("href")!.startsWith("/#") && window.location.pathname !== "/") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { duration: 1.6 });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__nxLenis = undefined;
    };
  }, []);
  return null;
}

export { gsap, ScrollTrigger };
