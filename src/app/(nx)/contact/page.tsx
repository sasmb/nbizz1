import { BriefForm } from "@/components/nx/brief-form";
import { Footer } from "@/components/nx/closing";
import { Faq } from "@/components/nx/faq";
import { Reveal } from "@/components/nx/reveal";
import { CONTACT_EMAIL } from "@/components/nx/data";
import { JsonLd, breadcrumbLd, faqLd, pageMeta, SITE_URL, ORG_ID } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Start a project with Nexusbizz: AI agents, AI development and implementation, websites and AI video. Send a short brief and we reply within two business days.",
  path: "/contact",
});

const FAQ = [
  { q: "How fast will you reply?", a: "We read every brief and reply within two business days, usually sooner." },
  {
    q: "What should I include in my brief?",
    a: "What you want to build, who it is for and any tools it needs to work with. A few sentences is enough; we will ask the rest on a call.",
  },
  {
    q: "Do you work with companies outside the United States?",
    a: "Yes. Nexusbizz LLC is registered in the United States and works with clients worldwide, remotely.",
  },
  {
    q: "Can I partner with or invest in a Nexusbizz venture?",
    a: "Yes. Choose “Venture partnership” in the brief and tell us which venture, whether that is Nepo Commerce, Fayaa Tech or Sohae Finance.",
  },
];

const NEXT = [
  { n: "01", t: "We read your brief", d: "A real person on the team reviews it, usually the same day." },
  { n: "02", t: "A 30-minute call", d: "We dig into the goal, the systems involved and what success looks like." },
  { n: "03", t: "A written plan", d: "Scope, timeline and a fixed quote. No surprises later." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqLd(FAQ),
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE_URL}/contact`, name: "Contact Nexusbizz", about: { "@id": ORG_ID } },
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <section className="relative min-h-[100svh] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(55% 60% at 15% 20%, rgba(92,30,10,0.6), rgba(45,16,8,0.35) 40%, rgba(7,7,7,0) 72%)" }}
            aria-hidden
          />
          <div className="nx-pinstripe absolute inset-0" aria-hidden />
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] gap-y-12 pb-[12vh] pt-[16vh]">
            <div className="col-span-4 lg:col-span-1">
              <p className="nx-mono text-[var(--signal)]">[ Contact ]</p>
              <h1 className="mt-5 text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[clamp(40px,3.6vw,60px)]">Start a project.</h1>
              <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.6] text-white/65">
                AI agents, AI development and implementation, websites and AI video. Four quick steps and the team has
                everything it needs.
              </p>
              <dl className="mt-10 space-y-5">
                <div>
                  <dt className="nx-mono text-white/40">[ Email ]</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="nx-link text-[17px]">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="nx-mono text-white/40">[ Social ]</dt>
                  <dd className="mt-1">
                    <a href="https://www.instagram.com/nexusbizz/" target="_blank" rel="noreferrer" className="nx-link text-[17px]">
                      Instagram @nexusbizz
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="nx-mono text-white/40">[ Company ]</dt>
                  <dd className="mt-1 text-[15px] text-white/75">Nexusbizz LLC · United States · working worldwide</dd>
                </div>
              </dl>
            </div>
            <div className="col-span-4 lg:col-span-3 lg:pl-[4%]">
              <div className="border border-white/[0.08] bg-[#0b0a09]/90 p-6 shadow-[0_60px_160px_rgba(0,0,0,0.55)] backdrop-blur md:p-12">
                <BriefForm />
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/[0.06]" aria-labelledby="next-h">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] gap-y-8 py-[12vh]">
            <Reveal className="col-span-4 md:col-span-1">
              <p className="nx-mono text-[var(--signal)]">[ What happens next ]</p>
              <h2 id="next-h" className="mt-4 text-[30px] leading-[1.1] tracking-[-0.02em]">
                From brief to plan in a week.
              </h2>
            </Reveal>
            {NEXT.map((s, i) => (
              <Reveal key={s.n} className="col-span-4 border-t border-white/[0.1] pt-5 md:col-span-1" delay={0.06 * (i + 1)}>
                <p className="nx-mono text-white/40">{s.n}</p>
                <h3 className="mt-3 text-[20px]">{s.t}</h3>
                <p className="mt-2 max-w-[32ch] text-[14px] leading-[1.6] text-white/60">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="nx-gutter pb-[14vh]" aria-labelledby="faq-h">
          <h2 id="faq-h" className="nx-mono mb-6 text-[var(--signal)]">
            [ Questions ]
          </h2>
          <Faq items={FAQ} tone="light" />
        </section>
      </main>
      <Footer />
    </>
  );
}
