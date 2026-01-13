import Link from "next/link";
import Image from "next/image";
import { projects, type Locale } from "@/data/projects";

export default async function PortfolioPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          title: "Portfolio",
          intro:
            "Clique sur un projet pour voir la page dédiée (contexte, stack, liens, screenshots).",
          view: "Ouvrir →",
          section: "TOUS LES PROJETS",
        }
      : {
          title: "Portfolio",
          intro:
            "Click a project to open its dedicated page (context, stack, links, screenshots).",
          view: "Open →",
          section: "ALL PROJECTS",
        };

  const ordered = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured)
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-xl tracking-wide">{t.title}</h1>
        <p className="mt-2 text-sm text-black/60 max-w-2xl">{t.intro}</p>
      </div>

      <div className="text-xs tracking-widest text-black/50 mb-3">
        {t.section}
      </div>

      {/* ✅ rectangles plus grands : 3 colonnes desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordered.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className="group relative border border-black/10 bg-black/[0.03] hover:bg-black/[0.05] transition overflow-hidden"
          >
            {/* image au hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* texte */}
            <div className="relative p-4 min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="text-sm text-black/90 group-hover:text-white">
                  {p.title[locale]}
                </div>

                <div className="mt-2 text-xs leading-relaxed text-black/60 group-hover:text-white/80 line-clamp-4">
                  {p.subtitle[locale]}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-black/50 group-hover:text-white/80">
                <span>{p.years}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity underline underline-offset-4">
                  {t.view}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
