/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: ["https:/cdn.swell.store"],
  // },
  images: {
    domains: ["cdn.swell.store"],
  },
};

module.exports = nextConfig;
