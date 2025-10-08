"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function AiVideoBenefits() {
  return (
    <section className="w-full bg-black px-4 py-20 text-white md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-violet-500">
              <span className="font-semibold">Professional AI Videos:</span>
            </PointerHighlight>{" "}
            <br />
            Get 4 branded videos monthly that showcase your products and brand story without needing video equipment or editing skills.
          </div>

          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-blue-500">
              <span className="font-semibold">Brand Character Development:</span>
            </PointerHighlight>{" "}
            <br />
            We create a consistent AI character that represents your brand across all videos, building trust and recognition.
          </div>

          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-purple-500">
              <span className="font-semibold">Social Media Ready:</span>
            </PointerHighlight>{" "}
            <br />
            Get 4 carousel posts plus an optional website for $50 - everything you need for a complete online presence.
          </div>

          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-orange-500">
              <span className="font-semibold">Monthly Subscription:</span>
            </PointerHighlight>{" "}
            <br />
            Consistent content delivery every month with 24/7 support and consulting to grow your brand.
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-violet-700"
          >
            Get My AI Videos Now
          </a>
        </div>
      </div>
    </section>
  );
}

