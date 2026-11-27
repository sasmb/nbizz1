/** Accessible FAQ built on <details>, so answers are in the HTML for search engines and AI crawlers. */
export function Faq({ items, tone = "dark" }: { items: { q: string; a: string }[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <div className={light ? "bg-[var(--paper)] text-[var(--ink)]" : "border-t border-white/[0.08]"}>
      {items.map((f, i) => (
        <details key={f.q} className={`group ${light ? "border-b border-black/[0.08]" : "border-b border-white/[0.08]"}`}>
          <summary className="nx-row flex cursor-pointer list-none items-baseline gap-4 px-2 py-5 md:px-6 [&::-webkit-details-marker]:hidden">
            <span className={`nx-row-num nx-mono ${light ? "text-black/40" : "text-white/40"}`}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className="flex-1 text-[18px] tracking-[-0.01em] md:text-[20px]">{f.q}</h3>
            <span className="nx-mono text-[var(--signal)] transition-transform duration-300 group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className={`max-w-[68ch] px-2 pb-6 pl-[52px] text-[15px] leading-[1.65] md:pl-[72px] ${light ? "text-black/70" : "text-white/65"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
