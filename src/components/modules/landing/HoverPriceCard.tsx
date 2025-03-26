"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PRICING } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const HoverPriceCard: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = async (priceId: string, index: number) => {
    try {
      setLoadingIndex(index);
      console.log('Starting checkout for price:', priceId);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan: priceId }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('Checkout error:', data);
        throw new Error(data.error || 'Failed to create checkout session');
      }

      console.log('Got session ID:', data.sessionId);
      
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Failed to load Stripe');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) {
        console.error('Stripe redirect error:', error);
        throw error;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setLoadingIndex(null);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto">
      {PRICING.map((price, idx) => (
        <div key={idx} className="relative w-full">
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-muted/[0.8] rounded-3xl"
                style={{ zIndex: 0 }}
              />
            )}
          </AnimatePresence>
          <Card
            className={cn("relative h-full", {
              "border-2 border-primary": price.title === "Unlimited Saas",
            })}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardHeader>
              <CardTitle className="flex flex-col gap-2">
                <span>{price.title}</span>
                {price.title === "Unlimited Saas" && (
                  <span className="text-sm font-normal text-muted-foreground">
                    (Most Popular)
                  </span>
                )}
              </CardTitle>
              <CardDescription>{price.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{price.price}</span>
                {price.duration !== "one-time" && (
                  <span className="ml-1 text-muted-foreground">/m</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2 w-full">
                {price.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <CheckCircle2 className="text-emerald-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => handleCheckout(price.priceId, idx)}
                disabled={loadingIndex === idx}
                className={cn(
                  "w-full mt-auto",
                  price.title === "Unlimited Saas" ? "bg-primary" : "bg-secondary"
                )}
              >
                {loadingIndex === idx ? "Processing..." : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HoverPriceCard;
