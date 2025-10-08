"use client";

export function ProblemSection() {
  return (
    <section className="w-full bg-black px-4 py-20 text-white md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Main Problem Statement */}
        <div className="mb-16 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
          <p className="mb-6">
            Most African brands rely on sending a WhatsApp link or a PDF to manage orders. You know the frustration: endless back-and-forth, unclear orders, and lost customers who get tired of waiting. You think a website is too complicated to fix this...
          </p>
          <p className="mb-6">
            <span className="font-semibold text-green-400">But your website isn't just a landing page.</span> It is your 24/7 online catalogue that customers browse easily. They select their items, choose quantities, and hit 'Order Now' and the complete, calculated order is instantly delivered to your dedicated WhatsApp number.{" "}
            <span className="font-semibold text-green-400">The website does the selling; WhatsApp does the closing.</span>
          </p>
        </div>

        {/* Pain Points */}
        <div className="space-y-6 border-l-4 border-red-500 pl-6">
          <div className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">
            <p className="mb-4 text-red-400">
              • "Are you tired of customers dropping off when you send them a slow, manually-typed menu list on WhatsApp?"
            </p>
            <p className="mb-4 text-red-400">
              • "Every minute you spend detailing product options or calculating totals is a sale you could be losing."
            </p>
            <p className="text-red-400">
              • That one crucial item is always out of stock, but you spent 10 minutes messaging back and forth before you found out.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-green-700"
          >
            Get My Website Now
          </a>
        </div>
      </div>
    </section>
  );
}

