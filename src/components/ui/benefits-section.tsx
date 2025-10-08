"use client";

import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function BenefitsSection() {
  return (
    <section className="w-full bg-black px-4 py-20 text-white md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
          <div>
          •{" "}
            <PointerHighlight pointerClassName="text-green-500">
              <span className="font-semibold">Professional Online Menu:</span>
            </PointerHighlight>{" "}
            <br/>Customers browse your full inventory and place orders directly to your WhatsApp inbox.
          </div>
          
          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-blue-500">
              <span className="font-semibold">Zero Back-and-Forth:</span>
            </PointerHighlight>{" "}
            <br/>Cut out the manual process of sharing PDF menus or negotiating details.
          </div>
          
          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-purple-500">
              <span className="font-semibold">Instant Credibility:</span>
            </PointerHighlight>{" "}
            <br/> Finally establish a consistent brand (even without branded posts) that customers trust before they message you.
          </div>
          
          <div>
            •{" "}
            <PointerHighlight pointerClassName="text-orange-500">
              <span className="font-semibold">7-Day Launch Guarantee:</span>
            </PointerHighlight>{" "}
              <br/>Pay now and launch in one week, reduce the Time Delay to achieving the results.
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:scale-105"
          >
            Get My Website Now
          </a>
        </div>
      </div>
    </section>
  );
}

