"use client";

import { Calendar } from "lucide-react";

export function SalesPageHeader({ calLink }: { calLink: string }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="text-xl font-bold text-white">GetReech</div>
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-green-700 hover:scale-105"
        >
          <Calendar className="h-4 w-4" />
          Book Now
        </a>
      </div>
    </header>
  );
}

