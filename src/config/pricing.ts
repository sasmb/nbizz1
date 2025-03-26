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
    title: "Starter",
    description: "One time payment",
    price: "$450",
    duration: "one-time",
    highlight: "Key features",
    features: [
      "Pre-built e-commerce store",
      "Admin panel to manage products & orders",
      "Payment gateway integration",
      "Hosting & domain setup assistance"
    ],
    priceId: "price_1R6xr6RwvANxOdCyRqgo4Ebr",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    features: [
      "Everything in Starter & Growth",
      "Custom design & branding",
      "Advanced functionality & features",
      "Priority support",
      "Marketing & automation setup"
    ],
    priceId: "price_1R6xr6RwvANxOdCyo0YauClP",
  },
  {
    title: "Basic",
    description: "For serious agency owners",
    price: "$49",
    duration: "month",
    highlight: "Everything in Starter",
    features: [
      "Everything in Starter",
      "Ongoing maintenance & updates",
      "Basic SEO optimization",
      "Performance monitoring",
      "Security & backup services"
    ],
    priceId: "price_1R6xr6RwvANxOdCy1qKQVCly",
  },
];