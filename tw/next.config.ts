import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cms.lifeestylee.pl",
      },
      {
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
