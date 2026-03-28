import Link from "next/link";
import Image from "next/image";
import type { Project, Locale } from "@/data/projects";

interface Props {
  projects: Project[];
  locale: Locale;
  title: string;
  countLabel: string;
}

export default function PortfolioGrid({ projects, locale, title, countLabel }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="flex items-center justify-between px-0 lg:px-6 py-8">
        <h1 className="text-4xl font-light">{title}</h1>
        <span className="text-xs text-black/40 font-light tracking-wide">{countLabel}</span>
      </div>

      <div className="pb-16 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className="group block"
            aria-label={p.title[locale]}
          >
            <div className="relative overflow-hidden aspect-[4/3] bg-white">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                sizes="(max-width:640px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-base font-light group-hover:opacity-60 transition-opacity duration-200">
                {p.title[locale]}
              </span>
              <span className="text-xs text-black/40 font-light shrink-0 ml-3">{p.years}</span>
            </div>
            <p className="mt-1 text-sm font-light text-black/50 line-clamp-1">
              {p.subtitle[locale]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
