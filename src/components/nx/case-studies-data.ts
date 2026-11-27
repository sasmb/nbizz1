/* Case studies, carried over from the original site. */
export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  location: string
  projectDuration: string
  teamSize: string
  description: string
  challenge: string
  solution: string
  implementation: {
    phase: string
    title: string
    description: string
    deliverables: string[]
  }[]
  results: {
    metric: string
    value: string
    description: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    avatar: string
  }
  technologies: string[]
  image: string
  gallery: string[]
  tags: string[]
  year: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'mercy-luxury-hair',
    title: 'E-commerce Transformation for Premium Hair Products',
    client: 'Mercy Luxury Hair',
    industry: 'Beauty & Fashion',
    location: 'Lagos, Nigeria',
    projectDuration: '4 months',
    teamSize: '5 experts',
    description: 'Mercy Luxury Hair, a premium hair product retailer specializing in high-quality wigs and hair extensions, needed to modernize their sales process and expand their reach beyond their physical store location.',
    challenge: 'Mercy Luxury Hair was experiencing significant growth challenges. Their manual order processing through WhatsApp was becoming overwhelming, leading to delayed responses, missed orders, and customer dissatisfaction. The lack of a professional online presence was limiting their ability to reach new customers and compete with larger e-commerce players in the beauty industry.',
    solution: 'Nexusbizz developed a comprehensive e-commerce solution that seamlessly integrated with their existing WhatsApp customer service approach while adding sophisticated online shopping capabilities. The platform features automated inventory management, multiple payment options, and a streamlined ordering system that bridges the gap between personal service and digital efficiency.',
    implementation: [
      {
        phase: 'Phase 1',
        title: 'Platform Development & Design',
        description: 'Created a mobile-first e-commerce platform with premium aesthetics matching the luxury brand positioning.',
        deliverables: [
          'Custom e-commerce website design',
          'Mobile-optimized user interface',
          'Product catalog management system',
          'Professional brand photography integration'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'WhatsApp Integration & Automation',
        description: 'Developed seamless integration between the website and WhatsApp for order processing and customer service.',
        deliverables: [
          'WhatsApp Business API integration',
          'Automated order notifications',
          'Customer inquiry routing system',
          'Order status updates via WhatsApp'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Payment & Logistics Setup',
        description: 'Implemented secure payment processing and efficient order fulfillment systems.',
        deliverables: [
          'Multiple payment gateway integration',
          'Inventory management system',
          'Order tracking and fulfillment',
          'Customer account management'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Launch & Optimization',
        description: 'Launched the platform with comprehensive testing and ongoing optimization based on user feedback.',
        deliverables: [
          'Platform testing and quality assurance',
          'Staff training and documentation',
          'Performance monitoring setup',
          'Ongoing support and maintenance'
        ]
      }
    ],
    results: [
      {
        metric: 'Sales Increase',
        value: '300%',
        description: 'Monthly revenue growth within 6 months of launch',
      },
      {
        metric: 'Order Processing',
        value: '90%',
        description: 'Reduction in manual processing time and errors',
      },
      {
        metric: 'Customer Satisfaction',
        value: '95%',
        description: 'Positive feedback on new ordering system',
      },
      {
        metric: 'Conversion Rate',
        value: '7.2%',
        description: 'Website conversion rate achieved within 3 months',
      }
    ],
    testimonial: {
      quote: "Nexusbizz completely transformed our business. The new e-commerce platform not only streamlined our operations but also helped us reach customers we never could have reached before. The WhatsApp integration was genius - it kept the personal touch our customers love while making everything so much more efficient. Our sales tripled within six months!",
      author: "Mercy Adebayo",
      position: "Founder, Mercy Luxury Hair",
      avatar: "/assets/logos.png"
    },
    technologies: [
      'React/Next.js',
      'WhatsApp Business API',
      'Stripe Payment Gateway',
      'Cloudinary Image Management',
      'MongoDB Database',
      'Vercel Hosting'
    ],
    image: '/nx/mercy.webp',
    gallery: [
      '/images/Screenshot 2025-06-30 at 13.45.37.png',
      '/images/automation.webp',
      '/images/analytics.webp',
      '/images/collaborative.webp'
    ],
    tags: ['E-commerce', 'WhatsApp Integration', 'Beauty', 'Automation', 'Mobile-First'],
    year: '2024'
  },
  {
    id: 'ofam-mills',
    title: 'Brand Building and E-commerce for Agricultural Products',
    client: 'Ofam Mills',
    industry: 'Agriculture & Food',
    location: 'Ogun State, Nigeria',
    projectDuration: '6 months',
    teamSize: '7 experts',
    description: 'Ofam Mills, a rising palm oil producer in Nigeria, needed to establish a strong brand presence and create an efficient direct-to-consumer sales channel to compete in the increasingly competitive agricultural market.',
    challenge: 'Ofam Mills was struggling with limited brand recognition and had no online presence. They were selling primarily through distributors and local markets, which limited their profit margins and customer relationships. The company needed to differentiate itself in a crowded market and build direct relationships with consumers to increase profitability and market position.',
    solution: 'Nexusbizz created a comprehensive brand identity and e-commerce platform that positioned Ofam Mills as a premium palm oil producer. The solution included brand development, a sophisticated e-commerce platform, content marketing strategy, and customer relationship management system that enabled direct-to-consumer sales and brand building.',
    implementation: [
      {
        phase: 'Phase 1',
        title: 'Brand Identity & Strategy',
        description: 'Developed a comprehensive brand identity that positioned Ofam Mills as a premium, sustainable palm oil producer.',
        deliverables: [
          'Brand strategy and positioning',
          'Logo design and visual identity',
          'Brand guidelines and style guide',
          'Product packaging design'
        ]
      },
      {
        phase: 'Phase 2',
        title: 'E-commerce Platform Development',
        description: 'Built a robust e-commerce platform optimized for agricultural product sales and B2B transactions.',
        deliverables: [
          'Custom e-commerce website',
          'Product catalog with detailed specifications',
          'B2B pricing and wholesale features',
          'Customer portal and account management'
        ]
      },
      {
        phase: 'Phase 3',
        title: 'Content & Marketing Strategy',
        description: 'Created content marketing strategy focusing on sustainability, quality, and local sourcing.',
        deliverables: [
          'Content marketing strategy',
          'SEO-optimized website content',
          'Social media content calendar',
          'Educational content about palm oil production'
        ]
      },
      {
        phase: 'Phase 4',
        title: 'Launch & Market Penetration',
        description: 'Launched the brand and platform with targeted marketing campaigns to establish market presence.',
        deliverables: [
          'Digital marketing campaigns',
          'Influencer partnership strategy',
          'Customer acquisition campaigns',
          'Performance tracking and analytics'
        ]
      }
    ],
    results: [
      {
        metric: 'Market Position',
        value: 'Top 3',
        description: 'Regional ranking in premium palm oil products',
      },
      {
        metric: 'Brand Recognition',
        value: '250%',
        description: 'Increase in brand awareness within target market',
      },
      {
        metric: 'Online Sales',
        value: '180%',
        description: 'Growth in direct-to-consumer sales channel',
      },
      {
        metric: 'Customer Base',
        value: '400%',
        description: 'Expansion of direct customer relationships',
      }
    ],
    testimonial: {
      quote: "Working with Nexusbizz was a game-changer for our business. They didn't just build us a website - they helped us build a brand that customers trust and love. The new positioning and online platform helped us move from being just another palm oil producer to being recognized as a premium brand. Our direct sales have grown tremendously, and we now have customers across multiple states.",
      author: "Olumide Fashina",
      position: "CEO, Ofam Mills",
      avatar: "/assets/logos.png"
    },
    technologies: [
      'Next.js/React',
      'Shopify Plus',
      'Google Analytics',
      'Mailchimp Integration',
      'Paystack Payment',
      'AWS Hosting'
    ],
    image: '/nx/ofam.webp',
    gallery: [
      '/images/Screenshot 2025-08-04 at 11.47.59.png',
      '/images/collaborative.webp',
      '/images/analytics.webp',
      '/images/automation.webp'
    ],
    tags: ['Brand Building', 'Agriculture', 'E-commerce', 'Market Positioning', 'Sustainability'],
    year: '2024'
  }
]
