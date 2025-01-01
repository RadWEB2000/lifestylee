import { subdomains } from "@/data/subdomains";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const basePath = process.env.BASE_DOMAIN;
// const domains = subdomains.map((subdomain) => subdomain.url.split(".")[0]);

function isValidSlug(slug: string | undefined): boolean {
  if (!slug) return false;
  if (slug === "123") return true; // Jeśli będzie deploy na vercel zakomentować tą i poniższą linijkę kodu
  return true;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (
    subdomain === "www" ||
    subdomain === basePath ||
    url.pathname.endsWith("/404")
  ) {
    return NextResponse.next();
  }

  const isValid = isValidSlug(subdomain);

  if (!isValid) {
    return NextResponse.redirect(
      new URL(`${url.protocol}//${basePath}/404`, req.url)
    );
  }
  console.log(
    `url:${url} | host:${host} | subdomain:${subdomain} | basePath:${basePath}`
  );

  return NextResponse.rewrite(new URL(`/${subdomain}/`, req.url));
}
