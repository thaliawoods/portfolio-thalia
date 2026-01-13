import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore Next internals + fichiers statiques
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Déjà localisé
  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Redirect / -> /fr et conserve le chemin
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? "/fr" : `/fr${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
