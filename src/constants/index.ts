import { Icons } from "@/components";

export const testimonials = [
  {
    quote: "NBizz has transformed how we manage our business operations. The automation features are incredible!",
    name: "Sarah Chen",
    title: "Product Manager at TechCorp",
  },
  {
    quote: "The analytics dashboard gives us insights that have directly contributed to our 40% growth.",
    name: "Michael Rodriguez",
    title: "Marketing Director at GrowthCo",
  },
  {
    quote: "Their business management solutions are unmatched. Best decision we made this year.",
    name: "Emily Thompson",
    title: "CEO at InnovateX",
  },
  {
    quote: "The platform's intuitive design and powerful features make it essential for modern businesses.",
    name: "David Kim",
    title: "Tech Lead at FutureTech",
  },
  {
    quote: "We've seen remarkable improvements in our workflow efficiency since implementing NBizz.",
    name: "Lisa Johnson",
    title: "Operations Manager at ScaleUp",
  }
];

export const perks = [
    {
        icon: "🚀",
        title: "Lifetime Updates",
        info: "NBizz solutions are built to evolve. Get lifetime updates and improvements as we grow.",
    },
    {
        icon: "📈",
        title: "Lead Generation",
        info: "Generate more leads and grow your business with our modern, conversion-optimized solutions.",
    },
    {
        icon: "⚡",
        title: "Modern Technology",
        info: "Built with cutting-edge tech that integrates seamlessly with your existing business tools.",
    },
];

export const contentRepostingPerks = [
    {
        icon: Icons.auth,
        title: "Branded Reposts",
        info: "Curated posts from industry leaders, tailored with your branding to enhance credibility and engagement.",
    },
    {
        icon: Icons.customize,
        title: "Consistency",
        info: "Keep your audience engaged with a steady stream of high-quality content, optimized for your platforms.",
    },
    {
        icon: Icons.launch,
        title: "Increased Engagement",
        info: "Posts designed to resonate with your audience, driving likes, shares, and comments.",
    },
];


export const automationPerks = [
    {
        icon: Icons.auth,
        title: "Save Time",
        info: "Automate repetitive tasks and free up your team to focus on high-value activities.",
    },
    {
        icon: Icons.customize,
        title: "Seamless Integration",
        info: "Easily connect with your existing CRM, email marketing, and analytics tools.",
    },
    {
        icon: Icons.launch,
        title: "Enterprise-Grade Security",
        info: "Protect your data and operations with robust security measures.",
    },
];


export const features = [
    {
        icon: Icons.bolt,
        title: "Effortless Content Scheduling",
        info: "Save time with seamless scheduling of curated and branded posts.",
    },
    {
        icon: Icons.palette,
        title: "Branded Visuals",
        info: "Custom-branded images and videos that align with your business identity.",
    },
    {
        icon: Icons.seo,
        title: "Engagement Boost",
        info: "Content optimized for likes, shares, and increased audience interaction.",
    },
    {
        icon: Icons.monitor,
        title: "Platform-Specific Optimization",
        info: "Tailored content for platforms like Instagram, LinkedIn, and Facebook.",
    },
    {
        icon: Icons.shop,
        title: "Authority Building",
        info: "Position your brand as a thought leader by sharing industry-relevant posts.",
    },
    {
        icon: Icons.server,
        title: "Consistent Posting",
        info: "Maintain a regular posting schedule to keep your audience engaged and connected.",
    },
];


export const pricingCards = [
    {
        title: "Monthly",
        description: "Perfect for getting started with NBizz services.",
        price: "$20",
        duration: "month",
        highlight: "Key features",
        buttonText: "Start Monthly Plan",
        features: [
            "Custom website creation",
            "Basic AI sales automation",
            "Social media management",
            "Email marketing campaigns",
            "Basic analytics",
            "Standard support"
        ],
        priceId: "price_monthly_20",
    },
    {
        title: "Yearly",
        description: "Best value for ongoing business growth.",
        price: "$100",
        duration: "year",
        highlight: "Everything in Monthly, plus",
        buttonText: "Start Yearly Plan",
        features: [
            "Everything in Monthly",
            "Advanced AI automation",
            "Priority support",
            "Advanced analytics",
            "Custom integrations",
            "2 months free (save $140)"
        ],
        priceId: "price_yearly_100",
    },
    {
        title: "Lifetime",
        description: "One-time payment for lifetime access to all features.",
        price: "$350",
        duration: "lifetime",
        highlight: "Everything in Yearly, plus",
        buttonText: "Get Lifetime Access",
        features: [
            "Everything in Yearly",
            "Lifetime updates",
            "Source code access",
            "White-label rights",
            "Dedicated support channel",
            "No recurring fees ever",
            "Priority feature requests"
        ],
        priceId: "price_lifetime_350",
    },
];

