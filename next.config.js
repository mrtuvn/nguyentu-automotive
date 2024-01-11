/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "unsplash.it",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
