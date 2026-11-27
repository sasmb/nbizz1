import Link from "next/link";
import { PageHero } from "@/components/nx/page-hero";
import { AgentsSection } from "@/components/nx/agents-section";
import { ReachOut, Footer } from "@/components/nx/closing";
import { Faq } from "@/components/nx/faq";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { Scramble } from "@/components/nx/scramble";
import { AGENT_FAQ } from "@/components/nx/data";
import { JsonLd, agentServiceLd, breadcrumbLd, faqLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "AI Agents, AI Development & Implementation",
  description:
    "Nexusbizz builds AI agents for sales, support and operations, plus custom AI development and implementation that connects to WhatsApp, payments, inventory and your CRM.",
  path: "/ai-agents",
});

const USES = [
  { t: "Sales & ordering agents", d: "Take orders and bookings over WhatsApp, Instagram and web chat, send payment links and confirm delivery." },
  { t: "Customer support agents", d: "Answer questions from your policies and catalogue, track orders and hand off to a person with full context." },
  { t: "Operations agents", d: "Reconcile payments, update inventory, chase invoices and keep spreadsheets and CRMs in sync." },
  { t: "Knowledge assistants", d: "Internal copilots that search your documents, SOPs and data so your team gets answers in seconds." },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Map the conversations and tasks that eat your team's time, and pick the first agent with the clearest payoff." },
  { n: "02", t: "Design", d: "Define what the agent can do, which systems it touches, its guardrails and when it hands off to a person." },
  { n: "03", t: "Build & integrate", d: "Build the agent, connect it to your tools and test it against real conversations before launch." },
  { n: "04", t: "Launch & improve", d: "Go live, monitor every run, and improve accuracy and coverage month after month." },
];

export default function AiAgentsPage() {
  return (
    <>
      <JsonLd
        data={[
          agentServiceLd,
          faqLd(AGENT_FAQ),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "AI Agents", path: "/ai-agents" },
          ]),
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <PageHero
          eyebrow="[ AI agents · Development · Implementation ]"
          word="Agents"
          title="AI agents that do real work for your business."
          aside={
            <Link href="/contact" data-brief className="nx-cta nx-mono max-w-[360px] !text-[13px]">
              <Scramble text="Start an AI project" />
              <Arrow />
            </Link>
          }
        />
        <AgentsSection />

        <section className="relative border-t border-white/[0.06]" aria-labelledby="uses-h">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter relative z-[2] py-[12vh]">
            <Reveal>
              <p className="nx-mono text-[var(--signal)]">[ What we build ]</p>
              <h2 id="uses-h" className="mt-4 max-w-[18ch] text-[34px] leading-[1.05] tracking-[-0.02em] md:text-[clamp(34px,3vw,52px)]">
                Agents for the work that never stops.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
              {USES.map((u, i) => (
                <Reveal as="li" key={u.t} delay={i * 0.06} className="nx-row bg-[var(--ink)] p-6 md:p-8">
                  <p className="nx-row-num nx-mono text-white/40">0{i + 1}</p>
                  <h3 className="mt-6 text-[22px] tracking-[-0.01em]">{u.t}</h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-white/60">{u.d}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="nx-gutter pb-[12vh]" aria-labelledby="process-h">
          <ul className="bg-[var(--paper)] text-[var(--ink)]">
            <li className="flex items-baseline justify-between px-6 pb-2 pt-8">
              <h2 id="process-h" className="nx-mono text-[var(--signal-deep)]">
                [ How we deliver ]
              </h2>
              <span className="nx-mono text-black/40">2–6 weeks to a first live agent</span>
            </li>
            {PROCESS.map((p) => (
              <li key={p.n} className="border-t border-black/[0.08]">
                <Reveal className="nx-row grid grid-cols-1 gap-3 p-6 md:grid-cols-4 md:gap-0 md:p-0" y={16}>
                  <p className="flex items-baseline gap-3 md:px-6 md:py-8">
                    <span className="nx-row-num nx-mono text-black/40">{p.n}</span>
                    <span className="text-[26px] leading-none tracking-[-0.02em] md:text-[clamp(22px,1.9vw,32px)]">{p.t}</span>
                  </p>
                  <p className="max-w-[52ch] text-[15px] leading-[1.6] text-black/70 md:col-span-2 md:col-start-3 md:px-6 md:py-8">{p.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="nx-gutter pb-[14vh]" aria-labelledby="afaq-h">
          <h2 id="afaq-h" className="nx-mono mb-6 text-[var(--signal)]">
            [ AI agent questions ]
          </h2>
          <Faq items={AGENT_FAQ} tone="light" />
        </section>
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
