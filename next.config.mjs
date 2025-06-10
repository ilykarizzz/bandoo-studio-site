/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true
};

export default nextConfig;