"use client";

import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <NBizzNavbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                NBizz
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing how businesses connect with their customers through intelligent automation and innovative technology solutions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                At NBizz, we believe every business deserves access to enterprise-level automation tools. Our mission is to democratize business technology, making powerful sales and marketing automation accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground">
                We're building the future where technology amplifies human potential, not replaces it. Our solutions are designed to free up your time so you can focus on what matters most - growing your business and serving your customers.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Excellence Driven</h3>
                  <p className="text-muted-foreground">Committed to delivering exceptional value</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape how we serve our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make starts with how it benefits our customers. Your success is our success.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality & Reliability</h3>
                <p className="text-muted-foreground">
                  We build robust, dependable solutions that you can count on to grow your business.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our platform to stay ahead of industry trends and customer needs.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the passionate individuals driving NBizz forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  SO
                </div>
                <h3 className="text-xl font-semibold mb-2">Samuel Ogbonna</h3>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Passionate about leveraging technology to solve real business problems and empower entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of businesses already using NBizz to automate and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Link href="/pricing" className="flex items-center gap-2">
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="https://cal.com/samogb/30min" target="_blank">
                  Schedule a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
