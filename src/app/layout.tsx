import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google"; 
import { Metadata } from "next";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    }
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
