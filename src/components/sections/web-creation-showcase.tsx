"use client";

import { 
  ShoppingCart, 
  Calendar, 
  Bot, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  Globe, 
  Palette,
  Database,
  FileText,
  Users,
  TrendingUp
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import DisplayCards from "@/components/ui/display-cards";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { motion } from "framer-motion";

export function WebCreationShowcase() {
  // Custom cards for GetReech and NBooking
  const websiteCards = [
    {
      icon: <ShoppingCart className="size-4 text-muted-foreground" />,
      title: "GetReech",
      description: "E-commerce Excellence",
      date: "Ecommerce Platform",
      iconClassName: "text-foreground",
      titleClassName: "text-foreground",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Calendar className="size-4 text-muted-foreground" />,
      title: "NBooking",
      description: "Booking & Scheduling",
      date: "Service Platform",
      iconClassName: "text-foreground",
      titleClassName: "text-foreground",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-muted-foreground" />,
      title: "AI Powered",
      description: "Smart Automation",
      date: "Next-Gen Tech",
      iconClassName: "text-foreground",
      titleClassName: "text-foreground",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const features = [
    {
      Icon: ShoppingCart,
      name: "GetReech - E-commerce Platform",
      description: "Complete online stores with inventory management, payment processing, and customer analytics. Perfect for retail businesses ready to sell online.",
      href: "/services/website-creation",
      cta: "Build Your Store",
      category: "E-commerce",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-4 right-4 w-32 h-32 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: Calendar,
      name: "NBooking - Service Scheduling",
      description: "Professional booking systems for consultants, salons, clinics, and service providers. Automated scheduling with payment integration.",
      href: "/services/website-creation",
      cta: "Start Booking",
      category: "Scheduling",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-4 left-4 w-28 h-28 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Bot,
      name: "AI Sales Automation",
      description: "Intelligent chatbots and automated workflows that convert visitors into customers 24/7. Powered by advanced AI technology.",
      href: "/services/ai-sales-automation",
      cta: "Automate Sales",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-6 right-6 w-24 h-24 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-6 left-6 w-32 h-32 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: MessageCircle,
      name: "WhatsApp Business Integration",
      description: "Connect with customers directly through WhatsApp. Automated responses, order updates, and customer support integration.",
      href: "/services/ai-sales-automation",
      cta: "Connect WhatsApp",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-4 right-4 w-20 h-20 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-28 h-28 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: FileText,
      name: "Content Creation Suite",
      description: "AI-powered content generation for blogs, product descriptions, social media, and marketing materials. Never run out of engaging content.",
      href: "/services/content-creation",
      cta: "Create Content",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-4 left-4 w-24 h-24 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: TrendingUp,
      name: "Marketing Automation",
      description: "Email campaigns, social media scheduling, and customer journey automation. Grow your business while you sleep.",
      href: "/services/marketing-automation",
      cta: "Automate Marketing",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-transparent">
          <div className="absolute top-4 right-4 w-28 h-28 bg-muted/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-muted/15 rounded-full blur-lg" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <section className="w-full py-20 max-w-full overflow-x-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Complete Web Solutions</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tighter max-w-4xl text-center font-regular mb-6"
          >
            Two Powerful Platforms, Infinite Possibilities
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center"
          >
            Whether you&apos;re selling products with <span className="text-emerald-500 font-semibold">GetReech</span> or booking services with <span className="text-blue-500 font-semibold">NBooking</span>, 
            we provide complete business automation with AI-powered content creation, sales automation, and WhatsApp integration.
          </motion.p>
        </div>

        {/* Website Types Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Choose Your Platform</h3>
              <p className="text-muted-foreground">
                We specialize in two distinct types of websites, each designed for specific business needs:
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                <div className="p-2 rounded-lg bg-muted/30">
                  <ShoppingCart className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">GetReech - E-commerce</h4>
                  <p className="text-sm text-muted-foreground">Perfect for retail businesses, online stores, and product-based companies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                <div className="p-2 rounded-lg bg-muted/30">
                  <Calendar className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">NBooking - Service Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Ideal for consultants, salons, clinics, and service providers</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <DisplayCards cards={websiteCards} />
          </motion.div>
        </div>

        {/* Automation Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <DatabaseWithRestApi
              title="AI-Powered Business Automation"
              circleText="AI"
              badgeTexts={{
                first: "AI",
                second: "Sales",
                third: "Chat",
                fourth: "Auto"
              }}
              buttonTexts={{
                first: "NBizz",
                second: "Platform"
              }}
              lightColor="#6B7280"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Complete Business Automation</h3>
              <p className="text-muted-foreground">
                Beyond just websites, we provide a complete ecosystem of tools to automate and grow your business:
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                <div className="p-2 rounded-lg bg-muted/30">
                  <Bot className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">AI Sales Automation</h4>
                  <p className="text-sm text-muted-foreground">Intelligent chatbots that convert visitors into customers 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                <div className="p-2 rounded-lg bg-muted/30">
                  <MessageCircle className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp Integration</h4>
                  <p className="text-sm text-muted-foreground">Direct customer communication with automated responses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
                <div className="p-2 rounded-lg bg-muted/30">
                  <FileText className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Content Creation</h4>
                  <p className="text-sm text-muted-foreground">AI-powered content for blogs, social media, and marketing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From website creation to complete business automation, we provide all the tools you need to grow your business online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-6xl mx-auto lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard 
                key={feature.name} 
                item={{
                  title: feature.name,
                  description: feature.description,
                  icon: <feature.Icon className="w-4 h-4" />,
                  status: "Active",
                  tags: feature.category ? [feature.category] : [],
                  cta: feature.cta
                }} 
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Ready to transform your business?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 