import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with /en and ensure it's a segment (not /enable)
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const newUrl = new URL(request.url);
    // Remove /en prefix. If path was just /en, it becomes /. If /en/foo, becomes /foo
    newUrl.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(newUrl);
  }

  // Allow other requests to proceed
  return NextResponse.next();
}

export const config = {
  // Only run this middleware on paths starting with /en
  matcher: "/en/:path*",
};
