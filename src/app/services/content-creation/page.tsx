"use client";
import { HeroSection } from "@/components/ui/dynamic-hero";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";

export default function ContentCreationPage() {
  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <NBizzNavbar />
      <HeroSection
        heading="Professional Content Creation"
        tagline="Branded content reposting and social media management. Elevate your brand with consistent, engaging content across all platforms."
        buttonText="Create Content"
        imageUrl="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        onButtonClick={handleGetStarted}
      />
    </div>
  );
} 