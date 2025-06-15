import React from "react";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import HoverPriceCard from "@/components/modules/landing/HoverPriceCard";
import { EnterpriseCard } from "@/components/modules/landing/EnterpriseCard";
import { Hero } from "@/components/ui/animated-hero";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { cn, constructMetadata } from "@/lib/utils";
import { StickyScroll } from "@/components/modules/landing/StickyScrollReveal";
import { BackgroundBeams } from "@/components/modules/landing/BackgroundBeams";
import { ClientLogosSection } from "@/components/sections/client-logos";
import { WebCreationShowcase } from "@/components/sections/web-creation-showcase";
import { NBizzYearlyPricing } from "@/components/sections/nbizz-yearly-pricing";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Hero section - no overflow control */}
      <section className="w-full relative max-w-full overflow-x-hidden">
        <MaxWidthWrapper className="flex items-center justify-center">
          <Hero />
        </MaxWidthWrapper>
        <BackgroundBeams />
      </section>
      
      {/* Client Logos Section */}
      <ClientLogosSection />
      
      {/* NBizz Yearly Pricing - Featured Plan */}
      <NBizzYearlyPricing />
      
      {/* All other sections with overflow control */}
      <div className="main-content">
        {/* Web Creation Showcase - Complete Business Solutions */}
        <WebCreationShowcase />

        <section className="w-full py-20 max-w-full overflow-x-hidden">
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center py-20 w-full">
              <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
                <h2 className="text-4xl md:text-6xl tracking-tighter max-w-xl text-center font-regular">
                  Our Features
          </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center mt-8">
                  Discover the powerful tools and features that make NBizz the perfect choice for your business.
          </p>
          </div>
              <StickyScroll />
          </div>
        </MaxWidthWrapper>
      </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        <section className="w-full py-20 max-w-full overflow-x-hidden">
        <MaxWidthWrapper>
            <EnterpriseCard />
        </MaxWidthWrapper>
      </section>

        <section className="w-full py-20 max-w-full overflow-x-hidden">
          <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center py-20 w-full">
              <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
                <h2 className="text-4xl md:text-6xl tracking-tighter max-w-xl text-center font-regular">
                  Ready to get started?
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center mt-8">
                  Join thousands of businesses that trust NBizz for their growth and automation needs.
          </p>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <Link href="https://cal.com/samogb/30min" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Book a consultation
                </Link>
                <Link href="/pricing" className={buttonVariants({ size: "lg" })}>
                  Get started now
            </Link>
          </div>
        </div>
          </MaxWidthWrapper>
      </section>
      </div>
    </div>
  );
};

export default HomePage;

export const metadata = constructMetadata();
