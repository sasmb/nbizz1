/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-custom-domain.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'subdomain.your-custom-domain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true, // Recommended for better debugging
  trailingSlash: false, // Enforces consistent URL formatting
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r("/services/ai-sales-automation", "/ai-agents"),
      r("/services/marketing-automation", "/ai-agents"),
      r("/services/content-creation", "/studio#ai-video"),
      r("/services/website-creation", "/studio#websites"),
      r("/services", "/studio"),
      r("/solutions", "/studio"),
      r("/portfolio", "/studio#ai-video"),
      r("/ai-video", "/studio#ai-video"),
      r("/get-website-offer", "/studio#websites"),
      r("/faqs", "/contact"),
      r("/support", "/contact"),
      r("/pricing", "/contact"),
      r("/success", "/contact"),
      r("/chat-demo", "/"),
      r("/getreech", "/ventures/nepo-commerce"),
      r("/getreech/:path*", "/ventures/nepo-commerce"),
      r("/blog/1", "/blog/ai-agents-future-of-ecommerce-africa"),
      r("/blog/2", "/blog/ai-agents-admin-experience"),
      r("/blog/3", "/blog/beyond-whatsapp-african-ecommerce-brands"),
      r("/blog/4", "/blog/nepo-commerce-vs-traditional-platforms"),
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
