import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "NexusBizz - Branded Content Solutions for Modern Businesses",
        template: `%s | NexusBizz`
    },
    description: "NexusBizz offers expertly curated and branded content solutions to help businesses save time, build authority, and boost audience engagement.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "NexusBizz - Branded Content Solutions for Modern Businesses",
        description: "Transform your social media presence with NexusBizz. Save time, build credibility, and engage your audience with branded content solutions.",
        images: [
            {
                url: "/Users/realsamogb/Desktop/nbizz/public/assets/nbizz logo black and white 1 pic.png",
                width: 1200,
                height: 630,
                alt: "NexusBizz Branded Content Solutions",
            }
        ],
        url: "https://www.nexusbizz.com",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@nexusbizz",
        title: "NexusBizz - Branded Content Solutions for Modern Businesses",
        description: "NexusBizz provides curated content and branding services to help businesses grow their authority and engagement effortlessly.",
        images: [
            {
                url: "/Users/realsamogb/Desktop/nbizz/public/assets/nbizz logo black and white 1 pic.png",
                alt: "NexusBizz - Branded Content Solutions",
            }
        ]
    },
    viewport: {
        width: "device-width",
        initialScale: 1.0
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://nexusbizz.com",
    },
    keywords: [
        "branded content solutions",
        "social media content strategy",
        "automated content curation",
        "business content growth",
        "content marketing for businesses",
        "audience engagement tools",
        "social media branding services",
        "online authority building",
        "high-performance social media posts",
        "professional content management",
        "custom branded video editing",
        "content scheduling solutions",
        "social media growth strategies",
        "digital content marketing tools",
        "social media automation",
        "NexusBizz",
    ],
};
