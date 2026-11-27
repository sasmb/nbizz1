import { Stage } from "@/components/nx/stage";
import { PinnedList } from "@/components/nx/pinned-list";
import { Proof, ReachOut, Footer } from "@/components/nx/closing";
import { STUDIO, VENTURES } from "@/components/nx/data";
import { AgentsSection } from "@/components/nx/agents-section";
import { JsonLd, organizationLd, websiteLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  description:
    "Nexusbizz LLC builds AI agents, AI development and implementation for businesses, and is the US parent company of Nepo Commerce, Fayaa Tech and Sohae Finance.",
  path: "/",
});

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationLd, websiteLd]} />
      <main className="relative bg-[var(--ink)]">
        <Stage />
        <AgentsSection />
        <PinnedList
          id="ventures"
          word="Ventures"
          label="[ 03 companies, one parent ]"
          intro="Each venture is its own company with its own team and roadmap. Nexusbizz owns them, funds them and holds them to the same standard."
          rows={VENTURES.map((v) => ({
            index: v.index,
            name: v.name,
            body: v.line + " " + v.body.split(". ")[0] + ".",
            tags: v.tags,
            href: `/ventures/${v.slug}`,
            media: v.media,
            meta: `${v.sector} · ${v.status}`,
          }))}
        />
        <PinnedList
          id="studio"
          tone="dark"
          word="Studio"
          label="[ Built for other brands ]"
          intro="The team behind our ventures, available to yours: AI agents, AI development and implementation, websites and AI video, for brands that want to run like category leaders."
          rows={STUDIO.map((s) => ({
            index: s.index,
            name: s.name,
            body: s.body,
            tags: s.tags,
            href: s.name === "AI Agents" ? "/ai-agents" : `/studio#${slug(s.name)}`,
            media: s.media,
          }))}
        />
        <Proof />
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
