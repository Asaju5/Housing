/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
