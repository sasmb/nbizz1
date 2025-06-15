import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google"; 
import { Metadata, Viewport } from "next";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ]
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://nbizz.com"),
    ...SITE_CONFIG,
    icons: {
        icon: [
            {
                url: "/favicon.svg",
                type: "image/svg+xml",
                sizes: "any"
            }
        ],
        shortcut: ["/favicon.svg"],
        apple: [
            { url: "/favicon.svg" }
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon.svg"
            }
        ]
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    manifest: "/manifest.json"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-[100vw] overflow-x-hidden",
                    font.className
                )}
            >
                    {children}
                    <Footer />
            </body>
        </html>
    );
}
