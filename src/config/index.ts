import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Nbizz - AI Powered sales assistant",
        template: `%s | Nbizz`
    },
    description: "NBizz AI Create's personalized sales experiences in minutes. No technical expertise needed. Start boosting your revenue today!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Nbizz - AI Powered sales assistant",
        description: "NBizz AI transforms your sales conversations with intelligent automation. Create personalized sales experiences in minutes. No technical expertise needed. Start boosting your revenue today!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@dreamswerver",
        title: "Nbizz - AI Powered sales assistant",
        description: "NBizz AI transforms your sales conversations with intelligent automation. Create personalized sales experiences in minutes. No technical expertise needed. Start boosting your revenue today!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
};
