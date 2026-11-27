"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NMark } from "./logo";
import { Scramble } from "./scramble";
import { VENTURES } from "./data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > (window.location.pathname === "/" ? window.innerHeight * 0.85 : 40));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const l = window.__nxLenis;
    if (open) l?.stop();
    else l?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500"
        style={{
          background: solid || open ? "rgba(7,7,7,0.86)" : "transparent",
          backdropFilter: solid || open ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: solid || open ? "blur(14px) saturate(140%)" : "none",
          borderBottom: `1px solid ${solid ? "rgba(255,255,255,0.06)" : "transparent"}`,
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="nx-gutter nx-grid items-start py-4 md:py-5">
          <Link href="/" className="col-span-2 flex items-center gap-2.5 text-[var(--paper)] md:col-span-1" aria-label="Nexusbizz home">
            <NMark className="h-[22px] w-[22px] shrink-0 text-[var(--signal)]" />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.01em" }} className="text-[17px] leading-none">
              NEXUSBIZZ
            </span>
          </Link>

          <p
            className="nx-mono hidden pl-0 text-white/85 transition-opacity duration-500 md:block"
            style={{ opacity: solid ? 0 : 1 }}
          >
            US holding company,
            <br />[ Built for everywhere ]
          </p>
          <p
            className="nx-mono hidden text-white/85 transition-opacity duration-500 md:block"
            style={{ opacity: solid ? 0 : 1 }}
          >
            AI agents · Commerce · Energy
            <br />[ Ventures + Studio ]
          </p>

          <nav className="col-span-2 flex justify-end gap-1.5 md:col-span-1" aria-label="Primary">
            <div className="hidden gap-1.5 lg:flex">
              {LINKS.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nx-box nx-mono !text-[12px]"
                  aria-current={pathname === l.href ? "page" : undefined}
                  data-brief={l.href === "/contact" ? "" : undefined}
                >
                  <Scramble text={l.label} />
                </Link>
              ))}
            </div>
            <div className="lg:hidden">
            <button
              type="button"
              className="nx-box nx-mono !text-[12px] lg:hidden"
              aria-expanded={open}
              aria-controls="nx-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <Scramble text={open ? "Close" : "Menu"} />
              <span className="relative block h-[8px] w-[14px]" aria-hidden>
                <i className="absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-500" style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }} />
                <i className="absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-500" style={{ transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }} />
              </span>
            </button>
            </div>
          </nav>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="nx-menu"
        className="fixed inset-0 z-40 flex flex-col justify-end bg-[var(--ink)] pb-10 pt-24 lg:hidden"
        style={{
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.8s var(--ease-out)",
        }}
        aria-hidden={!open}
      >
        <div className="nx-lines" aria-hidden>
          <span /><span /><span /><span />
        </div>
        <ul className="nx-gutter relative z-10 space-y-1">
          {[...LINKS, ...VENTURES.map((v) => ({ href: `/ventures/${v.slug}`, label: v.name }))].map((l, i) => (
            <li
              key={l.href}
              style={{
                transform: open ? "none" : "translateY(40px)",
                opacity: open ? 1 : 0,
                transition: `transform 0.9s var(--ease-out) ${0.1 + i * 0.05}s, opacity 0.6s ${0.1 + i * 0.05}s`,
              }}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={i < LINKS.length ? "block text-[42px] font-medium leading-[1.1] tracking-tight" : "nx-mono block py-1 text-white/60"}
                tabIndex={open ? 0 : -1}
              >
                {i >= LINKS.length && <span className="text-[var(--signal)]">[ 0{i - LINKS.length + 1} ] </span>}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
