import { Metadata } from 'next'
import { NBizzNavbar } from "@/components/ui/nbizz-navbar"

export const metadata: Metadata = {
  title: 'Blog - NBizz',
  description: 'Stay updated with the latest insights on AI automation, e-commerce trends, and business growth strategies from NBizz.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NBizzNavbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
    </div>
  )
}
