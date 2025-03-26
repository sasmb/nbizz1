"use client";

import React from "react";
import { loadStripe, Stripe as StripeType } from '@stripe/stripe-js';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Initialize Stripe with your existing env variable
const getStripe = async (): Promise<StripeType | null> => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) {
    throw new Error('Stripe publishable key is not available');
  }
  const stripe = await loadStripe(key);
  if (!stripe) {
    throw new Error('Failed to initialize Stripe');
  }
  return stripe;
};

export const EnterpriseCard = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: 'enterprise'
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Failed to initialize Stripe');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        console.error('Stripe error:', error);
        throw error;
      }
    } catch (err) {
      console.error('Payment error:', err);
      // You might want to show a user-friendly error message here
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-16">
      <Card className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">All-in-One Ecom Domination</h3>
            <p className="text-muted-foreground">
              The ultimate package for business owners who want growth, marketing, automation, and sales at scale.
            </p>
          </div>
          <div className="flex justify-center items-baseline">
            <span className="text-5xl font-bold">Custom</span>
            <span className="ml-2 text-muted-foreground">/one-time</span>
          </div>
          <p className="text-primary font-medium">Everything in Premium Custom +</p>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Social media management (Instagram, Facebook, TikTok, Twitter)",
              "Content creation & branded content scheduling",
              "Reposting strategy & automation",
              "Paid ads management (Facebook, Instagram, Google Ads)",
              "High-converting funnels & landing pages",
              "Instagram automation (DMs, engagement tools)",
              "Email marketing & automation",
              "Custom productivity board (Trello/Notion for task management)",
              "A/B testing for better conversion rates",
              "Advanced SEO & organic traffic strategies"
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-6">
          <Button 
            size="lg" 
            className="w-full md:w-auto px-8" 
            onClick={handlePayment}
          >
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}; 