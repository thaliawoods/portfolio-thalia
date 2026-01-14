import Link from "next/link";
import Image from "next/image";
import { projects, type Locale } from "@/data/projects";

export default async function PortfolioPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale =
    params.locale === "fr" || params.locale === "en" ? params.locale : "fr";

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
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-xl tracking-wide">{t.title}</h1>
        <p className="mt-2 text-sm text-black/60 max-w-2xl">{t.intro}</p>
      </div>

      <div className="text-xs tracking-widest text-black/50 mb-4">
        {t.section}
      </div>

      {/* ✅ plus grands carrés + plus d’air + marge blanche au hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {ordered.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className="group relative border border-black/10 bg-white overflow-hidden"
          >
            {/* hover image avec “cadre blanc” */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* cadre blanc */}
              <div className="absolute inset-0 p-5 sm:p-7 lg:p-9 bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                </div>
              </div>
            </div>

            {/* contenu (caché au hover pour laisser place à l’image) */}
            <div className="relative p-6 h-[250px] sm:h-[270px] flex flex-col justify-between transition-opacity duration-200 group-hover:opacity-0 group-hover:pointer-events-none">
              <div>
                <div className="text-base tracking-wide text-black/90">
                  {p.title[locale]}
                </div>

                <div className="mt-4 text-sm leading-relaxed text-black/60 line-clamp-4">
                  {p.subtitle[locale]}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-black/50">
                <span>{p.years}</span>
                {/* gardé pour l'alignement, mais invisible */}
                <span className="opacity-0 underline underline-offset-4">
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
