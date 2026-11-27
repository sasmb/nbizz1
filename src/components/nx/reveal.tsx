"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Fades + lifts children into place the first time they enter the viewport. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: `translate3d(0, ${y}px, 0)`,
        transition: `opacity 0.9s var(--ease-out) ${delay}s, transform 1.2s var(--ease-out) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
