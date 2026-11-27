import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/nx/page-hero";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { ReachOut, Footer } from "@/components/nx/closing";
import { CASE_STUDIES } from "@/components/nx/case-studies-data";
import { JsonLd, ORG_ID, SITE_URL, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = CASE_STUDIES.find((x) => x.id === params.slug);
  if (!c) return {};
  return pageMeta({ title: `${c.client}: ${c.title}`, description: c.description, path: `/case-studies/${c.id}` });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = CASE_STUDIES.find((x) => x.id === params.slug);
  if (!c) notFound();
  const next = CASE_STUDIES[(CASE_STUDIES.indexOf(c) + 1) % CASE_STUDIES.length];
  const facts = [
    ["Client", c.client],
    ["Industry", c.industry],
    ["Location", c.location],
    ["Duration", c.projectDuration],
    ["Year", c.year],
  ];
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${c.client}: ${c.title}`,
            description: c.description,
            url: `${SITE_URL}/case-studies/${c.id}`,
            image: `${SITE_URL}${c.image}`,
            about: { "@type": "Organization", name: c.client },
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            keywords: c.tags.join(", "),
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
            { name: c.client, path: `/case-studies/${c.id}` },
          ]),
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <PageHero eyebrow={`[ Case study · ${c.industry} ]`} word={c.client.split(" ")[0]} title={c.title} />

        <section className="relative border-t border-white/[0.06]" aria-label="Project facts">
          <dl className="nx-gutter grid grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-5">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-[var(--ink)] py-6 pr-4">
                <dt className="nx-mono text-white/40">[ {k} ]</dt>
                <dd className="mt-2 text-[15px] text-white/85">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="nx-gutter relative pb-[10vh] pt-[6vh]">
          <Reveal className="relative aspect-[16/9] overflow-hidden">
            <Image src={c.image} alt={`${c.client} project`} fill priority sizes="100vw" className="object-cover" />
          </Reveal>
        </section>

        <section className="relative border-t border-white/[0.06]">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] gap-y-12 py-[12vh]">
            <Reveal className="col-span-4 md:col-span-2">
              <p className="nx-mono text-[var(--signal)]">[ Overview ]</p>
              <p className="mt-5 max-w-[40ch] text-[24px] leading-[1.3] tracking-[-0.01em] text-[var(--paper)] md:text-[clamp(22px,1.8vw,30px)]">{c.description}</p>
            </Reveal>
            <div className="col-span-4 space-y-10 md:col-span-2">
              <Reveal>
                <h2 className="nx-mono text-[var(--signal)]">[ The challenge ]</h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-white/70">{c.challenge}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="nx-mono text-[var(--signal)]">[ What we built ]</h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-white/70">{c.solution}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="nx-gutter pb-[12vh]" aria-labelledby="phases-h">
          <ul className="bg-[var(--paper)] text-[var(--ink)]">
            <li className="flex items-baseline justify-between px-6 pb-2 pt-8">
              <h2 id="phases-h" className="nx-mono text-[var(--signal-deep)]">[ How we delivered ]</h2>
              <span className="nx-mono text-black/40">{c.projectDuration}</span>
            </li>
            {c.implementation.map((p, i) => (
              <li key={p.title} className="border-t border-black/[0.08]">
                <Reveal className="nx-row grid grid-cols-1 gap-3 p-6 md:grid-cols-4 md:gap-0 md:p-0" y={16}>
                  <p className="flex items-baseline gap-3 md:col-span-2 md:px-6 md:py-8">
                    <span className="nx-row-num nx-mono text-black/40">0{i + 1}</span>
                    <span className="text-[24px] leading-[1.1] tracking-[-0.02em] md:text-[clamp(20px,1.7vw,28px)]">{p.title}</span>
                  </p>
                  <div className="md:col-span-2 md:px-6 md:py-8">
                    <p className="max-w-[52ch] text-[15px] leading-[1.6] text-black/70">{p.description}</p>
                    <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex gap-2 text-[13px] text-black/60">
                          <span className="text-[var(--signal-deep)]">+</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative border-t border-white/[0.06]" aria-labelledby="results-h">
          <div className="nx-gutter relative z-[2] py-[12vh]">
            <h2 id="results-h" className="nx-mono text-[var(--signal)]">[ Results ]</h2>
            <ul className="mt-10 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {c.results.map((r, i) => (
                <Reveal as="li" key={r.metric} delay={i * 0.06} className="bg-[var(--ink)] p-6 md:p-8">
                  <p className="text-[clamp(48px,5vw,88px)] leading-none tracking-[-0.04em] text-[var(--paper)]">{r.value}</p>
                  <p className="nx-mono mt-4 text-[var(--signal)]">{r.metric}</p>
                  <p className="mt-2 text-[14px] leading-[1.55] text-white/55">{r.description}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-[10vh] max-w-[900px]">
              <blockquote>
                <p className="text-[24px] leading-[1.35] tracking-[-0.01em] text-[var(--paper)] md:text-[clamp(24px,2.2vw,36px)]">
                  &ldquo;{c.testimonial.quote}&rdquo;
                </p>
                <footer className="nx-mono mt-6 text-white/50">
                  {c.testimonial.author} · {c.testimonial.position}
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-[8vh]">
              <p className="nx-mono mb-4 text-white/40">[ Built with ]</p>
              <ul className="flex flex-wrap gap-1.5">
                {c.technologies.map((t) => (
                  <li key={t} className="nx-mono border border-white/10 px-2.5 py-1.5 text-white/60">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="nx-dark relative border-t border-white/[0.06]">
          <Link href={`/case-studies/${next.id}`} className="nx-row nx-gutter flex items-end justify-between gap-6 py-[8vh]">
            <div>
              <p className="nx-mono nx-row-num text-white/40">[ Next case study ]</p>
              <p className="mt-3 text-[40px] leading-none tracking-[-0.03em] md:text-[clamp(40px,5vw,88px)]">{next.client}</p>
            </div>
            <span className="text-[var(--signal)]">
              <Arrow className="!h-[22px] !w-[26px]" />
            </span>
          </Link>
        </section>
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
