import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? "/fr" : `/fr${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
