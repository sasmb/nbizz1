"use client";
import { HeroSection } from "@/components/ui/dynamic-hero";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";

export default function WebsiteCreationPage() {
  const handleGetStarted = () => {
    // Redirect to contact or booking page
    window.location.href = '/contact';
  };

  return (
    <div>
      <NBizzNavbar />
      <HeroSection
        heading="Professional Website Creation"
        tagline="Custom websites with SEO optimization and lead generation tools. Transform your online presence with our comprehensive web development solutions."
        buttonText="Start Your Website"
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        onButtonClick={handleGetStarted}
      />
    </div>
  );
} 