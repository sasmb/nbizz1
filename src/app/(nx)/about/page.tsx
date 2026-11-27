import Link from "next/link";
import { PageHero } from "@/components/nx/page-hero";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { Scramble } from "@/components/nx/scramble";
import { ReachOut, Footer } from "@/components/nx/closing";
import { VENTURES } from "@/components/nx/data";
import { JsonLd, ORG_ID, SITE_URL, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "About Nexusbizz",
  description:
    "Nexusbizz LLC is a US company that builds AI agents and custom AI for businesses, and owns Nepo Commerce, Fayaa Tech and Sohae Finance. Founded by Samuel Ogbonna.",
  path: "/about",
});

const VALUES = [
  { t: "Customer first", d: "Every decision starts with how it helps the people we build for. Your growth is how we measure ours." },
  { t: "Quality & reliability", d: "We ship systems that keep working after launch day: tested, monitored and easy for your team to run." },
  { t: "Keep inventing", d: "We use what we build. Lessons from our own ventures go straight into the work we do for clients." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${SITE_URL}/about`,
            name: "About Nexusbizz",
            mainEntity: { "@id": ORG_ID },
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <PageHero
          eyebrow="[ About Nexusbizz ]"
          word="About"
          title="We build AI agents, and the companies they power."
          aside={
            <Link href="/contact" data-brief className="nx-cta nx-mono !text-[13px]">
              <Scramble text="Work with us" />
              <Arrow />
            </Link>
          }
        />

        <section className="relative border-t border-white/[0.06]" aria-labelledby="who-h">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] gap-y-10 py-[14vh]">
            <Reveal className="col-span-4 md:col-span-1">
              <h2 id="who-h" className="nx-mono text-[var(--signal)]">[ Who we are ]</h2>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-3" delay={0.06}>
              <p className="max-w-[28ch] text-[30px] leading-[1.15] tracking-[-0.02em] text-[var(--paper)] md:text-[clamp(30px,3vw,52px)]">
                Nexusbizz LLC is a US company with two jobs: build AI for businesses, and build businesses of our own.
              </p>
              <div className="mt-10 grid max-w-[900px] gap-8 text-[16px] leading-[1.7] text-white/70 md:grid-cols-2">
                <p>
                  We started as NBizz, helping small businesses automate sales and marketing. That work taught us where AI
                  actually earns its keep: answering customers, taking orders, and handling the repetitive work that slows a
                  team down. Today our studio designs, builds and runs AI agents and custom AI for companies of every size.
                </p>
                <p>
                  We also put that technology to work ourselves. Nexusbizz is the parent company of Nepo Commerce, Fayaa Tech
                  and Sohae Finance. Every venture shares the same engineering team and the same belief: technology should
                  amplify people, not replace them.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="nx-gutter pb-[12vh]" aria-labelledby="arms-h">
          <h2 id="arms-h" className="sr-only">What Nexusbizz does</h2>
          <div className="grid gap-px bg-white/[0.08] md:grid-cols-2">
            <Reveal className="bg-[var(--ink)] p-6 md:p-10">
              <p className="nx-mono text-[var(--signal)]">[ 01 · Studio ]</p>
              <h3 className="mt-6 text-[32px] leading-[1.05] tracking-[-0.02em] md:text-[clamp(28px,2.6vw,44px)]">AI agents, AI development and implementation</h3>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-white/60">
                Agents for sales, support and operations, custom AI inside your product, plus the websites and AI video that
                bring customers in.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <Link href="/ai-agents" className="nx-mono nx-link inline-flex items-center gap-2 text-white/85">
                  AI agents <Arrow />
                </Link>
                <Link href="/studio" className="nx-mono nx-link inline-flex items-center gap-2 text-white/85">
                  Studio <Arrow />
                </Link>
              </div>
            </Reveal>
            <Reveal className="bg-[var(--ink)] p-6 md:p-10" delay={0.06}>
              <p className="nx-mono text-[var(--signal)]">[ 02 · Ventures ]</p>
              <h3 className="mt-6 text-[32px] leading-[1.05] tracking-[-0.02em] md:text-[clamp(28px,2.6vw,44px)]">Companies we own and operate</h3>
              <ul className="nx-dark mt-6">
                {VENTURES.map((v) => (
                  <li key={v.slug} className="border-t border-white/[0.08]">
                    <Link href={`/ventures/${v.slug}`} className="nx-row flex items-baseline justify-between gap-4 py-4">
                      <span>
                        <span className="nx-row-num nx-mono mr-3 text-white/40">{v.index}</span>
                        <span className="text-[19px] tracking-[-0.01em]">{v.name}</span>
                      </span>
                      <span className="nx-mono text-white/45">{v.sector}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="nx-gutter pb-[12vh]" aria-labelledby="values-h">
          <ul className="bg-[var(--paper)] text-[var(--ink)]">
            <li className="px-6 pb-2 pt-8">
              <h2 id="values-h" className="nx-mono text-[var(--signal-deep)]">[ What we believe ]</h2>
            </li>
            {VALUES.map((v, i) => (
              <li key={v.t} className="border-t border-black/[0.08]">
                <Reveal className="nx-row grid grid-cols-1 gap-3 p-6 md:grid-cols-4 md:gap-0 md:p-0" y={16}>
                  <p className="flex items-baseline gap-3 md:col-span-2 md:px-6 md:py-8">
                    <span className="nx-row-num nx-mono text-black/40">0{i + 1}</span>
                    <span className="text-[26px] leading-none tracking-[-0.02em] md:text-[clamp(22px,1.9vw,32px)]">{v.t}</span>
                  </p>
                  <p className="max-w-[52ch] text-[15px] leading-[1.6] text-black/70 md:col-span-2 md:px-6 md:py-8">{v.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative border-t border-white/[0.06]" aria-labelledby="lead-h">
          <div className="nx-gutter nx-grid relative z-[2] gap-y-8 py-[12vh]">
            <Reveal className="col-span-4 md:col-span-1">
              <h2 id="lead-h" className="nx-mono text-[var(--signal)]">[ Leadership ]</h2>
            </Reveal>
            <Reveal className="col-span-4 md:col-span-2" delay={0.06}>
              <p className="text-[40px] leading-none tracking-[-0.03em] md:text-[clamp(40px,4vw,72px)]">Samuel Ogbonna</p>
              <p className="nx-mono mt-4 text-white/50">Founder &amp; CEO</p>
              <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.7] text-white/70">
                Samuel founded Nexusbizz to put serious technology in the hands of the businesses that usually get it last. He
                leads the studio and the ventures, and still sits in on first calls with new clients.
              </p>
              <a
                href="https://cal.com/samogb/30min"
                target="_blank"
                rel="noreferrer"
                className="nx-mono nx-link mt-8 inline-flex items-center gap-2 text-white/85"
              >
                Book a 30-minute call <Arrow />
              </a>
            </Reveal>
          </div>
        </section>
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
