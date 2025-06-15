export interface PricingItem {
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  /** Product ID from Stripe */
  priceId: string;
  type?: 'booking' | 'ecommerce';
}

export const BOOKING_PRICING: PricingItem[] = [
  {
    title: "Monthly",
    description: "Perfect for getting started with NBooking scheduling sites",
    price: "$20",
    duration: "month",
    highlight: "Key scheduling features",
    features: [
      "Unlimited booking pages",
      "Automated appointment reminders",
      "Google & Outlook calendar integration",
      "Custom booking forms",
      "Email & SMS notifications",
      "Basic support"
    ],
    priceId: "price_booking_monthly_20",
    type: "booking"
  },
  {
    title: "Yearly",
    description: "Best value for growing your scheduling business with NBooking",
    price: "$100",
    duration: "year",
    highlight: "Everything in Monthly, plus",
    features: [
      "Everything in Monthly",
      "Priority support & onboarding",
      "Advanced booking analytics",
      "Custom integrations (Zapier, API)",
      "Staff & resource management",
      "2 months free (save $140)"
    ],
    priceId: "price_booking_yearly_100",
    type: "booking"
  },
  {
    title: "Lifetime",
    description: "One-time payment for lifetime access to NBooking scheduling platform",
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
    priceId: "price_booking_lifetime_350",
    type: "booking"
  },
];

export const ECOMMERCE_PRICING: PricingItem[] = [
  {
    title: "Monthly",
    description: "Perfect for new online stores",
    price: "$29",
    duration: "month",
    highlight: "Key features",
    features: [
      "Pre-built e-commerce store",
      "Product & inventory management",
      "Secure payment processing",
      "Order fulfillment system",
      "Basic support"
    ],
    priceId: "price_ecom_monthly_29",
    type: "ecommerce"
  },
  {
    title: "Yearly",
    description: "Best value for growing businesses",
    price: "$149",
    duration: "year",
    highlight: "Everything in Monthly, plus",
    features: [
      "Everything in Monthly",
      "Priority support",
      "Advanced analytics & reporting",
      "Multi-channel selling",
      "2 months free (save $199)"
    ],
    priceId: "price_ecom_yearly_149",
    type: "ecommerce"
  },
  {
    title: "Lifetime",
    description: "One-time payment, lifetime access",
    price: "$499",
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
    priceId: "price_ecom_lifetime_499",
    type: "ecommerce"
  },
];