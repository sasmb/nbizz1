"use client"

import { Check, ChevronRight, Calendar, Crown, ExternalLink, Shield, Zap, Star, Globe, Users, TrendingUp } from "lucide-react"
import { SinglePricingCard, type Testimonial } from "@/components/ui/single-pricing-card"

export function NBizzYearlyPricing() {
  const features = [
    "Unlimited Booking Pages",
    "Automated Appointment Reminders",
    "Google & Outlook Calendar Integration",
    "Custom Booking Forms",
    "Payment Processing Integration",
    "Staff & Resource Management",
    "Analytics & Reporting for Bookings",
    "24/7 Priority Support",
    "White-Label Solutions",
    "API Access for Scheduling",
    "Advanced Security for Client Data",
  ].map((text) => ({ text }))

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jessica Lee",
      role: "Wellness Coach",
      company: "Thrive Wellness",
      content:
        "NBooking made it effortless to manage my client appointments. The reminders and calendar sync save me hours every week!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Salon Owner",
      company: "Glow Beauty Studio",
      content:
        "My clients love the easy online booking. The yearly plan is a fantastic value for all the features you get!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Consultant",
      company: "Patel Consulting",
      content:
        "NBooking's analytics and integrations help me keep my business organized and growing. Highly recommended for any service provider!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Fitness Trainer",
      company: "FitLife Studio",
      content:
        "The automated reminders and payment integration have reduced no-shows and made my workflow seamless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Emily Nguyen",
      role: "Therapist",
      company: "Mindful Path",
      content:
        "From setup to daily use, NBooking is the best scheduling platform I've tried. The yearly plan is a no-brainer!",
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
            Scale Your Scheduling Business with NBooking
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Everything you need to launch, automate, and grow your scheduling site – all in one comprehensive yearly plan.
          </p>
        </div>

        <SinglePricingCard
          badge={{
            icon: Crown,
            text: "Most Popular",
          }}
          title="NBooking Yearly Plan"
          subtitle="Complete scheduling automation and growth platform with significant yearly savings"
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
            <span className="text-sm font-medium">Join 10,000+ businesses already using NBooking</span>
          </div>
        </div>
      </div>
    </section>
  )
} 