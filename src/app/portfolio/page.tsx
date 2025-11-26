"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Globe, Zap, Award, Bot, Video, Brain, ShoppingCart, Calendar, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Container from '@/components/global/container'
import { Button } from '@/components/ui/button'
import { NBizzNavbar } from "@/components/ui/nbizz-navbar"
import { AIVideosCarousel } from '@/components/ui/ai-videos-carousel'
import { AIPicturesCarousel } from '@/components/ui/ai-pictures-carousel'
import { AnomalousMatterHero } from '@/components/ui/anomalous-matter-hero'
import { MeshGradientBackground } from '@/components/ui/mesh-gradient-background'

interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  year: string
  link?: string
  github?: string
  status?: 'completed' | 'in-progress'
}

interface ProjectCategory {
  name: string
  icon: React.ComponentType<{ className?: string }>
  items: PortfolioItem[]
}

const portfolioItems: PortfolioItem[] = [
  // AI Solutions & Platforms
  {
    id: 'getreech',
    title: 'AI-Powered E-commerce Management Platform',
    client: 'GetReech',
    category: 'AI Solutions & Platforms',
    description: 'An AI agents platform that helps businesses manage and set up their e-commerce stores from inventory management to design. AI agents automate product management, inventory tracking, and store customization.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['Next.js', 'TypeScript', 'AI Agents', 'E-commerce', 'Automation'],
    featured: true,
    year: '2024',
    link: '/getreech',
    status: 'completed'
  },
  {
    id: 'nbooking',
    title: 'Booking & Appointment System',
    client: 'NBooking',
    category: 'AI Solutions & Platforms',
    description: 'A comprehensive booking website solution where businesses can have clients book appointments seamlessly. Features calendar integration, automated reminders, and multi-service support.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['React', 'Calendar API', 'Automation', 'SaaS', 'Booking'],
    featured: true,
    year: '2024',
    status: 'completed'
  },
  {
    id: 'nail-salon',
    title: 'Nail Salon Booking Website',
    client: 'Nail Salon',
    category: 'Booking Websites',
    description: 'A professional booking website for a nail salon where clients can easily schedule appointments, view services, and manage their bookings online.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['Booking', 'SaaS', 'Appointment System', 'Service Booking'],
    featured: true,
    year: '2024',
    link: 'https://nail-salon-website.vercel.app',
    status: 'completed'
  },
  {
    id: 'dental-plus-henna',
    title: 'Dental Plus Henna Booking Website',
    client: 'Dental Plus Henna',
    category: 'Booking Websites',
    description: 'A booking platform for dental services with henna treatments. Clients can book appointments, view available time slots, and manage their dental care appointments.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['Booking', 'Dental Services', 'Appointment System', 'Healthcare'],
    featured: true,
    year: '2024',
    link: 'https://dental-plus-henna.vercel.app',
    status: 'completed'
  },
  {
    id: 'order-collection-bot',
    title: 'AI Order Collection & Completion Bot',
    client: 'Order Collection Bot',
    category: 'AI Solutions & Platforms',
    description: 'An intelligent bot that can collect and complete orders for clients automatically. Handles order processing, customer inquiries, and order fulfillment through conversational AI.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['AI', 'Bot', 'Automation', 'Order Management', 'Conversational AI'],
    featured: true,
    year: '2024',
    status: 'in-progress'
  },
  // E-commerce Websites
  {
    id: 'mercy-luxury-hair',
    title: 'E-commerce with WhatsApp Order Integration',
    client: 'Mercy Luxury Hair',
    category: 'E-commerce Websites',
    description: 'An e-commerce platform for premium hair products where orders go directly to WhatsApp. Seamless integration between online store and WhatsApp messaging for order processing.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['E-commerce', 'WhatsApp Integration', 'Beauty', 'Order Automation'],
    featured: true,
    year: '2024',
    link: 'https://www.mercyluxuryhairworld.com',
    status: 'completed'
  },
  {
    id: 'ofam-mills',
    title: 'E-commerce Platform with Online Payments',
    client: 'Ofam Mills',
    category: 'E-commerce Websites',
    description: 'A complete e-commerce platform for palm oil products that collects orders online including payments, without relying on WhatsApp. Built on Medusa JS architecture for scalability.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['Medusa JS', 'E-commerce', 'Payment Integration', 'Agriculture', 'Full-Stack'],
    featured: true,
    year: '2024',
    link: 'https://ofam-storefront.vercel.app',
    status: 'completed'
  },
  {
    id: 'crave-angel-bakes',
    title: 'Crave Angel Bakes E-commerce',
    client: 'Crave Angel Bakes',
    category: 'E-commerce Websites',
    description: 'An e-commerce platform for baked goods and confectionery products. Features product catalog, online ordering, and seamless checkout experience.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['E-commerce', 'Food & Beverage', 'Online Store', 'Product Catalog'],
    featured: true,
    year: '2024',
    link: 'https://craveangelbakes-reech.vercel.app',
    status: 'completed'
  },
  {
    id: 'ecommerce-bizz',
    title: 'E-commerce Business Platform',
    client: 'E-commerce Bizz',
    category: 'E-commerce Websites',
    description: 'A comprehensive e-commerce platform built for businesses to sell products online. Features include inventory management, order processing, and customer management.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['E-commerce', 'Business Platform', 'Online Store', 'Full-Stack'],
    featured: true,
    year: '2024',
    link: 'https://ecommercebizz.vercel.app',
    status: 'completed'
  },
  // AI Videos
  {
    id: 'ai-product-videos',
    title: 'AI Product Showcase Videos',
    client: 'AI Video Production',
    category: 'AI Videos',
    description: 'Creating AI-powered product showcase videos for businesses. High-quality promotional videos generated using AI technology to showcase products effectively.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['AI Video', 'Product Marketing', 'Video Production', 'AI Generation'],
    featured: true,
    year: '2024',
    status: 'completed'
  },
  {
    id: 'ai-ugc-videos',
    title: 'AI UGC (User Generated Content) Videos',
    client: 'AI UGC Video Production',
    category: 'AI Videos',
    description: 'Generating authentic-looking user-generated content videos using AI. Perfect for social media marketing and creating relatable content for brands.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['AI Video', 'UGC', 'Social Media', 'Content Creation', 'Marketing'],
    featured: true,
    year: '2024',
    status: 'completed'
  },
  {
    id: 'ai-advertising-videos',
    title: 'AI Videos for Advertising',
    client: 'AI Advertising Videos',
    category: 'AI Videos',
    description: 'Currently working on AI-powered video creation for advertising campaigns. Creating engaging ad content using AI technology to reduce production costs and time.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['AI Video', 'Advertising', 'Marketing', 'Content Creation'],
    featured: true,
    year: '2024',
    status: 'in-progress'
  },
  // Bots & Automation
  {
    id: 'renewable-energy-bot',
    title: 'Renewable Energy Management Bot',
    client: 'Renewable Energy Bot',
    category: 'Bots & Automation',
    description: 'A specialized bot for renewable energy system management. Helps monitor, analyze, and optimize renewable energy systems using AI and data analysis.',
    image: '/images/Screenshot 2025-08-04 at 11.47.59.png',
    tags: ['Bot', 'Renewable Energy', 'Data Analysis', 'PyTorch', 'Automation'],
    featured: true,
    year: '2024',
    status: 'completed'
  },
  // Normal Websites
  {
    id: 'myriskng',
    title: 'MyRiskNG Website',
    client: 'MyRiskNG',
    category: 'Normal Websites',
    description: 'A professional website showcasing services and information. Built with modern web technologies for optimal performance and user experience.',
    image: '/images/Screenshot 2025-06-30 at 13.45.37.png',
    tags: ['Website', 'Professional', 'Modern Design', 'Responsive'],
    featured: true,
    year: '2024',
    link: 'https://myriskng.vercel.app',
    status: 'completed'
  }
]

