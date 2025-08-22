import { Pricing } from "@/components/ui/pricing";
import { BOOKING_PRICING, ECOMMERCE_PRICING, ECOMMERCE_ADDONS } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap, Rocket, Shield, Users, ShoppingBag, Calendar } from "lucide-react";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { TestimonialsSection } from "@/components/ui/testimonials-section";

// Transform the booking pricing data
const bookingPlans = BOOKING_PRICING.map((item, index) => ({
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

// Transform the e-commerce pricing data
const ecommercePlans = ECOMMERCE_PRICING.map((item, index) => ({
  name: item.title.toUpperCase(),
  price: item.price.replace("$", "").replace("+", ""),
  yearlyPrice: item.designFee ? item.designFee.replace("$", "").replace("+", "") : item.price.replace("$", ""),
  period: item.duration,
  features: item.features,
  description: item.description,
  buttonText: item.title === "6-Month Commitment" ? "Get Discount" : 
               item.title === "Premium Package" ? "Get Custom Quote" : 
               `Choose ${item.title}`,
  href: "/checkout",
  isPopular: item.isPopular || false,
  designFee: item.designFee,
  monthlyFee: item.monthlyFee,
  deliveryTime: item.deliveryTime,
  supportHours: item.supportHours,
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
      <section className="relative py-20 lg:py-32 overflow-hidden max-w-full pt-36 lg:pt-44">
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
              Transform your business with NBizz&apos;s comprehensive suite of tools. 
              Choose between our booking system or e-commerce platform to scale efficiently.
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

      {/* Booking System Pricing Section */}
      <section className="relative py-16 max-w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/30 to-transparent dark:from-gray-800/30 dark:to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">NBooking Scheduling Site Plans</h2>
          </div>
          <Pricing 
            plans={bookingPlans}
            title="NBooking: The Ultimate Scheduling Solution"
            description="Everything you need to launch, automate, and grow your scheduling site. Perfect for service-based businesses, consultants, and professionals who want seamless appointment management, reminders, and calendar integrations."
          />
        </div>
      </section>

      {/* E-commerce Pricing Section */}
      <section className="relative py-16 max-w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/30 to-transparent dark:from-gray-800/30 dark:to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-12">
            <ShoppingBag className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-semibold">E-commerce Store Plans</h2>
          </div>
          <Pricing 
            plans={ecommercePlans}
            title="Custom E-commerce with Medusa.js"
            description="Professional e-commerce websites powered by Medusa.js. Choose between semi-custom templates or fully bespoke designs. Includes one-time design fee + monthly hosting & maintenance."
          />
        </div>
      </section>

      {/* E-commerce Add-ons Section */}
      <section className="relative py-16 max-w-full overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Optional Add-ons</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your e-commerce store with additional features and integrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ECOMMERCE_ADDONS.map((addon, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-2">{addon.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{addon.price}</span>
                  <span className="text-sm text-muted-foreground">{addon.duration}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Need something custom? We offer tailored solutions for your specific business needs.
            </p>
            <Button variant="outline" asChild>
              <a href="https://cal.com/samogb/30min">
                Request Custom Quote
              </a>
            </Button>
          </div>
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