import { Stage } from "@/components/nx/stage";
import { PinnedList } from "@/components/nx/pinned-list";
import { Proof, ReachOut, Footer } from "@/components/nx/closing";
import { STUDIO, VENTURES } from "@/components/nx/data";

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function Home() {
  return (
    <>
      <main className="relative bg-[var(--ink)]">
        <Stage />
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
          intro="The same people who build our ventures, available to yours. Three services, done properly, for brands that want to look and run like category leaders."
          rows={STUDIO.map((s) => ({
            index: s.index,
            name: s.name,
            body: s.body,
            tags: s.tags,
            href: `/studio#${slug(s.name)}`,
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
