import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { ProblemSection } from "@/components/ui/problem-section";
import { GetReechPricing } from "@/components/ui/getreech-pricing";
import { SalesPageHeader } from "@/components/ui/sales-page-header";
import CallToAction from "@/components/ui/call-to-action-1";

export default function GetReechPage() {
  return (
    <div className="w-full">
      <SalesPageHeader calLink="https://cal.com/samogb" />
      <AuroraHero />
      <GetReechPricing />
      <BenefitsSection />
      <ProblemSection />
      <GetReechPricing />
      <div className="bg-black py-16">
        <CallToAction />
      </div>
    </div>
  );
}

