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
    if (config.optimization.splitChunks === false) {
      config.optimization.splitChunks = {};
    }
    config.optimization.splitChunks.chunks = 'all';
    return config;
  },
};

export default nextConfig;