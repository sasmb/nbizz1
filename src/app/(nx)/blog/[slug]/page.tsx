import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/nx/reveal";
import { Arrow } from "@/components/nx/arrow";
import { ReachOut, Footer } from "@/components/nx/closing";
import { Markdown, headings } from "@/components/nx/md";
import { POSTS, fmtDate } from "@/components/nx/blog-data";
import { JsonLd, ORG_ID, SITE_URL, breadcrumbLd, pageMeta } from "@/components/nx/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}` });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((x) => x.slug === params.slug);
  if (!post) notFound();
  const toc = headings(post.content).filter((h) => h.level === 2);
  const others = POSTS.filter((x) => x.slug !== post.slug).slice(0, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            url,
            mainEntityOfPage: url,
            articleSection: post.category,
            keywords: post.tags.join(", "),
            image: `${SITE_URL}/og.jpg`,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <main className="relative bg-[var(--ink)]">
        <header className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(55% 70% at 85% 0%, rgba(92,30,10,0.6), rgba(7,7,7,0) 70%)" }}
            aria-hidden
          />
          <div className="nx-pinstripe absolute inset-0" aria-hidden />
          <div className="nx-lines" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="nx-gutter nx-grid relative z-[2] pb-[8vh] pt-[22vh]">
            <div className="col-span-4 md:col-span-3">
              <p className="nx-mono text-[var(--signal)]">
                <Link href="/blog" className="nx-link">[ Blog ]</Link>
                <span className="ml-3 text-white/45">{post.category}</span>
              </p>
              <h1 className="mt-6 max-w-[22ch] text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[clamp(40px,4.4vw,76px)]">{post.title}</h1>
              <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.6] text-white/65">{post.excerpt}</p>
              <p className="nx-mono mt-8 text-white/45">
                {post.author} · <time dateTime={post.publishedAt}>{fmtDate(post.publishedAt)}</time> · {post.readTime}
              </p>
            </div>
          </div>
        </header>

        <section className="relative border-t border-white/[0.06]">
          <div className="nx-gutter nx-grid relative z-[2] gap-y-10 py-[8vh]">
            <aside className="col-span-4 md:col-span-1">
              <nav aria-label="In this article" className="md:sticky md:top-24">
                <p className="nx-mono mb-4 text-[var(--signal)]">[ In this article ]</p>
                <ol className="space-y-2">
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="block text-[13px] leading-[1.4] text-white/55 transition-colors hover:text-white">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
                <ul className="mt-8 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <li key={t} className="nx-mono border border-white/10 px-2 py-1 text-white/45">
                      {t}
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <article className="col-span-4 md:col-span-2">
              <Markdown src={post.content} />
            </article>
          </div>
        </section>

        <section className="relative border-t border-white/[0.06]" aria-labelledby="more-h">
          <div className="nx-gutter relative z-[2] py-[10vh]">
            <h2 id="more-h" className="nx-mono text-[var(--signal)]">[ Keep reading ]</h2>
            <ul className="nx-dark mt-8 grid gap-px bg-white/[0.08] md:grid-cols-3">
              {others.map((o, i) => (
                <Reveal as="li" key={o.slug} delay={i * 0.06} className="bg-[var(--ink)]">
                  <Link href={`/blog/${o.slug}`} className="nx-row group flex h-full flex-col p-6 md:p-8">
                    <p className="nx-row-num nx-mono text-white/40">{o.category}</p>
                    <h3 className="mt-6 text-[22px] leading-[1.15] tracking-[-0.01em]">{o.title}</h3>
                    <span className="mt-auto pt-8 text-[var(--signal)]">
                      <Arrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <ReachOut />
      </main>
      <Footer />
    </>
  );
}
