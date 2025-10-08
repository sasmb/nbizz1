import { AiVideoHero } from "@/components/ui/ai-video-hero";
import { AiVideoBenefits } from "@/components/ui/ai-video-benefits";
import { AiVideoProblem } from "@/components/ui/ai-video-problem";
import { AiVideoPricing } from "@/components/ui/ai-video-pricing";
import { SalesPageHeader } from "@/components/ui/sales-page-header";
import AiVideoCTA from "@/components/ui/ai-video-cta";

export default function AiVideoPage() {
  return (
    <div className="w-full">
      <SalesPageHeader calLink="https://cal.com/samogb" />
      <AiVideoHero />
      <AiVideoPricing />
      <AiVideoBenefits />
      <AiVideoProblem />
      <AiVideoPricing />
      <div className="bg-black py-16">
        <AiVideoCTA />
      </div>
    </div>
  );
}

