"use client";
import React, { useState, useRef, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";

export function NBizzNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      <div className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between items-center px-4 sm:px-8 py-4">
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

        {/* Desktop Navigation Menu */}
        <div 
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="hidden md:flex justify-center space-x-6"
        >
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-1 text-sm w-full max-w-[280px] sm:max-w-[320px]">
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
            <div className="flex flex-col space-y-1 text-sm w-full max-w-[200px] sm:max-w-[240px]">
              <HoveredLink href="/solutions">All Solutions</HoveredLink>
              <HoveredLink href="/solutions#ecommerce">E-commerce</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-1 text-sm w-full max-w-[200px] sm:max-w-[240px]">
              <HoveredLink href="/pricing">View All Plans</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-1 text-sm w-full max-w-[180px] sm:max-w-[220px]">
              <HoveredLink href="/docs">Documentation</HoveredLink>
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/case-studies">Case Studies</HoveredLink>
              <HoveredLink href="/support">Support</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://cal.com/samogb/30min" 
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Book a call
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-2 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg md:hidden max-h-[calc(100vh-120px)] overflow-y-auto z-50">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-base mb-2">Services</h3>
                <Link href="/services/website-creation" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Website Creation</Link>
                <Link href="/services/ai-sales-automation" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>AI Sales Automation</Link>
                <Link href="/services/content-creation" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Content Creation</Link>
                <Link href="/services/marketing-automation" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Marketing Automation</Link>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="font-semibold text-base mb-2">Solutions</h3>
                <Link href="/solutions" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>All Solutions</Link>
                <Link href="/solutions#small-business" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Small Business</Link>
                <Link href="/solutions#agencies" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Digital Agencies</Link>
                <Link href="/solutions#enterprise" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
                <Link href="/solutions#ecommerce" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>E-commerce</Link>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="font-semibold text-base mb-2">Pricing</h3>
                <Link href="/pricing" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>View All Plans</Link>
                <Link href="/pricing#monthly" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Monthly - $20/month</Link>
                <Link href="/pricing#yearly" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Yearly - $100/year</Link>
                <Link href="/pricing#lifetime" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Lifetime - $350 one-time</Link>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="font-semibold text-base mb-2">Resources</h3>
                <Link href="/docs" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Documentation</Link>
                <Link href="/blog" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link href="/case-studies" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
                <Link href="/support" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <Link 
                  href="https://cal.com/samogb/30min" 
                  className={cn(buttonVariants({ size: "sm" }), "w-full justify-center")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 