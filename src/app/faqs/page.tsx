import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories";
import { NBizzNavbar } from "@/components/ui/nbizz-navbar";

const ECOMMERCE_FAQS = [
  {
    question: "What exactly do I get with your e-commerce website service?",
    answer: "You'll receive a fully functional e-commerce website tailored to your brand, built on Medusa.js. This includes a customized storefront, payment gateways (like Stripe or PayPal), and a chatbot for customer engagement. You'll also get access to Medusa's admin dashboard, where you can manage inventory, orders, and basic settings yourself. We handle hosting (on Railway or Nomodo) and provide ongoing maintenance through a subscription plan, so your site stays secure and operational with minimal effort.",
    category: "Service Overview",
  },
  {
    question: "What is Medusa.js, and why do you use it?",
    answer: "Medusa.js is a powerful, open-source e-commerce platform that&apos;s highly customizable and cost-effective. Unlike platforms like Shopify, it&apos;s free to use, with no transaction fees, giving you more control over your store&apos;s design and functionality. We choose Medusa because it allows us to create unique, scalable sites quickly while keeping your costs low. Its modular setup and admin dashboard make it easy for you to manage your store without needing constant technical support.",
    category: "Technology",
  },
  {
    question: "How much will this cost me?",
    answer: "Our pricing is split into a one-time design fee and a monthly subscription fee. Base Package: $500 for a semi-customized site using a pre-designed template (2 weeks delivery). Premium Package: $1,000+ for a fully custom site built from scratch (2–3 weeks delivery). Monthly subscriptions: Standard Tier $100/month (2 hours support), Premium Tier $200/month (4 hours support). Get 40% off with 6-month commitment: Base ($60/month), Premium ($120/month).",
    category: "Pricing",
  },
  {
    question: "What's included in the subscription fee?",
    answer: "The subscription covers hosting (on Railway or Nomodo), security patches, minor updates (like plugin tweaks), and chatbot maintenance. It also includes a set number of support hours (2 for Standard, 4 for Premium) for troubleshooting or minor adjustments. This ensures your site stays online, secure, and functional without you needing to worry about technical details. You&apos;ll manage day-to-day tasks like adding products through the Medusa admin dashboard.",
    category: "Pricing",
  },
  {
    question: "Why charge a separate design fee?",
    answer: "The one-time design fee covers the time and effort to build your custom site, including creating a unique design, setting up payment systems, and integrating a chatbot. Since each client wants a tailored look, this fee reflects the work to make your store stand out. By separating it from the subscription, we keep monthly costs predictable and focused on maintenance and hosting, not the initial build.",
    category: "Pricing",
  },
  {
    question: "How does hosting work, and why Railway or Nomodo?",
    answer: "We host your site on Railway, a reliable platform that scales with your traffic, with costs typically averaging $10/month per site (ranging from $5–$50 based on usage). To keep costs low, we use features like pausing unused resources. Alternatively, Nomodo offers a flat $15/month rate, which is predictable and Medusa-friendly, ideal for cost-conscious clients. We'll monitor performance and recommend the best option for your site, with all hosting costs covered by your subscription fee.",
    category: "Technical",
  },
  {
    question: "How much maintenance will my site need, and will I have to do it?",
    answer: "We&apos;ve designed the service to minimize maintenance. The subscription covers routine tasks like security patches, plugin updates, and chatbot functionality checks, handled by us within your tier&apos;s support hours. You&apos;ll manage everyday tasks like adding products or updating prices through Medusa&apos;s user-friendly admin dashboard—we&apos;ll provide a tutorial and documentation to make this easy. Major changes, like adding new features, aren&apos;t covered by the subscription and will be quoted separately.",
    category: "Support",
  },
  {
    question: "Can I manage my site myself?",
    answer: "Absolutely! Medusa&apos;s admin dashboard lets you handle inventory, orders, and content updates without technical skills. We&apos;ll set it up for you and provide a quick-start guide to get you comfortable. For anything complex, like troubleshooting or updates, we&apos;ve got you covered under the subscription&apos;s support hours.",
    category: "Support",
  },
  {
    question: "What if I want to change my site's design later?",
    answer: "The initial design fee includes up to two rounds of revisions during the build phase. After launch, minor tweaks (like updating colors) can often be handled within your subscription&apos;s support hours. Major redesigns or new features (e.g., adding a loyalty program) will be quoted separately to reflect the additional work. We&apos;ll always discuss costs upfront to avoid surprises.",
    category: "Service Overview",
  },
  {
    question: "How long does it take to get my site?",
    answer: "Base Package: About 2 weeks, assuming timely feedback on designs. Premium Package: 2–3 weeks, depending on complexity and your input. We&apos;ll provide a detailed timeline when you sign the contract, and we&apos;ll keep you updated throughout the process.",
    category: "Timeline",
  },
  {
    question: "What happens if my site has high traffic and hosting costs go up?",
    answer: "Railway&apos;s hosting costs scale with traffic, but we&apos;ll optimize your site to keep usage low (e.g., pausing resources during low-traffic periods). If costs rise significantly, we can switch to Nomodo&apos;s flat $15/month plan to keep your subscription predictable. We&apos;ll monitor usage and discuss options with you to ensure cost efficiency, all covered by your subscription fee.",
    category: "Technical",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel with 30 days&apos; notice. The initial design fee is non-refundable once work begins, but you&apos;re not locked into the subscription long-term. If you cancel, we&apos;ll help transition your site to another host or provide your site&apos;s data, though additional fees may apply for migration support.",
    category: "Billing",
  },
  {
    question: "What if I need extra features, like multi-language support?",
    answer: "Features like multi-language support, advanced cart options, or custom integrations can be added as optional add-ons. We&apos;ll quote these based on the scope of work, ensuring transparency. For example, a basic analytics setup is a $50 one-time fee, while more complex features will be estimated after discussing your needs.",
    category: "Features",
  },
  {
    question: "Do I own my website?",
    answer: "Once the initial design fee is fully paid, you own the site&apos;s design and content. Medusa.js is open-source, so there are no licensing fees. Hosting and maintenance are managed through your subscription, and if you cancel, we can help transfer your site to another host (additional fees may apply).",
    category: "Legal",
  },
  {
    question: "How do payments work?",
    answer: "Design Fee: 50% upfront to start work, 50% upon completion, payable via Stripe or bank transfer. Subscription Fee: Billed monthly, or upfront for 6 months to get the 40% discount. Add-Ons/Extra Support: Billed upon completion or as agreed. We&apos;ll provide clear invoices and payment instructions when you sign the contract.",
    category: "Billing",
  },
  {
    question: "How do you make the site scalable and low-maintenance?",
    answer: "We use Medusa&apos;s modular architecture to build scalable sites that grow with your business. Pre-built templates and plugins (like Tidio for chatbots) speed up development while maintaining customization. Automated tools, like Railway&apos;s CI/CD pipelines and Medusa&apos;s webhooks, handle updates and monitor site health, reducing manual maintenance. This lets us focus on delivering new sites while keeping your store running smoothly.",
    category: "Technical",
  },
  {
    question: "What if I have more questions or need help after launch?",
    answer: "We&apos;re here for you! Your subscription includes support hours (2 for Standard, 4 for Premium) for troubleshooting or questions. For additional help, we offer premium support at $50/hour. You can also reach out anytime via email or phone, and we&apos;ll respond promptly.",
    category: "Support",
  },
  {
    question: "How do I get started?",
    answer: "It&apos;s simple: 1) Review and sign the service agreement. 2) Choose your design package (Base or Premium) and subscription tier (Standard or Premium). 3) Share your branding materials (logos, colors, etc.) and any specific requirements. We&apos;ll kick off the design process and deliver your site in 2–3 weeks, keeping you updated every step of the way.",
    category: "Getting Started",
  },
];

export default function FaqPage() {
  const handleContactSupport = () => {
    // Redirect to contact or cal.com link
    window.open("https://cal.com/samogb/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <NBizzNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden max-w-full pt-36 lg:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              💡 Get Answers
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our e-commerce website services using Medusa.js. 
              From pricing to technical details, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSectionWithCategories
        title="E-Commerce Website Service FAQs"
        description="Find answers to common questions about our custom Medusa.js e-commerce solutions, pricing, and support."
        items={ECOMMERCE_FAQS}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help! Book a free consultation to discuss your specific needs.",
          buttonText: "Book Free Consultation",
          onContact: handleContactSupport,
        }}
        className="bg-gray-50/50 dark:bg-gray-900/50"
      />
    </div>
  );
}
