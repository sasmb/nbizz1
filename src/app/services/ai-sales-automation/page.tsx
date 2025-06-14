"use client";
import { HeroSection } from "@/components/ui/dynamic-hero";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";

export default function AISalesAutomationPage() {
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <NBizzNavbar />
      <HeroSection
        heading="AI-Powered Sales Automation"
        tagline="AI-powered chat assistants and automated lead capture systems. Boost your sales with intelligent automation that works 24/7."
        buttonText="Automate Sales"
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        onButtonClick={handleGetStarted}
      />
    </div>
  );
} 