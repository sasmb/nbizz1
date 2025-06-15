import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "NBizz - AI-Powered Business Automation & Growth Platform",
        template: `%s | NBizz`
    },
    description: "Transform your business with NBizz's comprehensive suite of AI-powered tools. From website creation to sales automation, content management to marketing campaigns - scale your business efficiently.",
    applicationName: "NBizz",
    authors: [{ name: "NBizz Team" }],
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
        "NBizz"
    ],
    referrer: "origin-when-cross-origin",
    creator: "NBizz",
    publisher: "NBizz",
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
        siteName: "NBizz",
        title: "NBizz - AI-Powered Business Automation & Growth Platform",
        description: "Transform your business with NBizz's comprehensive suite of AI-powered tools. Scale efficiently with automated website creation, sales, content, and marketing solutions.",
        images: [
            {
                url: "/assets/og-image.png",
                width: 1200,
                height: 630,
                alt: "NBizz - Business Automation Platform",
            }
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@nbizz",
        site: "@nbizz",
        title: "NBizz - AI-Powered Business Automation",
        description: "Scale your business with AI-powered automation for websites, sales, content, and marketing. Transform efficiency with NBizz.",
        images: [
            {
                url: "/assets/twitter-image.png",
                alt: "NBizz - Business Automation Platform",
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
