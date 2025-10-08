"use client";

import { Check, Star, Tag, RefreshCw } from "lucide-react";

export function GetReechPricing() {
  return (
    <section className="w-full bg-black px-4 py-20 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Simple pricing for your business
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            Plans that are carefully crafted to suit your business.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left side - Price */}
            <div className="flex flex-col items-center justify-center bg-gray-100 p-8 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Premium PRO
              </h3>
              <div className="mb-2 text-6xl font-bold text-gray-900 md:text-7xl">
                $50
              </div>
              <p className="mb-8 text-gray-600">billed just once</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-violet-600 px-8 py-4 text-center font-semibold text-white transition-all hover:bg-violet-700"
              >
                Get Started
              </a>
            </div>

            {/* Right side - Features */}
            <div className="flex flex-col justify-center bg-white p-8 text-gray-900 md:p-12">
              <p className="mb-6 text-gray-600">
                Access these features when you get this pricing package for your
                business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">WhatsApp Integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">
                    Logo Development + 4 carousel posts (FREE)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">1 Month Maintenance (FREE)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">
                    24/7 support and consulting (FREE)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">
                30 days money back Guarantee
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <Tag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">
                No setup fees 100% hassle-free
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <RefreshCw className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">
                No monthly subscription Pay once and for all
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

