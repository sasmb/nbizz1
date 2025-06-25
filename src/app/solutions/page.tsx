"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { ShoppingCart, Calendar, MessageSquare, Bot, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { EcommerceFeatures } from "@/components/ui/features-9";
import { BookingFeatures } from "@/components/ui/features-10";
import { SocialMediaFeatures } from "@/components/ui/social-media-features";
import { AIAutomationFeatures } from "@/components/ui/ai-automation-features";
import { TiltedScrollDemo, TiltedScrollBenefits } from "@/components/ui/tilted-scroll-demo";
import { GradientButton, GradientButtonLink } from "@/components/ui/gradient-button";

const newServices = [
  {
    id: "ecommerce",
    title: "E-commerce Website Creation with MedusaJS",
    icon: ShoppingCart,
    description: "Build scalable, headless e-commerce websites using MedusaJS, offering customizable storefronts, secure payment integrations, and robust product management.",
    features: [
      "Headless architecture for flexibility",
      "Integration with popular payment gateways (Stripe, Paystack)",
      "Customizable product catalogs and cart functionality",
      "Multi-currency and multi-language support",
      "Advanced inventory management"
    ],
    benefits: [
      "35% faster page load times",
      "50% increase in conversion rates",
      "Seamless mobile shopping experience",
      "99.9% payment processing uptime"
    ],
    useCase: "A growing fashion retailer implemented our MedusaJS solution and saw 200% revenue growth within 6 months, with customers praising the lightning-fast checkout process and seamless mobile experience.",
    component: EcommerceFeatures,
    recommendedPlan: "yearly"
  },
  {
    id: "booking",
    title: "Booking Websites with Cal.com",
    icon: Calendar,
    description: "Develop user-friendly booking platforms using Cal.com for scheduling appointments, meetings, or events with seamless calendar integrations.",
    features: [
      "Automated scheduling and reminders",
      "Integration with Google Calendar, Outlook, etc.",
      "Customizable booking forms and time slots",
      "Video conference integration (Zoom, Meet)",
      "Payment processing for bookings"
    ],
    benefits: [
      "90% reduction in scheduling conflicts",
      "75% decrease in no-shows with automated reminders",
      "24/7 booking availability",
      "Improved customer satisfaction"
    ],
    useCase: "A consulting firm automated their entire booking process with our Cal.com integration, reducing administrative work by 15 hours per week and increasing client bookings by 80%.",
    component: BookingFeatures,
    recommendedPlan: "monthly"
  },
  {
    id: "social-media",
    title: "Social Media Content Creation",
    icon: MessageSquare,
    description: "Provide tailored social media content strategies, including graphics, videos, and posts to boost brand engagement across platforms like Instagram, Twitter, and LinkedIn.",
    features: [
      "Platform-specific content optimization",
      "High-quality visuals and copywriting",
      "Scheduling and analytics integration",
      "Influencer collaboration management",
      "Brand consistency across platforms"
    ],
    benefits: [
      "300% increase in engagement rates",
      "150% growth in follower count",
      "85% improvement in brand awareness",
      "60% more qualified leads from social"
    ],
    useCase: "A tech startup leveraged our social media strategy to grow from 500 to 50K followers in 8 months, generating over $2M in revenue directly from social media campaigns.",
    component: SocialMediaFeatures,
    recommendedPlan: "yearly"
  },
  {
    id: "ai-automation",
    title: "AI Automation for Businesses",
    icon: Bot,
    description: "Implement AI-driven automation solutions to streamline business processes, such as chatbots, data analysis, and workflow optimization.",
    features: [
      "Intelligent chatbots for customer service",
      "Automated data analysis and reporting",
      "Workflow optimization and task automation",
      "Predictive analytics for business insights",
      "Custom AI model development"
    ],
    benefits: [
      "70% reduction in operational costs",
      "95% accuracy in predictive analytics",
      "24/7 automated customer support",
      "10x faster data processing"
    ],
    useCase: "An e-commerce company implemented our AI automation suite and reduced customer service costs by 80% while improving response times from hours to seconds, leading to 45% higher customer satisfaction.",
    component: AIAutomationFeatures,
    recommendedPlan: "lifetime"
  }
];

const pricingPlans = {
  monthly: { price: "$20", period: "month", savings: null },
  yearly: { price: "$100", period: "year", savings: "Save $140" },
  lifetime: { price: "$350", period: "one-time", savings: "Best Value + Source Code" }
};

function ServiceCard({ service, index }: { service: typeof newServices[0], index: number }) {
  const Icon = service.icon;
  const plan = pricingPlans[service.recommendedPlan as keyof typeof pricingPlans];

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 scroll-mt-20"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{service.description.split('.')[0] + '.'}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400">{service.description}</p>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Expected Results</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Use Case */}
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Success Story</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 italic">&quot;{service.useCase}&quot;</p>
        </div>

        {/* Recommended Plan */}
        <div className="border-t border-slate-200 dark:border-slate-600 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Recommended Plan</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-slate-600 dark:text-slate-400">/{plan.period}</span>
              </div>
              {plan.savings && (
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">{plan.savings}</span>
              )}
            </div>
            <GradientButtonLink href="/pricing" size="sm" variant="primary">
              Get Started
            </GradientButtonLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const scrollToSolutions = () => {
    const element = document.getElementById('solutions-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && newServices.find(s => s.id === hash)) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000); // Wait for page to load
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <NBizzNavbar />
      
      {/* Hero Section with Background Paths */}
      <EnhancedBackgroundPaths
        title="Business Solutions"
        subtitle="Transform your business with our cutting-edge services: E-commerce platforms, booking systems, social media automation, and AI-powered solutions"
        buttonText="Explore Our Services"
        onButtonClick={scrollToSolutions}
      />

      {/* Solutions Content */}
      <section id="solutions-content" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Featured Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
              From e-commerce platforms to AI automation, we provide comprehensive solutions 
              that help businesses scale efficiently and deliver exceptional customer experiences.
            </p>
            
            {/* Interactive Feature Showcase */}
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-16 max-w-4xl mx-auto">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  🚀 What We Deliver
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Cutting-edge solutions that transform your business operations and drive growth.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <TiltedScrollDemo />
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  📈 Business Impact
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Measurable results that exceed expectations and deliver real ROI.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <TiltedScrollBenefits />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Feature Sections */}
          {newServices.map((service, index) => {
            const Component = service.component;
            return (
              <div key={service.id} className="mb-20">
                <Component />
              </div>
            );
          })}

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {newServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Why Choose NBizz */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose NBizz for Your Digital Transformation?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Join thousands of businesses that have transformed their operations with our comprehensive suite of modern digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Modern Technology Stack</h4>
                <p className="text-slate-600 dark:text-slate-400">Built with the latest technologies like MedusaJS, Cal.com, and cutting-edge AI frameworks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Proven Results</h4>
                <p className="text-slate-600 dark:text-slate-400">Our clients see average improvements of 200% in efficiency and 150% in revenue growth.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">AI-Powered Solutions</h4>
                <p className="text-slate-600 dark:text-slate-400">Leverage artificial intelligence to automate processes and gain competitive advantages.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Choose the perfect solution for your needs and start your digital transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButtonLink href="/pricing" size="lg" variant="primary">
                  View All Plans
                </GradientButtonLink>
                <GradientButtonLink href="https://cal.com/samogb/30min" size="lg" variant="secondary" external>
                  Book a Consultation
                </GradientButtonLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 