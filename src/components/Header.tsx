"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/projects";
import LocaleSwitch from "@/components/LocaleSwitch";

export default function Header({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    return [
      "transition-opacity duration-200",
      isActive ? "opacity-100" : "opacity-40 hover:opacity-100",
    ].join(" ");
  };

  return (
    <header className="px-8 lg:px-14 h-16 flex items-center justify-between">
      <Link
        href={`/${locale}`}
        className="text-base italic font-light tracking-wide hover:opacity-70 transition-opacity duration-200"
      >
        Thalia Woods
      </Link>

      <nav className="flex items-center gap-10 text-sm tracking-wide">
        <Link href={`/${locale}/portfolio`} className={linkClass(`/${locale}/portfolio`)}>
          Portfolio
        </Link>

        <Link href={`/${locale}/cv`} className={linkClass(`/${locale}/cv`)}>
          CV
        </Link>

        <Link href={`/${locale}/info`} className={linkClass(`/${locale}/info`)}>
          {isFr ? "Infos" : "Info"}
        </Link>

        <LocaleSwitch locale={locale} />
      </nav>
    </header>
  );
}
