import type { MetadataRoute } from "next";
import { VENTURES } from "@/components/nx/data";
import { SITE_URL } from "@/components/nx/seo";
import { POSTS } from "@/components/nx/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core: [string, number][] = [
    ["/", 1],
    ["/ai-agents", 0.9],
    ["/studio", 0.8],
    ["/contact", 0.8],
    ...VENTURES.map((v) => [`/ventures/${v.slug}`, 0.8] as [string, number]),
    ["/case-studies", 0.6],
    ["/case-studies/mercy-luxury-hair", 0.5],
    ["/case-studies/ofam-mills", 0.5],
    ["/about", 0.5],
    ["/blog", 0.5],
    ...POSTS.map((p) => [`/blog/${p.slug}`, 0.5] as [string, number]),
  ];
  return core.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "monthly", priority }));
}
