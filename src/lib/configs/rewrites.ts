import { subdomains } from "@/data/subdomains";
import { Rewrite } from "next/dist/lib/load-custom-routes";

export const rewrites: Rewrite[] = subdomains.map((subdomain) => {
  const name = subdomain.url.split(".")[0];

  return {
    source: "/:path*",
    has: [
      {
        type: "host",
        key: "host",
        value: subdomain.url,
      },
    ],
    destination: `/${name}/:path*`,
  };
});
