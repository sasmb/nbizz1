import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp, Award, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Container from '@/components/global/container'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/home/navigation/navbar'

interface CaseStudyDetail {
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
    icon: any
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

const caseStudies: CaseStudyDetail[] = [
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
    solution: 'NBizz developed a comprehensive e-commerce solution that seamlessly integrated with their existing WhatsApp customer service approach while adding sophisticated online shopping capabilities. The platform features automated inventory management, multiple payment options, and a streamlined ordering system that bridges the gap between personal service and digital efficiency.',
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
        icon: TrendingUp
      },
      {
        metric: 'Order Processing',
        value: '90%',
        description: 'Reduction in manual processing time and errors',
        icon: Award
      },
      {
        metric: 'Customer Satisfaction',
        value: '95%',
        description: 'Positive feedback on new ordering system',
        icon: Users
      },
      {
        metric: 'Conversion Rate',
        value: '7.2%',
        description: 'Website conversion rate achieved within 3 months',
        icon: CheckCircle
      }
    ],
    testimonial: {
      quote: "NBizz completely transformed our business. The new e-commerce platform not only streamlined our operations but also helped us reach customers we never could have reached before. The WhatsApp integration was genius - it kept the personal touch our customers love while making everything so much more efficient. Our sales tripled within six months!",
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
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
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
    solution: 'NBizz created a comprehensive brand identity and e-commerce platform that positioned Ofam Mills as a premium palm oil producer. The solution included brand development, a sophisticated e-commerce platform, content marketing strategy, and customer relationship management system that enabled direct-to-consumer sales and brand building.',
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
        icon: Award
      },
      {
        metric: 'Brand Recognition',
        value: '250%',
        description: 'Increase in brand awareness within target market',
        icon: TrendingUp
      },
      {
        metric: 'Online Sales',
        value: '180%',
        description: 'Growth in direct-to-consumer sales channel',
        icon: CheckCircle
      },
      {
        metric: 'Customer Base',
        value: '400%',
        description: 'Expansion of direct customer relationships',
        icon: Users
      }
    ],
    testimonial: {
      quote: "Working with NBizz was a game-changer for our business. They didn't just build us a website - they helped us build a brand that customers trust and love. The new positioning and online platform helped us move from being just another palm oil producer to being recognized as a premium brand. Our direct sales have grown tremendously, and we now have customers across multiple states.",
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
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find((s) => s.id === params.slug)
  
  if (!study) {
    return {
      title: 'Case Study Not Found - NBizz',
    }
  }

  return {
    title: `${study.client} Case Study - NBizz`,
    description: study.description,
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.id === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="pt-40 pb-12 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
              <Link href="/case-studies">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Badge variant="secondary" className="bg-gray-100">
                {study.industry}
              </Badge>
              <Badge variant="outline" className="border-gray-300">
                {study.year}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {study.client}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {study.title}
            </p>
            
            {/* Project Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Location</div>
                <div className="text-gray-900 font-medium">{study.location}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Duration</div>
                <div className="text-gray-900 font-medium">{study.projectDuration}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Team Size</div>
                <div className="text-gray-900 font-medium">{study.teamSize}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">Industry</div>
                <div className="text-gray-900 font-medium">{study.industry}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                {study.description}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-gray-600">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-gray-600">
                    {study.solution}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="space-y-2">
                  {study.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
                
                <hr className="my-6" />
                
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50/50 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The transformation delivered measurable results across key business metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <Card key={index} className="text-center p-6 bg-white">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <result.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                <div className="font-medium mb-2">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensured successful delivery at every stage
            </p>
          </div>
          
          <div className="space-y-8">
            {study.implementation.map((phase, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{phase.phase}</Badge>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50/50 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-white">
            <div className="text-center">
              <div className="text-6xl text-primary mb-6">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl font-medium mb-8 text-center">
                {study.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={study.testimonial.avatar}
                  alt={study.testimonial.author}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold">{study.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
