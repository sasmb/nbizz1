"use client";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
    Store,
    Globe,
    MessageSquare,
    ShoppingCart,
    TrendingUp,
    Shield,
    Zap,
    Users,
    CreditCard,
    Target,
} from "lucide-react";

const reechFeatures: BentoItem[] = [
    {
        title: "Complete Online Store",
        meta: "Full E-commerce",
        description:
            "Not just a landing page - build a complete business brand with custom domains and professional storefront",
        icon: <Store className="w-4 h-4 text-blue-500" />,
        status: "Core Feature",
        tags: ["E-commerce", "Branding"],
        colSpan: 2,
        hasPersistentHover: true,
        cta: "Build Store →",
    },
    {
        title: "Checkout Assistant",
        meta: "AI-Powered",
        description: "Organize client carts and send order details for seamless transaction completion",
        icon: <ShoppingCart className="w-4 h-4 text-emerald-500" />,
        status: "Active",
        tags: ["AI", "Automation"],
        cta: "Try Assistant →",
    },
    {
        title: "Custom Domain",
        meta: "Own Your Brand",
        description: "Get your own professional domain - reduce dependency on social media platforms",
        icon: <Globe className="w-4 h-4 text-purple-500" />,
        status: "Included",
        tags: ["Branding", "Professional"],
        colSpan: 2,
        cta: "Get Domain →",
    },
    {
        title: "WhatsApp Payments",
        meta: "Direct Integration",
        description: "Receive payments directly through WhatsApp with our subscription model",
        icon: <MessageSquare className="w-4 h-4 text-green-500" />,
        status: "Premium",
        tags: ["Payments", "WhatsApp"],
        cta: "Learn More →",
    },
    {
        title: "Platform Revenue Share",
        meta: "10% on Sales",
        description: "Alternative payment model - we only earn when you earn with 10% commission",
        icon: <CreditCard className="w-4 h-4 text-orange-500" />,
        status: "Flexible",
        tags: ["Revenue", "Commission"],
        cta: "Choose Plan →",
    },
    {
        title: "Google Visibility",
        meta: "SEO Optimized",
        description: "Get discovered by new customers through Google search with built-in SEO",
        icon: <TrendingUp className="w-4 h-4 text-sky-500" />,
        status: "Built-in",
        tags: ["SEO", "Discovery"],
        colSpan: 2,
        cta: "Boost Visibility →",
    },
    {
        title: "Risk Protection",
        meta: "Account Safety",
        description: "Protect your business from losing everything if social media accounts get suspended",
        icon: <Shield className="w-4 h-4 text-red-500" />,
        status: "Essential",
        tags: ["Security", "Protection"],
        cta: "Stay Safe →",
    },
    {
        title: "Marketing Course",
        meta: "Free Training",
        description: "Learn to run effective ads and maximize your social media traffic with our free course",
        icon: <Target className="w-4 h-4 text-indigo-500" />,
        status: "Free",
        tags: ["Training", "Marketing"],
        cta: "Start Learning →",
    },
];

export function ReechFeatures() {
    return (
        <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Everything You Need to{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Build & Scale
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Reech provides a complete solution for business owners who want to own their digital presence, 
                        reduce platform risk, and build a sustainable online business.
                    </p>
                </div>
                
                <BentoGrid items={reechFeatures} />
                
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white dark:bg-black rounded-2xl p-6 border shadow-sm">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-medium">Case Study</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            See how{" "}
                            <a 
                                href="https://mercyluxuryhair.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Mercy Luxury Hair
                            </a>
                            {" "}built their complete business brand with Reech
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 