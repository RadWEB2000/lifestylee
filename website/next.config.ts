import { subdomains } from "@/data/subdomains";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return subdomains.map((subdomain) => ({
      source: `/${subdomain}/:path*`,
      destination: `/:path*`,
    }));
  },
};

export default nextConfig;
