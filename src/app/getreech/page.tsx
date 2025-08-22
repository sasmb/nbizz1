"use client";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ReechFeatures } from "@/components/ui/reech-features";
import { ReechProblemsSolved } from "@/components/ui/reech-problems-solved";

export default function GetReechPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReechProblemsSolved />
      <ReechFeatures />
    </div>
  );
} 