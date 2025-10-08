"use client";

export default function AiVideoCTA() {
  return (
    <div className="mx-2 flex max-w-5xl flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#7C3AED] to-[#5B21B6] p-10 py-16 text-center text-white md:mx-auto md:w-full">
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
          Join 500+ brands creating AI videos
        </p>
      </div>
      <h1 className="mt-5 max-w-xl bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl md:leading-[60px]">
        Stop posting static images. Start engaging with AI videos.
      </h1>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfU7Z4yjfDlwtYdQP70wqRs9oexlcIuatqRhdx75tqfY-hW3Q/viewform?usp=sharing&ouid=112951346346000147762"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase text-violet-700 transition-all hover:bg-gray-100"
      >
        Get Your AI Videos Now
      </a>
    </div>
  );
}

