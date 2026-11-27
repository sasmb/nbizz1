import Link from "next/link";
import { STUDIO } from "@/components/nx/data";
import { PageHero } from "@/components/nx/page-hero";
import { Media } from "@/components/nx/media";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { Scramble } from "@/components/nx/scramble";
import { ReachOut, Footer } from "@/components/nx/closing";

import { JsonLd, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "Studio: AI Agents, AI Development, Websites & AI Video",
  description:
    "Nexusbizz Studio builds AI agents, custom AI development and implementation, conversion-focused websites and AI video for brands.",
  path: "/studio",
});

const DETAIL: Record<string, { get: string[]; work?: { label: string; href: string; img: string }[] }> = {
  Websites: {
    get: ["Brand-true design system", "Next.js build, tuned for speed", "Stores, checkout and payments", "SEO and analytics from day one"],
    work: [
      { label: "Mercy Luxury Hair", href: "/case-studies/mercy-luxury-hair", img: "/nx/mercy.webp" },
      { label: "Ofam Mills", href: "/case-studies/ofam-mills", img: "/nx/ofam.webp" },
    ],
  },
  "AI Video": { get: ["Concept and shot list", "Product-true AI generation", "Edit, grade and sound", "Cut-downs for every placement"] },
  "AI Agents": { get: ["Sales, support and ops agents", "WhatsApp, web chat, email and voice", "Payments, inventory and CRM actions", "Monitoring and monthly improvements"] },
  "AI Development": { get: ["LLM features inside your product", "Retrieval over your documents and data", "Extraction and automation pipelines", "Security, evals and handover"] },
};

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function StudioPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Studio", path: "/studio" }])} />
      <main className="relative bg-[var(--ink)]">
        <PageHero
          eyebrow="[ Nexusbizz Studio ]"
          word="Studio"
          title={
            <>
              Built for brands that
              <br />
              refuse to look small.
            </>
          }
          aside={
            <Link href="/contact" data-brief className="nx-cta nx-mono !text-[13px]">
              <Scramble text="Start a project" />
              <Arrow />
            </Link>
          }
        />
        {STUDIO.map((s) => {
          const d = DETAIL[s.name];
          return (
            <section key={s.name} id={slug(s.name)} className="relative scroll-mt-20 border-t border-white/[0.06]">
              <div className="nx-lines" aria-hidden>
                <span /><span /><span /><span />
              </div>
              <div className="nx-gutter nx-grid relative z-[2] gap-y-8 py-[12vh]">
                <Reveal className="col-span-4 md:col-span-1">
                  <p className="nx-mono text-white/40">{s.index}</p>
                  <h2 className="mt-2 text-[40px] leading-none tracking-[-0.03em] md:text-[clamp(36px,3.4vw,60px)]">{s.name}</h2>
                </Reveal>
                <Reveal className="col-span-4 md:col-span-1" delay={0.06}>
                  <p className="text-[16px] leading-[1.6] text-white/75">{s.body}</p>
                  <p className="nx-mono mb-3 mt-8 text-[var(--signal)]">[ What you get ]</p>
                  <ul className="space-y-2">
                    {d.get.map((g) => (
                      <li key={g} className="flex gap-3 border-t border-white/[0.07] pt-2 text-[14px] text-white/80">
                        <span className="text-[var(--signal)]">+</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal className="col-span-4 md:col-span-2" delay={0.12}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111]">
                    <Media media={s.media} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  {d.work && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {d.work.map((w) => (
                        <Link key={w.href} href={w.href} className="nx-row group relative block aspect-[16/9] overflow-hidden bg-[#111]">
                          <span className="nx-row-media absolute inset-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={w.img} alt={w.label} loading="lazy" className="h-full w-full object-cover" />
                          </span>
                          <span className="nx-mono absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 px-3 py-2 text-white backdrop-blur">
                            [ Case study ] {w.label} <Arrow />
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
