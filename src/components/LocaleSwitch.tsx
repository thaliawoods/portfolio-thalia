"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/projects";

export default function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const nextLocale: Locale = locale === "fr" ? "en" : "fr";

  // pathname: "/fr/info" -> "/en/info"
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return (
      <Link
        href={`/${nextLocale}`}
        className="text-black/80 hover:text-black underline underline-offset-4"
      >
        {nextLocale.toUpperCase()}
      </Link>
    );
  }

  // remplace le 1er segment si c'est une locale, sinon on préfixe
  if (parts[0] === "fr" || parts[0] === "en") {
    parts[0] = nextLocale;
  } else {
    parts.unshift(nextLocale);
  }

  const href = "/" + parts.join("/");

  return (
    <Link
      href={href}
      className="text-black/80 hover:text-black underline underline-offset-4"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
