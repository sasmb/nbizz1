import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/nx/seo";

/** Open to search engines and AI assistants alike: being cited by agents is part of being found. */
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/chat-demo", "/success"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"].map(
        (ua) => ({ userAgent: ua, allow: "/", disallow })
      ),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
