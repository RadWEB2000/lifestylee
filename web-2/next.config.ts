import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname:'cms.lifeestylee.pl'
      }
    ]
  }
};

export default nextConfig;
