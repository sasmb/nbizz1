"use client"

import { Check, ChevronRight, Calendar, Crown, ExternalLink, Shield, Zap, Star, Globe, Users, TrendingUp } from "lucide-react"
import { SinglePricingCard, type Testimonial } from "@/components/ui/single-pricing-card"

export function NBizzYearlyPricing() {
  const features = [
    "Unlimited Website Creation",
    "AI-Powered Sales Automation",
    "Advanced Content Management",
    "Marketing Campaign Tools",
    "Custom Domain & Hosting",
    "Professional Email Setup",
    "SEO Optimization Tools",
    "Analytics & Reporting",
    "24/7 Priority Support",
    "White-Label Solutions",
    "API Access & Integrations",
    "Advanced Security Features",
  ].map((text) => ({ text }))

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Digital Marketing Manager",
      company: "TechFlow Solutions",
      content:
        "NBizz transformed our entire business workflow. The yearly plan gave us everything we needed to scale from 5 to 50 clients. The ROI was incredible!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      company: "Chen Consulting",
      content:
        "The AI sales automation alone saved us 20+ hours per week. With the yearly discount, it pays for itself in just 2 months. Best investment we've made.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Agency Founder",
      company: "Creative Digital",
      content:
        "We've built over 100 websites for clients using NBizz. The white-label features and yearly pricing make it perfect for agencies. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Park",
      role: "E-commerce Director",
      company: "Park Enterprises",
      content:
        "The marketing automation features helped us increase conversions by 300%. The yearly plan is a no-brainer for serious businesses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "From idea to launch in just 3 weeks! NBizz's comprehensive suite and yearly pricing gave us the foundation to build a million-dollar business.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden flex justify-center" id="yearly-pricing">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full border border-primary/20 shadow-sm">
            <Calendar className="mr-1 h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium">Yearly Plan</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Scale Your Business with NBizz
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Everything you need to build, automate, and grow your business - all in one comprehensive yearly plan
          </p>
        </div>

        <SinglePricingCard
          badge={{
            icon: Crown,
            text: "Most Popular",
          }}
          title="NBizz Business Yearly"
          subtitle="Complete business automation and growth platform with significant yearly savings"
          price={{
            current: "$100/year",
            original: "$240/year",
            discount: "Save $140",
          }}
          benefits={[
            {
              text: "Save $140 compared to monthly billing",
              icon: TrendingUp,
            },
            {
              text: "30-day money-back guarantee",
              icon: Shield,
            },
            {
              text: "Priority support & onboarding",
              icon: Zap,
            },
            {
              text: "Lock in current pricing forever",
              icon: Star,
            },
          ]}
          features={features}
          featuresIcon={Check}
          featuresTitle="Everything Included"
          featuresBadge={{
            icon: Globe,
            text: "Full Access",
          }}
          primaryButton={{
            text: "Start Your Year",
            icon: Calendar,
            chevronIcon: ChevronRight,
            href: "/pricing#yearly",
          }}
          secondaryButton={{
            text: "View Live Demo",
            icon: ExternalLink,
            href: "https://demo.nbizz.com",
          }}
          testimonials={testimonials}
          testimonialRotationSpeed={6000}
          maxWidth="max-w-4xl"
        />

        {/* Additional value proposition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Join 10,000+ businesses already using NBizz</span>
          </div>
        </div>
      </div>
    </section>
  )
} 