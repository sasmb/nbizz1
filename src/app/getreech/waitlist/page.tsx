"use client";

import { useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xl mx-auto p-8 space-y-12">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
              Join Our Product Launch Waitlist
            </h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Be part of something truly extraordinary. Join thousands of others
              already gaining early access to our revolutionary new product.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-gray-950/50 border-gray-800 text-white placeholder:text-gray-400"
                required
              />
              <Button
                type="submit"
                className="h-12 px-6 bg-black hover:bg-black/90 text-white"
                variant="ghost"
              >
                Get Notified
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">You&apos;re on the list!</h3>
              <p className="text-gray-400">
                We&apos;ll notify you as soon as we launch. Get ready for something amazing!
              </p>
            </div>
          )}

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <Avatar className="border-2 w-12 h-12">
                  <AvatarFallback className="text-sm font-semibold border-white/20 bg-purple-600 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 w-12 h-12">
                  <AvatarFallback className="text-sm font-semibold border-white/20 bg-blue-600 text-white">
                    AS
                  </AvatarFallback>
                </Avatar>
                <Avatar className="border-2 w-12 h-12">
                  <AvatarFallback className="text-sm font-semibold border-white/20 bg-blue-700 text-white">
                    MK
                  </AvatarFallback>
                </Avatar>
              </div>
              <span className="font-bold text-white">1000+ people on the waitlist</span>
            </div>

            <div className="flex gap-6 justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-300"
                asChild
              >
                <a href="https://twitter.com/nbizztech" target="_blank" rel="noopener noreferrer">
                  <Icons.twitter className="w-5 h-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-300"
                asChild
              >
                <a href="https://github.com/nbizz" target="_blank" rel="noopener noreferrer">
                  <Icons.gitHub className="w-5 h-5 fill-current" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
