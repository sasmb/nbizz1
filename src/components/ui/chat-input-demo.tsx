"use client"

import { useState } from "react"
import Link from "next/link"
import { ChatInput } from "@/components/ui/chat-input"
import { Button } from "@/components/ui/button"
import { Paperclip, Mic, CornerDownLeft } from "lucide-react"

export function ChatInputDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="w-[70%] max-w-[70%] mx-auto p-4 sm:w-auto sm:max-w-[67.2rem] sm:min-w-[560px]">
      <form 
        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        onSubmit={(e) => {
          e.preventDefault()
          console.log("Submitted:", value)
        }}
      >
        <ChatInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Describe your store..."
          className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button variant="ghost" size="icon" type="button">
            <Paperclip className="size-4" />
            <span className="sr-only">Attach file</span>
          </Button>

          <Button variant="ghost" size="icon" type="button">
            <Mic className="size-4" />
            <span className="sr-only">Use Microphone</span>
          </Button>

          <Button
            type="submit"
            size="sm"
            className="ml-auto gap-1.5"
            asChild
          >
            <Link href="/getreech/waitlist">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
