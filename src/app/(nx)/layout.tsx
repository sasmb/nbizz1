import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/unbounded/800.css";
import "./nx.css";
import { SmoothScroll } from "@/components/nx/smooth";
import { Nav } from "@/components/nx/nav";

export const metadata: Metadata = {
  title: {
    default: "Nexusbizz | The company behind Nepo Commerce, Fayaa Tech and Sohae Finance",
    template: "%s | Nexusbizz",
  },
  description:
    "Nexusbizz LLC is a US holding company building ventures in commerce, AI and renewable energy, with a studio that builds websites, AI video and automation for brands.",
};

export default function NxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nx relative min-h-screen">
      <SmoothScroll />
      <Nav />
      {children}
    </div>
  );
}
