/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks.chunks = 'all';
    return config;
  },
};

export default nextConfig;