"use client";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ReechFeatures } from "@/components/ui/reech-features";
import { ReechProblemsSolved } from "@/components/ui/reech-problems-solved";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Store, Bot } from "lucide-react";

export default function GetReechPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReechProblemsSolved />
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                getreech
              </span>{" "}
              Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From store description to AI-powered e-commerce in minutes. Watch how our AI agent transforms your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Video Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto"
                  poster="/images/Screenshot 2025-09-10 at 05.58.02.png"
                >
                  <source src="/herovideo/Screen Recording 2025-09-10 at 05.37.58.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Describe Your Store</h3>
                  <p className="text-gray-600">
                    Simply tell our AI what kind of store you want. Describe your products, target audience, and vision - our AI understands and creates accordingly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Your Store in Minutes</h3>
                  <p className="text-gray-600">
                    Watch as our AI builds your complete e-commerce store with custom design, product pages, checkout system, and payment integration - all in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 AI Agent Management</h3>
                  <p className="text-gray-600">
                    Your dedicated AI agent works around the clock - managing inventory, handling customer inquiries, processing orders, and optimizing your store for maximum sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent Dashboard Preview */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Your AI Agent Dashboard
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              See how your AI agent manages everything from customer orders to inventory tracking, giving you real-time insights and complete control.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Screenshot 2025-09-10 at 05.58.02.png"
              alt="AI Agent Dashboard managing e-commerce store with order tracking and customer chat"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900">
                  Live AI Chat helping customers • Real-time order management • Automated inventory tracking
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI agents to scale their e-commerce operations. 
              Learn more about the technology behind getreech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Read Our Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://cal.com/samogb/30min">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Your AI Agent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReechFeatures />
    </div>
  );
} 