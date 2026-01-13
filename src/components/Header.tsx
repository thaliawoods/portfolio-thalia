import Link from "next/link";
import { type Locale } from "@/data/projects";

export default function Header({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";
  const switchTo = isFr ? "en" : "fr";

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-sm text-black/80 hover:text-black">
          Thalia Woods
        </Link>

        <nav className="flex items-center gap-8 text-sm text-black/70">
          <Link
            href={`/${locale}/portfolio`}
            className="hover:text-black hover:underline underline-offset-4"
          >
            {isFr ? "Portfolio" : "Portfolio"}
          </Link>

          <Link
            href={`/${locale}/info`}
            className="hover:text-black hover:underline underline-offset-4"
          >
            {isFr ? "Infos" : "Info"}
          </Link>

          <Link
            href={`/${switchTo}`}
            className="text-black/80 hover:text-black underline underline-offset-4"
          >
            {switchTo.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
