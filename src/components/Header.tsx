import Link from "next/link";

export default function Header({ locale }: { locale: "fr" | "en" }) {
  const isFr = locale === "fr";
  const other = isFr ? "en" : "fr";

  const t = isFr
    ? { projects: "Projets", portfolio: "Portfolio", info: "Infos", switch: "EN" }
    : { projects: "Projects", portfolio: "Portfolio", info: "Info", switch: "FR" };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-sm tracking-wide">
          Thalia Woods
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href={`/${locale}/portfolio`} className="hover:underline">
            {t.portfolio}
          </Link>
          <Link href={`/${locale}/info`} className="hover:underline">
            {t.info}
          </Link>

          <Link href={`/${other}`} className="ml-2 underline">
            {t.switch}
          </Link>
        </nav>
      </div>
    </header>
  );
}
