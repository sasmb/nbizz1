"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NBizzNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Website Creation"
              href="/services/website"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
              description="Custom websites with SEO optimization and lead generation tools."
            />
            <ProductItem
              title="AI Sales Automation"
              href="/services/ai-sales"
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
              description="AI-powered chat assistants and automated lead capture systems."
            />
            <ProductItem
              title="Content Creation"
              href="/services/content"
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
              description="Branded content reposting and social media management."
            />
            <ProductItem
              title="Marketing Automation"
              href="/services/marketing"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
              description="Email campaigns, paid ads management, and sales funnels."
            />
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/solutions/small-business">Small Business</HoveredLink>
            <HoveredLink href="/solutions/agencies">Agencies</HoveredLink>
            <HoveredLink href="/solutions/enterprise">Enterprise</HoveredLink>
            <HoveredLink href="/solutions/ecommerce">E-commerce</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pricing#monthly">Monthly - $20/month</HoveredLink>
            <HoveredLink href="/pricing#yearly">Yearly - $100/year</HoveredLink>
            <HoveredLink href="/pricing#lifetime">Lifetime - $350 one-time</HoveredLink>
            <HoveredLink href="/pricing#compare">Compare Plans</HoveredLink>
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
      </Menu>
    </div>
  );
} 