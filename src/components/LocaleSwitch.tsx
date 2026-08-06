"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/projects";

export default function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const nextLocale: Locale = locale === "fr" ? "en" : "fr";

  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return (
      <Link
        href={`/${nextLocale}`}
        className="text-[#6b6b6b] hover:text-[#111111] underline underline-offset-4"
      >
        {nextLocale.toUpperCase()}
      </Link>
    );
  }

  if (parts[0] === "fr" || parts[0] === "en") {
    parts[0] = nextLocale;
  } else {
    parts.unshift(nextLocale);
  }

  const href = "/" + parts.join("/");

  return (
    <Link
      href={href}
      className="text-[#6b6b6b] hover:text-[#111111] underline underline-offset-4"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
