"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { Building2, Users, Zap, ShoppingCart, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const solutions = [
  {
    id: "small-business",
    title: "Small Business",
    icon: Building2,
    description: "Perfect for startups and growing businesses looking to establish their digital presence",
    features: [
      "Professional website creation with SEO optimization",
      "AI-powered chat assistants for customer support",
      "Social media content automation",
      "Email marketing campaigns",
      "Lead generation tools"
    ],
    benefits: [
      "Increase online visibility by 300%",
      "Automate 80% of customer inquiries",
      "Generate 5x more qualified leads",
      "Save 20+ hours per week on marketing"
    ],
    useCase: "A local bakery uses NBizz to create a stunning website, automate customer orders through AI chat, and run targeted social media campaigns that increased their revenue by 150% in 6 months.",
    recommendedPlan: "monthly"
  },
  {
    id: "agencies",
    title: "Digital Agencies",
    icon: Users,
    description: "Scale your agency operations with white-label solutions and client management tools",
    features: [
      "White-label website creation platform",
      "Multi-client AI automation management",
      "Branded content creation tools",
      "Client reporting dashboards",
      "Team collaboration features"
    ],
    benefits: [
      "Serve 10x more clients efficiently",
      "Reduce project delivery time by 70%",
      "Increase profit margins by 40%",
      "Automate client reporting"
    ],
    useCase: "A digital marketing agency uses NBizz to manage 50+ client websites, automate content creation, and provide AI-powered customer service, allowing them to scale from 10 to 100 clients.",
    recommendedPlan: "yearly"
  },
  {
    id: "enterprise",
    title: "Enterprise",
    icon: Zap,
    description: "Enterprise-grade solutions for large organizations with complex automation needs",
    features: [
      "Custom AI model training",
      "Advanced analytics and reporting",
      "Multi-department automation",
      "Enterprise security compliance",
      "Dedicated account management"
    ],
    benefits: [
      "Reduce operational costs by 60%",
      "Improve customer satisfaction by 45%",
      "Automate complex workflows",
      "Scale globally with confidence"
    ],
    useCase: "A Fortune 500 company uses NBizz to automate customer service across 15 countries, process 100,000+ inquiries monthly, and maintain 99.9% uptime with AI-powered solutions.",
    recommendedPlan: "lifetime"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Boost online sales with AI-powered product recommendations and automated marketing",
    features: [
      "AI-powered product recommendations",
      "Automated abandoned cart recovery",
      "Dynamic pricing optimization",
      "Inventory management automation",
      "Customer behavior analytics"
    ],
    benefits: [
      "Increase conversion rates by 35%",
      "Recover 25% of abandoned carts",
      "Optimize pricing for maximum profit",
      "Reduce manual inventory tasks by 90%"
    ],
    useCase: "An online fashion retailer uses NBizz AI to personalize shopping experiences, automate inventory management, and recover abandoned carts, resulting in 200% revenue growth.",
    recommendedPlan: "yearly"
  }
];

const pricingPlans = {
  monthly: { price: "$20", period: "month", savings: null },
  yearly: { price: "$100", period: "year", savings: "Save $140" },
  lifetime: { price: "$350", period: "one-time", savings: "Best Value + Source Code" }
};

function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const Icon = solution.icon;
  const plan = pricingPlans[solution.recommendedPlan as keyof typeof pricingPlans];

  return (
    <motion.div
      id={solution.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 scroll-mt-20"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{solution.title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{solution.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Features */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {solution.features.map((feature, i) => (
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
            {solution.benefits.map((benefit, i) => (
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
          <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{solution.useCase}"</p>
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
            <Link href="/pricing" className="flex-shrink-0">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
    if (hash && solutions.find(s => s.id === hash)) {
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
        subtitle="Discover how NBizz transforms businesses across industries with AI-powered automation and intelligent tools"
        buttonText="Explore Solutions"
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
              Tailored Solutions for Every Business
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From startups to enterprises, NBizz provides the tools and automation you need to scale efficiently, 
              reduce costs, and deliver exceptional customer experiences.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
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
                Why Choose NBizz?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Join thousands of businesses that have transformed their operations with our comprehensive suite of AI-powered tools.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Lightning Fast Setup</h4>
                <p className="text-slate-600 dark:text-slate-400">Get up and running in minutes, not months. Our intuitive platform requires no technical expertise.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Proven Results</h4>
                <p className="text-slate-600 dark:text-slate-400">Our clients see average improvements of 300% in efficiency and 150% in revenue growth.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">24/7 Support</h4>
                <p className="text-slate-600 dark:text-slate-400">Our dedicated team is always here to help you succeed with comprehensive support and training.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Choose the plan that fits your needs and start your automation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Pricing Plans
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="https://cal.com/samogb/30min">
                  <Button size="lg" variant="outline">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 