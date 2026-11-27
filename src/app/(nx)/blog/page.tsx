import Link from "next/link";
import { PageHero } from "@/components/nx/page-hero";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { ReachOut, Footer } from "@/components/nx/closing";
import { POSTS, fmtDate } from "@/components/nx/blog-data";
import { JsonLd, SITE_URL, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export const metadata = pageMeta({
  title: "Blog: AI Agents and Commerce",
  description:
    "Notes from Nexusbizz on AI agents, conversational commerce and building brands that sell online and in WhatsApp.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Nexusbizz Blog",
            url: `${SITE_URL}/blog`,
            blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.publishedAt })),
          },
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <PageHero eyebrow="[ Notes from the studio ]" word="Blog" title="What we're learning about AI agents and commerce." />
        <section className="relative border-t border-white/[0.06]" aria-label="Posts">
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <ul className="nx-dark nx-gutter relative z-[2] py-[10vh]">
            {posts.map((p, i) => (
              <li key={p.slug} className="border-t border-white/[0.08] first:border-t-0">
                <Reveal delay={i * 0.04} y={16}>
                  <Link href={`/blog/${p.slug}`} className="nx-row group nx-grid gap-y-3 py-10">
                    <p className="nx-mono col-span-4 text-white/40 md:col-span-1">
                      <span className="nx-row-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ml-3">{p.category}</span>
                    </p>
                    <div className="col-span-4 md:col-span-2">
                      <h2 className="text-[26px] leading-[1.12] tracking-[-0.02em] md:text-[clamp(24px,2.1vw,36px)]">{p.title}</h2>
                      <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.6] text-white/60">{p.excerpt}</p>
                    </div>
                    <p className="nx-mono col-span-4 flex items-start justify-between gap-4 text-white/40 md:col-span-1 md:flex-col md:items-end">
                      <span>{fmtDate(p.publishedAt)} · {p.readTime}</span>
                      <span className="text-[var(--signal)] transition-transform group-hover:translate-x-1">
                        <Arrow />
                      </span>
                    </p>
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
