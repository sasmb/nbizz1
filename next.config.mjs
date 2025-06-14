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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
