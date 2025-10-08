"use client";

export function AiVideoProblem() {
  return (
    <section className="w-full bg-black px-4 py-20 text-white md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Main Problem Statement */}
        <div className="mb-16 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
          <p className="mb-6">
            Most African brands struggle to create video content consistently. You know the challenge: expensive equipment, time-consuming editing, camera shyness, and no clear brand story. You think video marketing is too complex or too expensive...
          </p>
          <p className="mb-6">
            <span className="font-semibold text-violet-400">But AI video changes everything.</span> Your brand gets professional videos with a consistent character that speaks to your audience. No cameras, no editing software, no technical skills needed.{" "}
            <span className="font-semibold text-violet-400">AI creates the content; you focus on growing your business.</span>
          </p>
        </div>

        {/* Pain Points */}
        <div className="space-y-6 border-l-4 border-red-500 pl-6">
          <div className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">
            <p className="mb-4 text-red-400">
              • &ldquo;Are you losing customers to competitors because you don&apos;t have engaging video content?&rdquo;
            </p>
            <p className="mb-4 text-red-400">
              • &ldquo;Every day without video content is a missed opportunity to build trust and convert sales.&rdquo;
            </p>
            <p className="text-red-400">
              • You want to post videos consistently but hiring videographers or learning video editing takes too much time and money.
            </p>
          </div>
        </div>

        {/* CTA Button */}
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

