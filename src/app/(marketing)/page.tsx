import React from "react";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import HoverPriceCard from "@/components/modules/landing/HoverPriceCard";
import { EnterpriseCard } from "@/components/modules/landing/EnterpriseCard";
import { HeroContainerScroll } from "@/components/modules/landing/HeroContainerScroll";
import { InfiniteMovingCards } from "@/components/modules/landing/InfiniteMovingCard";
import { cn, constructMetadata } from "@/lib/utils";
import { StickyScroll } from "@/components/modules/landing/StickyScrollReveal";
import { BackgroundBeams } from "@/components/modules/landing/BackgroundBeams";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero section - no overflow control */}
      <section className="w-full relative">
        <MaxWidthWrapper className="flex items-center justify-center">
          <HeroContainerScroll />
        </MaxWidthWrapper>
        <BackgroundBeams />
      </section>
      
      {/* All other sections with overflow control */}
      <div className="main-content">
        <section className="w-full py-12">
          <MaxWidthWrapper className="flex items-center flex-col gap-4 md:mt-20">
            <h2 className="text-4xl text-center font-medium">
              Choose what fits you right
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Our straightforward pricing plans are tailored to meet your needs.
              If you&apos;re not ready to commit you can get started for free.
            </p>
            <div className="w-full max-w-7xl mx-auto">
              <HoverPriceCard />
            </div>
            <div className="w-full max-w-7xl mx-auto">
              <EnterpriseCard />
            </div>
          </MaxWidthWrapper>
        </section>

        <section className="w-full mt-10 md:mt-20">
          <InfiniteMovingCards pauseOnHover={false} speed="slow" />
        </section>

        <section className="w-full mt-10 md:mt-20">
          <MaxWidthWrapper>
            <div className="flex flex-col gap-8 items-center">
              <h2 className="text-4xl text-center font-medium">
                Explore new features
              </h2>
              <div className="text-muted-foreground text-center">
                <p>
                  NBizz does everything possible to provide you with a convenient
                  tool for managing your agency.
                </p>
                <p>Here are just a few tools that may interest you.</p>
              </div>
            </div>
          </MaxWidthWrapper>
          <StickyScroll />
        </section>

        <section className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Join NBizz
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Discover the power of seamless agency management with NBizz Agency
              CRM. Experience the difference today and revolutionize the way you
              manage your agency with NBizz.
            </p>
            <div className="flex justify-center mt-8">
              <Link
                href="/agency"
                className={cn(buttonVariants({ variant: "secondary" }), "w-20")}
              >
                Join
              </Link>
            </div>
          </div>
          <BackgroundBeams />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

export const metadata = constructMetadata();
