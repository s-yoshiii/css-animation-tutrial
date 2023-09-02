/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "placehold.jp",
      },
    ],
  },
};

module.exports = nextConfig;
