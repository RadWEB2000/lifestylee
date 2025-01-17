import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  console.log(request)

  console.log("Middleware Pathname:", pathname); // Logowanie w terminalu

  // Dodanie pathname jako nagłówka
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname); // Ustawienie nagłówka
  return response;
}