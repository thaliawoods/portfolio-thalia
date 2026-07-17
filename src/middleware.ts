import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Pick "fr" or "en" from an Accept-Language header, defaulting to "fr". */
function detectLocale(acceptLanguage: string): "fr" | "en" {
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q) : 1 };
    })
    .filter((l) => l.tag === "fr" || l.tag === "en")
    .sort((a, b) => b.q - a.q);

  return preferred[0]?.tag === "en" ? "en" : "fr";
}

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

  // Already-localized routes: forward the active locale to the server layout
  // (used to set <html lang>) via a request header.
  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    const locale = pathname.startsWith("/en") ? "en" : "fr";
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const locale = detectLocale(req.headers.get("accept-language") ?? "");
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
