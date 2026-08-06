import Link from "next/link";
import type { Locale } from "@/data/projects";

export default function Footer({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";
  const year = new Date().getFullYear();

  const nav = isFr
    ? [
        { href: `/${locale}/portfolio`, label: "Portfolio" },
        { href: `/${locale}/cv`, label: "CV" },
        { href: `/${locale}/info`, label: "Infos" },
      ]
    : [
        { href: `/${locale}/portfolio`, label: "Portfolio" },
        { href: `/${locale}/cv`, label: "CV" },
        { href: `/${locale}/info`, label: "Info" },
      ];

  return (
    <footer className="border-t border-black/10 mt-auto">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">

          <div>
            <Link
              href={`/${locale}`}
              className="text-sm italic font-light hover:opacity-60 transition-opacity duration-200"
            >
              Thalia Woods
            </Link>
            <p className="mt-2 text-xs font-light text-[#6b6b6b]">
              © {year}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-light text-[#6b6b6b] hover:text-black transition-colors duration-200 w-fit"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="mailto:thaliadwoods@gmail.com"
              className="text-xs font-light text-[#6b6b6b] hover:text-black transition-colors duration-200"
            >
              thaliadwoods@gmail.com
            </a>
            <a
              href="https://github.com/thaliawoods"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-light text-[#6b6b6b] hover:text-black transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-light text-[#6b6b6b] hover:text-black transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
