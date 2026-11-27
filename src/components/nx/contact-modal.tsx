"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BriefForm } from "./brief-form";

/**
 * Any link marked `data-brief` opens the brief as an overlay instead of leaving the page
 * (as the reference's "Reach out" does). Without JS, the link still goes to /contact.
 */
export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const lastFocus = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("[data-brief]") as HTMLElement | null;
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (pathname === "/contact") return; // the page already shows the form
      e.preventDefault();
      lastFocus.current = a;
      setKey((k) => k + 1);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    const l = window.__nxLenis;
    if (open) l?.stop();
    else l?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) lastFocus.current?.focus?.();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="fixed inset-0 z-[80]"
      style={{ visibility: open ? "visible" : "hidden", pointerEvents: open ? "auto" : "none" }}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
        style={{ opacity: open ? 1 : 0, transition: "opacity 0.5s var(--ease-out)" }}
        onClick={() => setOpen(false)}
      />
      <div className="absolute inset-0 overflow-y-auto" data-lenis-prevent onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Start a project with Nexusbizz"
          className="relative mx-auto my-[6vh] w-[min(920px,calc(100vw-24px))] border border-white/[0.08] bg-[#0b0a09] p-6 shadow-[0_60px_160px_rgba(0,0,0,0.7)] md:p-12"
          style={{
            transform: open ? "none" : "translateY(40px) scale(0.98)",
            opacity: open ? 1 : 0,
            transition: "transform 0.7s var(--ease-out), opacity 0.5s var(--ease-out)",
          }}
        >
          {open && <BriefForm key={key} onClose={() => setOpen(false)} autoFocus />}
        </div>
      </div>
    </div>
  );
}
