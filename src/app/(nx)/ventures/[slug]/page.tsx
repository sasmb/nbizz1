import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { VENTURES } from "@/components/nx/data";
import { PageHero } from "@/components/nx/page-hero";
import { Media } from "@/components/nx/media";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { FitWord } from "@/components/nx/fit-word";
import { ReachOut, Footer } from "@/components/nx/closing";

export function generateStaticParams() {
  return VENTURES.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = VENTURES.find((x) => x.slug === params.slug);
  if (!v) return {};
  return { title: v.name, description: `${v.line} ${v.name} is a Nexusbizz company.` };
}

export default function VenturePage({ params }: { params: { slug: string } }) {
  const i = VENTURES.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const v = VENTURES[i];
  const next = VENTURES[(i + 1) % VENTURES.length];

  return (
    <>
      <main className="relative bg-[var(--ink)]">
        <PageHero
          eyebrow={`[ Venture ${v.index} · ${v.sector} ]`}
          title={v.line}
          word={v.short}
          aside={
            <p className="nx-mono flex items-center gap-3 text-white/70">
              <span className="nx-dot" style={v.status === "Live" ? undefined : { background: "var(--amber)", animation: "none" }} aria-hidden />[ {v.status} ]
            </p>
          }
        />

        <section className="relative border-t border-white/[0.06]">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] gap-y-10 py-[14vh]">
            <Reveal className="col-span-4 md:col-span-1">
              <p className="nx-mono text-[var(--signal)]">[ What it is ]</p>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-2 md:col-start-3" delay={0.08}>
              <p className="text-[24px] leading-[1.25] tracking-[-0.015em] md:text-[clamp(24px,2vw,34px)]">{v.body}</p>
            </Reveal>
          </div>
          <Reveal className="nx-gutter relative z-[2] pb-[14vh]">
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#111]">
              <Media media={v.media} className="absolute inset-0 h-full w-full object-cover" priority />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,7,7,0) 55%, rgba(7,7,7,0.6))" }} />
              <p className="nx-mono absolute bottom-4 left-4 text-white/80">[ {v.name} ]</p>
            </div>
          </Reveal>
        </section>

        <section className="nx-gutter pb-[14vh]" aria-label={`${v.name} pillars`}>
          <ul className="bg-[var(--paper)] text-[var(--ink)]">
            {v.pillars.map((p, k) => (
              <li key={p.title} className={k ? "border-t border-black/[0.08]" : ""}>
                <Reveal className="nx-row grid grid-cols-1 gap-4 p-6 md:grid-cols-4 md:gap-0 md:p-0" y={18}>
                  <p className="flex items-baseline gap-3 md:px-6 md:py-8">
                    <span className="nx-row-num nx-mono text-black/40">0{k + 1}</span>
                    <span className="text-[26px] leading-none tracking-[-0.02em] md:text-[clamp(22px,1.9vw,32px)]">{p.title}</span>
                  </p>
                  <p className="max-w-[46ch] text-[15px] leading-[1.6] text-black/70 md:col-span-2 md:col-start-3 md:px-6 md:py-8">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="nx-mono text-white/50">
              {v.name} is a Nexusbizz company <span className="text-[var(--signal)]">[ Nexusbizz LLC, USA ]</span>
            </p>
            <p className="flex flex-wrap gap-3">
              {v.tags.map((t) => (
                <span key={t} className="nx-mono text-white/50">
                  [ {t} ]
                </span>
              ))}
            </p>
          </Reveal>
        </section>

        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <Link href={`/ventures/${next.slug}`} className="group nx-gutter block py-[10vh]">
            <p className="nx-mono mb-6 flex items-center justify-between text-white/60">
              <span>[ Next venture · {next.index} ]</span>
              <span className="flex items-center gap-3 text-[var(--signal)]">
                {next.name} <Arrow />
              </span>
            </p>
            <div className="overflow-hidden">
              <div className="translate-y-[18%] transition-transform duration-[1100ms] [transition-timing-function:var(--ease-out)] group-hover:translate-y-0">
                <FitWord word={next.short} className="block w-full text-white/15 transition-colors duration-700 group-hover:text-[var(--signal)]" />
              </div>
            </div>
          </Link>
        </section>

        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
