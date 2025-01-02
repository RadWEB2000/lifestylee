"use server";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { subdomains } from "@/data/subdomains";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const [subdomain] = host.split(".");

  if (!subdomains.includes(subdomain)) {
    return NextResponse.next();
  }
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${url.pathname}`;
  console.log(`host:${host} | subdomain:${subdomain} | url:${url}`);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/:path*",
};
