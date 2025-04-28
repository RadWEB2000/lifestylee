import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'images.pexels.com'
      },
      {
        hostname: 'cms.lifeestylee.pl'
      }
    ]
  }
};

export default nextConfig;
