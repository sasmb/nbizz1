"use client";
import { HeroSection } from "@/components/ui/dynamic-hero";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";

export default function MarketingAutomationPage() {
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <NBizzNavbar />
      <HeroSection
        heading="Marketing Automation Solutions"
        tagline="Email campaigns, paid ads management, and sales funnels. Streamline your marketing efforts with powerful automation tools."
        buttonText="Automate Marketing"
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        onButtonClick={handleGetStarted}
      />
    </div>
  );
} 