export type Venture = {
  slug: string;
  index: string;
  name: string;
  short: string;
  sector: string;
  line: string;
  body: string;
  tags: string[];
  media: { kind: "image" | "video"; src: string; poster?: string; alt: string };
  status: "Live" | "Building" | "Private beta";
  pillars: { title: string; text: string }[];
  url?: string;
};

export const VENTURES: Venture[] = [
  {
    slug: "nepo-commerce",
    index: "01",
    name: "Nepo Commerce",
    short: "Nepo",
    sector: "Commerce",
    line: "Commerce infrastructure for brands that sell everywhere.",
    body:
      "Stores, payments and WhatsApp ordering in one stack. Nepo Commerce gives growing brands the tools to sell online and in chat without stitching ten apps together. It is the home of getreech and NBooking.",
    tags: ["Storefronts", "Payments", "WhatsApp ordering"],
    media: { kind: "image", src: "/nx/commerce-admin.webp", alt: "Nepo Commerce product admin" },
    status: "Live",
    pillars: [
      { title: "Storefronts", text: "Fast, mobile-first stores that a team can run without a developer on call." },
      { title: "Chat ordering", text: "Customers order inside WhatsApp. Orders, stock and payment land in one dashboard." },
      { title: "Payments", text: "Card and local payment rails, reconciled to the order, with clean payouts." },
    ],
  },
  {
    slug: "fayaa-tech",
    index: "02",
    name: "Fayaa Tech",
    short: "Fayaa",
    sector: "AI",
    line: "AI video and creative generation, built for brands.",
    body:
      "Fayaa Tech turns a product and a brief into campaign-ready video. Models, prompts and post-production are handled in one pipeline, so a brand gets studio-grade creative in days instead of weeks.",
    tags: ["AI video", "Creative tooling", "Campaigns"],
    media: { kind: "video", src: "/nx/ai-perfume.mp4", poster: "/nx/ai-perfume.jpg", alt: "AI generated perfume campaign video" },
    status: "Building",
    pillars: [
      { title: "Generate", text: "Product-true AI video from a single brief and a few reference shots." },
      { title: "Direct", text: "Shot lists, motion and pacing tuned by people who have shipped real campaigns." },
      { title: "Deliver", text: "Cut-downs for every placement, ready for paid social and the web." },
    ],
  },
  {
    slug: "sohae-finance",
    index: "03",
    name: "Sohae Finance",
    short: "Sohae",
    sector: "Energy",
    line: "A renewable energy investment platform.",
    body:
      "Sohae Finance opens renewable energy projects to everyday investors. Back solar and clean-power assets, follow their output and returns, and grow capital that also grows the grid.",
    tags: ["Renewable energy", "Investing", "Clean power"],
    media: { kind: "image", src: "/nx/sohae.webp", alt: "Solar array at dusk" },
    status: "Building",
    pillars: [
      { title: "Projects", text: "Solar and clean-power assets, vetted before they reach the platform." },
      { title: "Transparency", text: "Track each project's output and performance as it happens." },
      { title: "Access", text: "Low minimums, so renewable infrastructure is open to more than funds." },
    ],
  },
];

export type StudioService = {
  index: string;
  name: string;
  body: string;
  tags: string[];
  media: { kind: "image" | "video"; src: string; poster?: string; alt: string };
};

export const STUDIO: StudioService[] = [
  {
    index: "01",
    name: "Websites",
    body:
      "A website is your hardest-working salesperson. We design and build fast, conversion-focused sites and stores that look like the brand and load like an app.",
    tags: ["Design", "Development", "E-commerce"],
    media: { kind: "image", src: "/nx/ofam.webp", alt: "Ofam Mills website" },
  },
  {
    index: "02",
    name: "AI Video",
    body:
      "Campaign-grade product films made with AI and finished by people. Built for paid social, launches and the moments a still image can't carry.",
    tags: ["Product films", "Social ads", "Launches"],
    media: { kind: "video", src: "/nx/ai-diamond.mp4", poster: "/nx/ai-diamond.jpg", alt: "AI generated jewellery video" },
  },
  {
    index: "03",
    name: "Automation",
    body:
      "Ordering, follow-ups and support that run themselves. We wire WhatsApp, payments and your stack together so the busy work stops landing on your team.",
    tags: ["WhatsApp", "AI agents", "Workflows"],
    media: { kind: "video", src: "/nx/whatsapp-ordering.mp4", poster: "/nx/whatsapp-ordering.jpg", alt: "WhatsApp ordering automation demo" },
  },
];

export const CLIENTS = ["Mercy Luxury Hair", "Ofam Mills", "Crave Angel Bakes"];

export const CONTACT_EMAIL = "hello@nexusbizz.com";
