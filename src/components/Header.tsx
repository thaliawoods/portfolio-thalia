"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/projects";
import LocaleSwitch from "@/components/LocaleSwitch";

export default function Header({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = pathname === href;

    return [
      "hover:text-black underline-offset-4",
      isActive ? "text-black underline" : "text-black/70 hover:underline",
    ].join(" ");
  };

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className={linkClass(`/${locale}`) + " text-sm"}
        >
          Thalia Woods
        </Link>

        <nav className="flex items-center gap-8 text-sm">
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
      </div>
    </header>
  );
}
