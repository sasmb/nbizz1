import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/unbounded/800.css";
import "./nx.css";
import { SmoothScroll } from "@/components/nx/smooth";
import { Nav } from "@/components/nx/nav";
import { ContactModal } from "@/components/nx/contact-modal";
import { SITE_URL } from "@/components/nx/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexusbizz | AI agents, AI development and the companies behind what's next",
    template: "%s | Nexusbizz",
  },
  description:
    "Nexusbizz LLC builds AI agents, AI development and implementation for businesses, and is the US parent company of Nepo Commerce, Fayaa Tech and Sohae Finance.",
  applicationName: "Nexusbizz",
  publisher: "Nexusbizz LLC",
  keywords: [
    "AI agents",
    "AI agent development",
    "AI development company",
    "AI implementation",
    "WhatsApp AI agent",
    "AI automation for business",
    "custom AI solutions",
    "Nexusbizz",
    "Nepo Commerce",
    "Fayaa Tech",
    "Sohae Finance",
  ],
};

export default function NxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nx relative min-h-screen">
      <SmoothScroll />
      <Nav />
      {children}
      <ContactModal />
    </div>
  );
}
