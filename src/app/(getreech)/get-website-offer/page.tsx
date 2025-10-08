import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { ProblemSection } from "@/components/ui/problem-section";
import CallToAction from "@/components/ui/call-to-action-1";

export default function GetReechPage() {
  return (
    <div className="w-full">
      <AuroraHero />
      <ProblemSection />
      <div className="bg-black py-16">
        <CallToAction />
      </div>
      <BenefitsSection />
      <div className="bg-black py-16">
        <CallToAction />
      </div>
    </div>
  );
}

