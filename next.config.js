/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lofigirl.com'],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