// Organize projects by category
const projectCategories: ProjectCategory[] = [
  {
    name: 'AI Solutions & Platforms',
    icon: Brain,
    items: portfolioItems.filter(item => item.category === 'AI Solutions & Platforms')
  },
  {
    name: 'E-commerce Websites',
    icon: ShoppingCart,
    items: portfolioItems.filter(item => item.category === 'E-commerce Websites')
  },
  {
    name: 'Booking Websites',
    icon: Calendar,
    items: portfolioItems.filter(item => item.category === 'Booking Websites')
  },
  {
    name: 'AI Videos',
    icon: Video,
    items: portfolioItems.filter(item => item.category === 'AI Videos')
  },
  {
    name: 'Normal Websites',
    icon: FileText,
    items: portfolioItems.filter(item => item.category === 'Normal Websites')
  },
  {
    name: 'Bots & Automation',
    icon: Bot,
    items: portfolioItems.filter(item => item.category === 'Bots & Automation')
  }
]

const stats = [
  {
    icon: Code,
    label: 'Projects Completed',
    value: portfolioItems.filter(item => item.status === 'completed').length.toString(),
    description: 'Successful projects'
  },
  {
    icon: Brain,
    label: 'AI Technologies',
    value: '10+',
    description: 'AI & ML expertise'
  },
  {
    icon: Globe,
    label: 'Technologies Mastered',
    value: '15+',
    description: 'Tech stack proficiency'
  },
  {
    icon: Zap,
    label: 'Years Experience',
    value: '3+',
    description: 'Self-taught journey'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen relative">
      {/* Universal Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <MeshGradientBackground />
      </div>
      
      <div className="relative z-50">
        <NBizzNavbar />
      </div>
      
      {/* Hero Section - maintains its own background */}
      <div className="relative z-10">
        <AnomalousMatterHero
          title="Samuel Ogbonna"
          subtitle="Energy Systems Engineer & Self-Taught AI Engineer"
          description="Creating AI-powered solutions for businesses: AI videos, AI characters, AI-powered websites & applications, conversational AI, and AI for WhatsApp."
        />
      </div>

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 relative z-10">
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

      {/* About Samuel Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 relative z-10">
        <Container className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Samuel
            </h2>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I am an <strong className="text-foreground">Energy Systems Engineer</strong> with a passion for 
                technology and innovation. Through self-directed learning, I have developed expertise in 
                <strong className="text-foreground"> AI engineering, machine learning, and prompt engineering</strong>, 
                enabling me to create cutting-edge solutions for businesses.
              </p>
              
              <p className="text-lg leading-relaxed">
                As a <strong className="text-foreground">quick learner</strong>, I continuously expand my skill set 
                to stay at the forefront of technological advancements. My experience includes working with 
                <strong className="text-foreground"> PyTorch for deep learning</strong> and 
                <strong className="text-foreground"> data analysis</strong>, allowing me to build intelligent 
                systems that solve real-world problems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    AI Capabilities
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• AI videos for businesses</li>
                    <li>• AI character creation</li>
                    <li>• AI-powered websites & applications</li>
                    <li>• Conversational AI systems</li>
                    <li>• AI for WhatsApp integration</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg border bg-card/80 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technical Skills
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• PyTorch & Data Analysis</li>
                    <li>• Full-Stack Development</li>
                    <li>• AI/ML Model Development</li>
                    <li>• Automation & Bot Development</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mt-6">
                My work spans from creating <strong className="text-foreground">renewable energy management bots</strong> 
                to developing <strong className="text-foreground">e-commerce platforms</strong> that seamlessly integrate 
                with WhatsApp, and building <strong className="text-foreground">AI-powered video solutions</strong> for 
                advertising and marketing. Each project reflects my commitment to leveraging technology to create 
                meaningful impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Videos and Pictures Carousels */}
      <section className="py-16 px-4 md:px-6 lg:px-8 relative z-10">
        <Container className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* AI Videos Carousel */}
            <div>
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">AI Videos Showcase</h2>
              </div>
              <AIVideosCarousel />
            </div>
            
            {/* AI Pictures Carousel */}
            <div>
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">AI Pictures and Prompts</h2>
              </div>
              <AIPicturesCarousel />
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid by Category */}
      <section className="py-16 px-4 md:px-6 lg:px-8 relative z-10">
        <Container className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {projectCategories.map((category) => (
              <div key={category.name}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                  <Badge variant="secondary" className="ml-auto">
                    {category.items.length} {category.items.length === 1 ? 'Project' : 'Projects'}
                  </Badge>
                </div>
                
                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {category.items.map((item) => (
                    <Card 
                      key={item.id} 
                      className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group bg-card/80 backdrop-blur-sm h-full border"
                    >
                      <div className="relative h-64">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                          {item.status === 'in-progress' ? (
                            <Badge variant="default" className="bg-yellow-500/90 backdrop-blur-sm">
                              In Progress
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                              Completed
                            </Badge>
                          )}
                          <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-primary text-primary">
                            {item.year}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-xl mb-2">
                            {item.client}
                          </h3>
                          <p className="text-white/90 text-sm line-clamp-2">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex-1">
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                          {item.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          {item.link ? (
                            item.link.startsWith('http') ? (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                View Project
                              </a>
                            ) : (
                              <Link href={item.link} className="text-sm text-primary hover:underline">
                                View Project
                              </Link>
                            )
                          ) : (
                            <span className="text-sm text-muted-foreground">View Details</span>
                          )}
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 relative z-10">
        <Container className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in AI-powered solutions, e-commerce platforms, or automation? 
              I&apos;d love to discuss how we can bring your ideas to life. 
              Get in touch and let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

