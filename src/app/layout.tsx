import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google"; 


const font = Inter({ subsets: ["latin"] });

export const metadata = {
  ...SITE_CONFIG,
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
};
