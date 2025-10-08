"use client";

import { cn } from "@/lib/utils";

export default function CallToAction() {
  return (
    <div className="mx-2 flex max-w-5xl flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#5524B7] to-[#380B60] p-10 py-16 text-center text-white md:mx-auto md:w-full">
        <div className="flex flex-wrap items-center justify-center rounded-full border border-purple-500/40 bg-purple-600/10 p-1 text-sm backdrop-blur">
          <div className="flex items-center">
            <img
              className="size-6 rounded-full border-3 border-white md:size-7"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="Business owner 1"
            />
            <img
              className="size-6 -translate-x-2 rounded-full border-3 border-white md:size-7"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="Business owner 2"
            />
            <img
              className="size-6 -translate-x-4 rounded-full border-3 border-white md:size-7"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="Business owner 3"
            />
          </div>
          <p className="-translate-x-2 font-medium">
            Join 500+ business owners innovating
          </p>
        </div>
        <h1 className="mt-5 max-w-xl bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl md:leading-[60px]">
          Stop sending menus manually. Start growing your business.
        </h1>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full bg-violet-600 px-8 py-3 text-sm uppercase text-white transition-all hover:bg-violet-700"
        >
          Get Your Website Now
        </a>
      </div>
  );
}

