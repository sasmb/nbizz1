"use client";

import { NBizzNavbar } from "@/components/ui/nbizz-navbar";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Clock, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <NBizzNavbar />
      <main className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get the{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Support
              </span>{" "}
              You Need
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated support team is here to help you succeed. Get quick answers to your questions and expert guidance when you need it most.
            </p>
          </div>

          {/* Support Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Live Chat */}
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help from our support team via live chat. Available during business hours.
              </p>
              <Button className="w-full">
                Start Chat
              </Button>
            </div>

            {/* Email Support */}
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us detailed questions and receive comprehensive responses within 24 hours.
              </p>
              <Button variant="outline" className="w-full">
                <Link href="mailto:support@nexusbizz.com" className="w-full">
                  Send Email
                </Link>
              </Button>
            </div>

            {/* Schedule Call */}
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule a Call</h3>
              <p className="text-muted-foreground mb-4">
                Book a one-on-one consultation with our experts for personalized assistance.
              </p>
              <Button variant="outline" className="w-full">
                <Link href="https://cal.com/samogb/30min" target="_blank" className="w-full">
                  Book Call
                </Link>
              </Button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Support Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Live Chat & Phone</h4>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email Support</h4>
                <p className="text-muted-foreground">24/7 - We respond within 24 hours</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Check out our FAQ section for quick answers to common questions.
            </p>
            <Button variant="outline" size="lg">
              <Link href="/faqs" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                View FAQs
              </Link>
            </Button>
          </div>

          {/* Documentation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Documentation?</h3>
            <p className="text-muted-foreground mb-6">
              Access our comprehensive guides, tutorials, and API documentation.
            </p>
            <Button>
              <Link href="/blog" className="flex items-center gap-2">
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
