"use client";

import { useEffect, useRef } from "react";

type M = { kind: "image" | "video"; src: string; poster?: string; alt: string };

/** Image or muted loop that only plays while on screen. */
export function Media({ media, className = "", priority = false }: { media: M; className?: string; priority?: boolean }) {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = v.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  if (media.kind === "video")
    return (
      <video
        ref={v}
        className={className}
        src={media.src}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={media.alt}
      />
    );
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={media.src} alt={media.alt} loading={priority ? "eager" : "lazy"} decoding="async" />;
}
