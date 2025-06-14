export interface PricingItem {
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  /** Product ID from Stripe */
  priceId: string;
}

export const PRICING: PricingItem[] = [
  {
    title: "Monthly",
    description: "Perfect for getting started",
    price: "$20",
    duration: "month",
    highlight: "Key features",
    features: [
      "Pre-built e-commerce store",
      "Admin panel to manage products & orders",
      "Payment gateway integration",
      "Hosting & domain setup assistance",
      "Basic support"
    ],
    priceId: "price_monthly_20",
  },
  {
    title: "Yearly",
    description: "Best value for ongoing projects",
    price: "$100",
    duration: "year",
    highlight: "Everything in Monthly, plus",
    features: [
      "Everything in Monthly",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "2 months free (save $140)"
    ],
    priceId: "price_yearly_100",
  },
  {
    title: "Lifetime",
    description: "One-time payment, lifetime access",
    price: "$350",
    duration: "lifetime",
    highlight: "Everything in Yearly, plus",
    features: [
      "Everything in Yearly",
      "Lifetime updates",
      "Source code access",
      "White-label rights",
      "Dedicated support channel",
      "No recurring fees ever"
    ],
    priceId: "price_lifetime_350",
  },
];