export const contentRepostingPricing = [
    {
        title: "Starter Plan",
        description: "Get consistent, branded posts to engage your audience.",
        price: "$199/month",
        duration: "month",
        highlight: "Key features",
        buttonText: "Subscribe Starter Plan",
        features: [
            "15 branded reposts per month",
            "Optimized captions and hashtags",
            "Platform-specific formatting",
            "Dedicated support",
        ],
        priceId: "price_content_starter",
    },
    {
        title: "Pro Plan",
        description: "Ideal for businesses looking for higher engagement.",
        price: "$399/month",
        duration: "month",
        highlight: "Everything in Starter, plus",
        buttonText: "Subscribe Pro Plan",
        features: [
            "40 branded reposts per month",
            "Custom-branded video edits (2 videos/month)",
            "Engagement analytics",
            "Priority support",
        ],
        priceId: "price_content_pro",
    },
    {
        title: "Enterprise Plan",
        description: "For brands that need custom, scalable content solutions.",
        price: "Starting at $899/month",
        duration: "month",
        highlight: "Everything in Pro, plus",
        buttonText: "Contact for Custom Plan",
        features: [
            "Unlimited branded reposts",
            "Unlimited custom-branded videos",
            "Dedicated account manager",
            "Strategic content planning sessions",
        ],
        priceId: "",
    },
];

export const aiSalesPricing = [
    {
        title: "Starter Plan",
        description: "Start automating your sales process effortlessly.",
        price: "$299/month",
        duration: "month",
        highlight: "Key features",
        buttonText: "Subscribe Starter Plan",
        features: [
            "AI-powered chat assistant",
            "Automated lead capture",
            "Multi-channel support (website, WhatsApp)",
            "Enterprise-grade security",
        ],
        priceId: "price_ai_starter",
    },
    {
        title: "Advanced Plan",
        description: "Maximize your sales with advanced AI tools.",
        price: "$499/month",
        duration: "month",
        highlight: "Everything in Starter, plus",
        buttonText: "Subscribe Advanced Plan",
        features: [
            "Smart response customization",
            "Built-in sales techniques",
            "Detailed analytics and insights",
            "Priority support",
        ],
        priceId: "price_ai_advanced",
    },
    {
        title: "Enterprise Plan",
        description: "Custom AI solutions tailored to your business needs.",
        price: "Starting at $999/month",
        duration: "month",
        highlight: "Everything in Advanced, plus",
        buttonText: "Contact for Custom Plan",
        features: [
            "Fully customized AI sales assistant",
            "Dedicated account manager",
            "Ongoing optimization",
            "Custom integrations with your tools",
        ],
        priceId: "",
    },
];

export const websiteCreationPricing = [
    {
        title: "Basic Plan",
        description: "Perfect for businesses starting their online presence.",
        price: "$1,499 one-time",
        duration: "",
        highlight: "Key features",
        buttonText: "Buy Now",
        features: [
            "Custom domain integration",
            "SEO-optimized pages",
            "Lead generation tools",
            "Lightning-fast performance",
        ],
        priceId: "price_website_basic",
    },
    {
        title: "Growth Plan",
        description: "Best for businesses looking to scale and grow.",
        price: "$79/month",
        duration: "month",
        highlight: "Everything in Basic, plus",
        buttonText: "Subscribe Growth Plan",
        features: [
            "Lifetime updates",
            "CRM integration",
            "Custom announcement banners",
            "Google Business integration",
        ],
        priceId: "price_website_growth",
    },
    {
        title: "Enterprise Plan",
        description: "Fully customized and scalable web solutions.",
        price: "Starting at $4,999",
        duration: "",
        highlight: "Everything in Growth, plus",
        buttonText: "Contact for Custom Plan",
        features: [
            "Dedicated design team",
            "Advanced functionality tailored to your business",
            "Ongoing maintenance and optimization",
            "Strategic consultation for scaling",
        ],
        priceId: "",
    },
];


export const bentoCards = [
    {
        title: 'Train Your Assistant',
        info: 'Upload your products and sales materials to create your intelligent sales team.',
        imgSrc: '/assets/bento-1.svg',
        alt: 'Inspiration for sales automation'
    },
    {
        title: 'AI Powers Your Sales',
        info: 'Our intelligent AI handles customer inquiries and qualifies leads automatically.',
        imgSrc: '/assets/bento1.svg',
        alt: 'AI sales assistant'
    },
    {
        title: 'Easy Integration',
        info: 'Connect your existing sales channels and CRM systems effortlessly.',
        imgSrc: '/assets/bento1.svg',
        alt: 'Sales integration process'
    },
    {
        title: 'Scale Your Sales',
        info: 'Watch your sales grow while your AI assistant works 24/7.',
        imgSrc: '/assets/bento1.svg',
        alt: 'Sales growth automation'
    },
];

export const reviews = [
    {
        name: "5M+ Views on Facebook",
        username: "@pushlapracing",
        body: "We managed their page to achieve over 5 million views, establishing a dominant presence in the sim racing niche."
    },
    {
        name: "300K+ Instagram Views",
        username: "@pushlapracing",
        body: "Curated and shared engaging sim racing content, driving over 300,000 views and increasing follower engagement."
    },
    {
        name: "250K+ TikTok Likes",
        username: "@pushlapracing",
        body: "Leveraged trending challenges and creative edits to grow their TikTok presence to 250K+ likes."
    },
    {
        name: "1M+ TikTok Views",
        username: "@pushlapracing",
        body: "Created high-quality, branded video content that reached over 1 million views on TikTok."
    },
    {
        name: "Building a Sim Racing Community",
        username: "@pushlapracing",
        body: "Fostered an engaged and loyal community through consistent posting, branding, and active interaction."
    }
];
