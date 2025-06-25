import { TiltedScroll } from "@/components/ui/tilted-scroll"

export function TiltedScrollDemo() {
  const nbizzFeatures = [
    { id: "1", text: "AI-Powered Website Creation" },
    { id: "2", text: "E-commerce with MedusaJS" },
    { id: "3", text: "Automated Booking Systems" },
    { id: "4", text: "Social Media Automation" },
    { id: "5", text: "Custom Business Solutions" },
    { id: "6", text: "24/7 AI Support" },
    { id: "7", text: "Mobile-First Design" },
    { id: "8", text: "SEO Optimization" },
    { id: "9", text: "Payment Gateway Integration" },
    { id: "10", text: "Analytics & Reporting" },
    { id: "11", text: "Content Management" },
    { id: "12", text: "Cloud Hosting Solutions" },
  ]

  return (
    <div className="space-y-8">
      <TiltedScroll 
        items={nbizzFeatures}
        className="mt-8"
      />
    </div>
  )
}

export function TiltedScrollBenefits() {
  const businessBenefits = [
    { id: "1", text: "50% Faster Development" },
    { id: "2", text: "300% ROI Increase" },
    { id: "3", text: "90% Cost Reduction" },
    { id: "4", text: "24/7 Automated Support" },
    { id: "5", text: "Zero Downtime Guarantee" },
    { id: "6", text: "Scalable Architecture" },
    { id: "7", text: "Advanced Security" },
    { id: "8", text: "Real-time Analytics" },
    { id: "9", text: "Mobile Optimization" },
    { id: "10", text: "SEO-Ready Structure" },
    { id: "11", text: "API Integration" },
    { id: "12", text: "Custom Workflows" },
  ]

  return (
    <div className="space-y-8">
      <TiltedScroll 
        items={businessBenefits}
        className="mt-8"
      />
    </div>
  )
} 