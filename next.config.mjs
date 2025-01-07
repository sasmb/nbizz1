/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'utfs.io',
      'your-custom-domain.com', // Replace with your actual domain
      'subdomain.your-custom-domain.com', // Replace with your subdomain
    ],
  },
  reactStrictMode: true, // Recommended for better debugging
  trailingSlash: false, // Enforces consistent URL formatting
};

export default nextConfig;
