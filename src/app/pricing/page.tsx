import { Pricing } from "@/components/ui/pricing";
import { PRICING } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap, Rocket, Shield, Users } from "lucide-react";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { TestimonialsSection } from "@/components/ui/testimonials-section";

// Transform the existing pricing data to match the component interface
const pricingPlans = PRICING.map((item, index) => ({
  name: item.title.toUpperCase(),
  price: item.price.replace("$", ""),
  yearlyPrice: item.title === "Monthly" ? "16" : item.title === "Yearly" ? "100" : "350",
  period: item.title === "Lifetime" ? "one-time" : item.duration,
  features: item.features,
  description: item.description,
  buttonText: item.title === "Lifetime" ? "Get Lifetime Access" : `Choose ${item.title}`,
  href: "/checkout",
  isPopular: item.title === "Yearly",
}));

// NBizz circular data
const nbizzItems = [
  {
    text: "AUTOMATION",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop"
  },
  {
    text: "GROWTH",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
  },
  {
    text: "INNOVATION",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop"
  },
  {
    text: "SUCCESS",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NBizzNavbar />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden max-w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Simple, Transparent Pricing
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Business Growth Plan
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with NBizz's comprehensive suite of tools. 
              From e-commerce stores to AI automation - everything you need to scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                30-day money back
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 max-w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900" />
        {/* Seamless transition wave */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/30 to-transparent dark:from-gray-800/30 dark:to-transparent" />
        <div className="relative container mx-auto px-4">
          <Pricing 
            plans={pricingPlans}
            title="Choose the Perfect Plan for Your Business"
            description="All plans include our core features with different levels of support and customization.
Start with any plan and upgrade as your business grows."
          />
        </div>
      </section>

      {/* Why Choose NBizz Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900" />
        {/* Seamless transition wave */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/20 to-transparent dark:from-gray-800/30 dark:to-transparent" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">NBizz</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the power of comprehensive business automation with our cutting-edge solutions
              </p>
            </div>

            {/* Circular Reveal Component */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
              <div className="flex-shrink-0">
                <CircularRevealHeading
                  items={nbizzItems}
                  centerText={
                    <div className="text-center">
                      <div className="text-2xl font-medium text-[#444444] mb-2">
                        NBIZZ
                      </div>
                      <div className="text-sm text-[#666666] font-normal tracking-wide">
                        SOLUTIONS
                      </div>
                    </div>
                  }
                  size="lg"
                />
              </div>

              {/* Features Grid */}
              <div className="grid gap-8 max-w-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Lightning Fast Deployment</h3>
                    <p className="text-muted-foreground">
                      Get your business online in minutes with our pre-built, optimized solutions ready for immediate deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">
                      Your data and customers are protected with bank-level security, SSL encryption, and compliance standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Expert Support</h3>
                    <p className="text-muted-foreground">
                      Our dedicated team of experts is available around the clock to ensure your success and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cancel anytime
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  30-day money back
                </div>
              </div>
              
              <Button size="lg" className="gap-2" asChild>
                <a href="https://cal.com/samogb/30min">
                  <CheckCircle className="w-4 h-4" />
                  Book a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
} 