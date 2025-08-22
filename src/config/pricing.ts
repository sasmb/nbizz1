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
  designFee?: string;
  monthlyFee?: string;
  deliveryTime?: string;
  supportHours?: string;
  isPopular?: boolean;
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
    title: "Base Package",
    description: "Semi-customized e-commerce site built from pre-designed Medusa.js template",
    price: "$500",
    duration: "one-time",
    designFee: "$500",
    monthlyFee: "$100",
    deliveryTime: "2 weeks",
    supportHours: "2 hours/month",
    highlight: "Perfect for small to medium stores",
    features: [
      "Semi-customized Medusa.js template",
      "Custom colors, fonts, and layout",
      "Storefront with payment gateways (Stripe/PayPal)",
      "Basic chatbot for customer support",
      "Medusa admin dashboard access",
      "Railway hosting included",
      "Security patches & updates",
      "Brief tutorial & documentation"
    ],
    priceId: "price_ecom_base_500",
    type: "ecommerce"
  },
  {
    title: "Premium Package",
    description: "Fully bespoke e-commerce site designed from scratch for your unique vision",
    price: "$1,000+",
    duration: "one-time",
    designFee: "$1,000+",
    monthlyFee: "$200",
    deliveryTime: "2-3 weeks",
    supportHours: "4 hours/month",
    highlight: "Best for growing businesses",
    isPopular: true,
    features: [
      "Fully bespoke design from scratch",
      "Advanced custom layouts & features",
      "Enhanced chatbot functionality",
      "Multi-region support capabilities",
      "Premium hosting resources",
      "Priority support & maintenance",
      "Advanced integrations",
      "Complex feature development"
    ],
    priceId: "price_ecom_premium_1000",
    type: "ecommerce"
  },
  {
    title: "6-Month Commitment",
    description: "Save 40% with 6-month upfront payment on any package",
    price: "40% OFF",
    duration: "6 months",
    highlight: "Best value option",
    features: [
      "Choose Base ($60/month) or Premium ($120/month)",
      "40% discount on monthly subscription",
      "All features from chosen package",
      "Guaranteed pricing for 6 months",
      "Priority support queue",
      "Flexible upgrade options"
    ],
    priceId: "price_ecom_6month_discount",
    type: "ecommerce"
  },
];

// Optional Add-ons for E-commerce
export const ECOMMERCE_ADDONS = [
  {
    title: "Analytics/SEO Integration",
    description: "Google Analytics, SEO setup, or similar integrations",
    price: "$50",
    duration: "one-time",
    type: "addon"
  },
  {
    title: "Multi-language Support",
    description: "Expand your reach with multi-language functionality",
    price: "Custom Quote",
    duration: "one-time",
    type: "addon"
  },
  {
    title: "Advanced Cart Features",
    description: "Enhanced shopping cart functionality and checkout flow",
    price: "Custom Quote",
    duration: "one-time",
    type: "addon"
  },
  {
    title: "Premium Support Hours",
    description: "Additional support beyond your tier allocation",
    price: "$50",
    duration: "per hour",
    type: "addon"
  }
];