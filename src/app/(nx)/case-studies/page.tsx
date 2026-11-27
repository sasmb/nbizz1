import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/nx/page-hero";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { ReachOut, Footer } from "@/components/nx/closing";
import { CASE_STUDIES } from "@/components/nx/case-studies-data";
import { JsonLd, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "Case Studies",
  description:
    "How Nexusbizz helped Mercy Luxury Hair and Ofam Mills sell online: e-commerce, WhatsApp ordering and brand building that grew revenue.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
        ])}
      />
      <main className="relative bg-[var(--ink)]">
        <PageHero eyebrow="[ Selected work ]" word="Work" title="Brands we've helped sell more, online and in chat." />
        <section className="relative border-t border-white/[0.06]" aria-label="Case studies">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <ul className="nx-dark nx-gutter relative z-[2] py-[10vh]">
            {CASE_STUDIES.map((c, i) => (
              <li key={c.id} className="border-t border-white/[0.08] first:border-t-0">
                <Reveal y={16}>
                  <Link href={`/case-studies/${c.id}`} className="nx-row group nx-grid gap-y-6 py-10">
                    <div className="col-span-4 md:col-span-2">
                      <p className="nx-mono text-white/40">
                        <span className="nx-row-num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="ml-3">{c.industry} · {c.location} · {c.year}</span>
                      </p>
                      <h2 className="mt-5 text-[40px] leading-none tracking-[-0.03em] md:text-[clamp(40px,4vw,72px)]">{c.client}</h2>
                      <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.55] text-white/65">{c.title}</p>
                      <ul className="mt-8 grid max-w-[520px] grid-cols-2 gap-px bg-white/[0.08]">
                        {c.results.slice(0, 2).map((r) => (
                          <li key={r.metric} className="bg-[var(--ink)] py-4 pr-4">
                            <p className="text-[34px] leading-none tracking-[-0.03em] text-[var(--paper)]">{r.value}</p>
                            <p className="nx-mono mt-2 text-white/45">{r.metric}</p>
                          </li>
                        ))}
                      </ul>
                      <p className="nx-mono mt-8 inline-flex items-center gap-3 text-[var(--signal)]">
                        Read the case study <Arrow />
                      </p>
                    </div>
                    <div className="nx-row-media relative col-span-4 aspect-[4/3] overflow-hidden md:col-span-2">
                      <Image src={c.image} alt={`${c.client} project`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
