import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dark } from '@clerk/themes';
import { Inter } from "next/font/google"; 


const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased",
                    font.className
                )}
            >
                <div className="relative">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
};
