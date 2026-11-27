import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Nexusbizz | AI agents, AI development and the companies behind what's next",
        template: `%s | Nexusbizz`
    },
    description: "Nexusbizz LLC builds AI agents, AI development and implementation for businesses, and is the US parent company of Nepo Commerce, Fayaa Tech and Sohae Finance.",
    applicationName: "Nexusbizz",
    authors: [{ name: "Nexusbizz LLC" }],
    generator: "Next.js",
    keywords: [
        "AI business automation",
        "website creation",
        "sales automation",
        "content management",
        "marketing automation",
        "business growth platform",
        "AI-powered tools",
        "digital transformation",
        "business efficiency",
        "lead generation",
        "automated marketing",
        "business scaling",
        "AI sales assistant",
        "content creation",
        "digital marketing",
        "Nexusbizz",
        "AI agents",
        "AI development"
    ],
    referrer: "origin-when-cross-origin",
    creator: "Nexusbizz LLC",
    publisher: "Nexusbizz LLC",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        type: "website",
        siteName: "Nexusbizz",
        title: "Nexusbizz | AI agents, AI development and the companies behind what's next",
        description: "Nexusbizz builds AI agents and custom AI for businesses, and runs ventures in commerce, AI and renewable energy.",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Nexusbizz",
            }
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nexusbizz | AI agents and AI development",
        description: "Nexusbizz builds AI agents and custom AI for businesses, and runs ventures in commerce, AI and renewable energy.",
        images: [
            {
                url: "/og.jpg",
                alt: "Nexusbizz",
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};
