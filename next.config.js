/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "placekitten.com",
      },
    ],
  },
};

module.exports = nextConfig;
