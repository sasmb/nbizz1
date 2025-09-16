import { ChatInputDemo } from "@/components/ui/chat-input-demo"

export default function ChatDemoPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Chat Input Demo</h1>
          <p className="text-muted-foreground mt-2">
            A modern chat input component with file attachment and voice input capabilities
          </p>
        </div>
        
        <div className="flex justify-center">
          <ChatInputDemo />
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Auto-resizing textarea with max height limit</li>
            <li>• File attachment button with Paperclip icon</li>
            <li>• Voice input button with Mic icon</li>
            <li>• Send button with keyboard shortcut indicator</li>
            <li>• Form submission handling</li>
            <li>• Accessible with proper ARIA labels</li>
            <li>• Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
