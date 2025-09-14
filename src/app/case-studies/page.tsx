import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, TrendingUp, Award, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Container from '@/components/global/container'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/home/navigation/navbar'

export const metadata: Metadata = {
  title: 'Case Studies - NBizz',
  description: 'Discover how NBizz has helped businesses transform their operations with AI-powered e-commerce solutions and automation.',
}

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  image: string
  tags: string[]
  featured: boolean
  year: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'mercy-luxury-hair',
    title: 'E-commerce Transformation for Premium Hair Products',
    client: 'Mercy Luxury Hair',
    industry: 'Beauty & Fashion',
    description: 'A premium hair product retailer needed a sophisticated e-commerce platform to sell wigs online while maintaining their personalized customer service approach.',
    challenge: 'Manual order processing through WhatsApp was limiting growth and creating customer service bottlenecks.',
    solution: 'We built a comprehensive e-commerce platform with integrated WhatsApp ordering system and streamlined online checkout process.',
    results: [
      {
        metric: 'Sales Increase',
        value: '300%',
        description: 'Monthly revenue growth within 6 months'
      },
      {
        metric: 'Order Processing',
        value: '90%',
        description: 'Reduction in manual processing time'
      },
      {
        metric: 'Customer Satisfaction',
        value: '95%',
        description: 'Positive feedback on new ordering system'
      },
      {
        metric: 'Conversion Rate',
        value: '7.2%',
        description: 'Website conversion rate achieved'
      }
    ],
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['E-commerce', 'WhatsApp Integration', 'Beauty', 'Automation'],
    featured: true,
    year: '2024'
  },
  {
    id: 'ofam-mills',
    title: 'Brand Building and E-commerce for Agricultural Products',
    client: 'Ofam Mills',
    industry: 'Agriculture & Food',
    description: 'A rising farm oil producer in Nigeria focused on selling palm oil products needed to establish a strong brand presence and efficient e-commerce platform.',
    challenge: 'Limited brand recognition and no online presence was restricting market reach and customer engagement.',
    solution: 'We developed a comprehensive brand identity and e-commerce platform that positioned Ofam Mills as a premium palm oil producer with direct-to-consumer capabilities.',
    results: [
      {
        metric: 'Market Position',
        value: 'Top 3',
        description: 'Regional ranking in palm oil products'
      },
      {
        metric: 'Brand Recognition',
        value: '250%',
        description: 'Increase in brand awareness'
      },
      {
        metric: 'Online Sales',
        value: '180%',
        description: 'Growth in direct-to-consumer sales'
      },
      {
        metric: 'Customer Base',
        value: '400%',
        description: 'Expansion of customer reach'
      }
    ],
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['Brand Building', 'Agriculture', 'E-commerce', 'Market Positioning'],
    featured: true,
    year: '2024'
  }
]

const stats = [
  {
    icon: Users,
    label: 'Clients Served',
    value: '50+',
    description: 'Businesses transformed'
  },
  {
    icon: TrendingUp,
    label: 'Average Growth',
    value: '240%',
    description: 'Revenue increase'
  },
  {
    icon: Award,
    label: 'Success Rate',
    value: '98%',
    description: 'Project satisfaction'
  },
  {
    icon: Target,
    label: 'ROI',
    value: '450%',
    description: 'Average return on investment'
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="pt-40 pb-12 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover how NBizz has helped businesses across Africa transform their operations 
              with AI-powered e-commerce solutions and automation.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-3 py-1">
                {caseStudies.length} Success Stories
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Real Results
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50/50 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <Card className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group bg-white h-full border border-gray-200">
                  <div className="relative h-64">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-primary text-primary">
                        {study.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {study.client}
                      </h3>
                      <p className="text-white/90 text-sm line-clamp-2">
                        {study.title}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                      {study.description}
                    </p>
                    
                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">View Full Study</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50/50 px-4 md:px-6 lg:px-8">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the growing list of businesses that have transformed their operations 
              with NBizz&apos;s AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Your Transformation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/getreech">
                  Learn About Our Platform
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
