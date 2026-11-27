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
      "Stores, payments and WhatsApp ordering in one stack. Nepo Commerce gives growing brands the tools to sell online and in chat without stitching ten apps together. Formerly known as getreech.",
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
    name: "AI Agents",
    body:
      "Agents that answer customers, take orders, chase invoices and update your systems, around the clock. We design them around your process, connect them to your tools and keep them improving after launch.",
    tags: ["Sales & support agents", "WhatsApp", "Operations"],
    media: { kind: "video", src: "/nx/whatsapp-ordering.mp4", poster: "/nx/whatsapp-ordering.jpg", alt: "AI agent taking orders over WhatsApp" },
  },
  {
    index: "02",
    name: "AI Development",
    body:
      "Custom AI built into the software you already run: copilots, document and data pipelines, retrieval over your knowledge, and model integrations that are tested, secured and owned by you.",
    tags: ["LLM integration", "RAG", "Implementation"],
    media: { kind: "image", src: "/nx/commerce-admin.webp", alt: "Commerce admin with AI assistant" },
  },
  {
    index: "03",
    name: "Websites",
    body:
      "A website is your hardest-working salesperson. We design and build fast, conversion-focused sites and stores that look like the brand and load like an app.",
    tags: ["Design", "Development", "E-commerce"],
    media: { kind: "image", src: "/nx/ofam.webp", alt: "Ofam Mills website" },
  },
  {
    index: "04",
    name: "AI Video",
    body:
      "Campaign-grade product films made with AI and finished by people. Built for paid social, launches and the moments a still image can't carry.",
    tags: ["Product films", "Social ads", "Launches"],
    media: { kind: "video", src: "/nx/ai-diamond.mp4", poster: "/nx/ai-diamond.jpg", alt: "AI generated jewellery video" },
  },
];

/** What Nexusbizz builds under AI agents, development and implementation. */
export const AGENT_CAPABILITIES = [
  {
    index: "01",
    title: "AI agents",
    text: "Sales, support and operations agents on WhatsApp, web chat, email and voice. They take orders, book appointments, answer questions and hand off to a person when it matters.",
  },
  {
    index: "02",
    title: "AI development",
    text: "Custom models wired into your product: copilots, retrieval over your documents, extraction pipelines and internal tools built on the best model for each job.",
  },
  {
    index: "03",
    title: "Implementation",
    text: "We connect AI to the systems you already use, from payments and inventory to CRMs and spreadsheets, with logging, guardrails and access controls in place.",
  },
  {
    index: "04",
    title: "Training & support",
    text: "Your team learns to run and trust the system. We monitor, measure and improve the agents after launch, so they keep getting better.",
  },
];

export const AGENT_FAQ = [
  {
    q: "What is an AI agent?",
    a: "An AI agent is software that understands a request in plain language, decides what to do, and takes action in your systems: replying to a customer, creating an order, updating a record or escalating to a person.",
  },
  {
    q: "Which businesses do you build AI agents for?",
    a: "Brands and operators who handle a lot of repeat conversations or admin work: retail and e-commerce, food and hospitality, services and B2B teams in the United States and beyond.",
  },
  {
    q: "How long does an AI agent project take?",
    a: "A focused first agent usually goes live in two to six weeks, depending on how many systems it needs to connect to. We start small, measure, then expand.",
  },
  {
    q: "Which AI models do you use?",
    a: "We are model-agnostic. We choose the model that fits the task, cost and privacy needs of each project, and design so you can switch later.",
  },
  {
    q: "Do you only build for Nexusbizz ventures?",
    a: "No. Nexusbizz Studio builds AI agents, AI integrations, websites and AI video for other companies too.",
  },
];

export const CLIENTS = ["Mercy Luxury Hair", "Ofam Mills", "Crave Angel Bakes"];

export const CONTACT_EMAIL = "hello@nexusbizz.com";
