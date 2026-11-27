import type { Metadata } from "next";
import { AGENT_FAQ, CONTACT_EMAIL, STUDIO, VENTURES } from "./data";

export const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://www.nexusbizz.com").replace(/\/$/, "");
export const ORG_ID = `${SITE_URL}/#organization`;
const OG = { url: "/og.jpg", width: 1200, height: 630, alt: "Nexusbizz: AI agents and the ventures behind what's next" };

/** Per-page metadata with canonical URL, Open Graph and Twitter cards filled in consistently. */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const full = title ? `${title} | Nexusbizz` : "Nexusbizz | AI agents, AI development and the companies behind what's next";
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Nexusbizz", url: path, title: full, description, images: [OG], locale: "en_US" },
    twitter: { card: "summary_large_image", title: full, description, images: [OG.url] },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is static data we author; escape "<" so it can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Nexusbizz",
  legalName: "Nexusbizz LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: CONTACT_EMAIL,
  description:
    "Nexusbizz LLC is a US company that builds AI agents and custom AI for businesses, and is the parent company of Nepo Commerce, Fayaa Tech and Sohae Finance.",
  address: { "@type": "PostalAddress", addressCountry: "US" },
  areaServed: "Worldwide",
  sameAs: ["https://www.instagram.com/nexusbizz/"],
  knowsAbout: [
    "AI agents",
    "Agentic AI",
    "AI development",
    "AI implementation",
    "Large language model integration",
    "Conversational commerce",
    "WhatsApp automation",
    "Website development",
    "AI video production",
    "Renewable energy investment",
  ],
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: CONTACT_EMAIL, url: `${SITE_URL}/contact`, availableLanguage: ["English"] },
  subOrganization: VENTURES.map((v) => ({
    "@type": "Organization",
    "@id": `${SITE_URL}/ventures/${v.slug}#organization`,
    name: v.name,
    description: `${v.line} ${v.body}`,
    url: `${SITE_URL}/ventures/${v.slug}`,
    parentOrganization: { "@id": ORG_ID },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nexusbizz Studio services",
    itemListElement: STUDIO.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.body, provider: { "@id": ORG_ID } },
    })),
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Nexusbizz",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export const agentServiceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ai-agents#service`,
  name: "AI agent development and implementation",
  serviceType: "AI agent development",
  provider: { "@id": ORG_ID },
  areaServed: "Worldwide",
  url: `${SITE_URL}/ai-agents`,
  description:
    "Nexusbizz designs, builds and implements AI agents for sales, customer support and operations, integrated with WhatsApp, web chat, email, payments, inventory and CRMs.",
};

export { AGENT_FAQ };
