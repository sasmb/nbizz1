"use client";
import React, { useState, useRef, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NBizzNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      <div className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/assets/logos.png"
            alt="NBizz Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-lg font-medium">NBizz</span>
        </Link>

        {/* Navigation Menu */}
        <div 
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="flex justify-center space-x-6"
        >
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Website Creation"
                href="/services/website-creation"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
                description="Custom websites with SEO optimization and lead generation tools."
              />
              <ProductItem
                title="AI Sales Automation"
                href="/services/ai-sales-automation"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
                description="AI-powered chat assistants and automated lead capture systems."
              />
              <ProductItem
                title="Content Creation"
                href="/services/content-creation"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
                description="Branded content reposting and social media management."
              />
              <ProductItem
                title="Marketing Automation"
                href="/services/marketing-automation"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
                description="Email campaigns, paid ads management, and sales funnels."
              />
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/solutions">All Solutions</HoveredLink>
              <HoveredLink href="/solutions#small-business">Small Business</HoveredLink>
              <HoveredLink href="/solutions#agencies">Digital Agencies</HoveredLink>
              <HoveredLink href="/solutions#enterprise">Enterprise</HoveredLink>
              <HoveredLink href="/solutions#ecommerce">E-commerce</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pricing">View All Plans</HoveredLink>
              <HoveredLink href="/pricing#monthly">Monthly - $20/month</HoveredLink>
              <HoveredLink href="/pricing#yearly">Yearly - $100/year</HoveredLink>
              <HoveredLink href="/pricing#lifetime">Lifetime - $350 one-time</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/docs">Documentation</HoveredLink>
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/case-studies">Case Studies</HoveredLink>
              <HoveredLink href="/support">Support</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* CTA Button */}
        <Link 
          href="https://cal.com/samogb/30min" 
          className={buttonVariants({ size: "sm" })}
        >
          Book a call
        </Link>
      </div>
    </div>
  );
} 