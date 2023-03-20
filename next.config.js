/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['miro.medium.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
