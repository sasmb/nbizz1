import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
      default: "Nbizz - Automated Solutions for Modern Business",
      template: `%s | Nbizz`
    },
    description: "Nbizz designs intelligent systems to automate operations for modern businesses. Streamline tasks, increase efficiency, and boost growth effortlessly!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Nbizz - Automated Solutions for Modern Business",
        description: "Nbizz creates tailored automation solutions that empower modern businesses. Streamline operations, increase productivity, and drive growth without hassle!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@dreamswerver",
        title: "Nbizz - Automated Solutions for Modern Business",
        description: "Nbizz designs intelligent automation systems to streamline business operations, increase productivity, and boost growth effortlessly!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
};