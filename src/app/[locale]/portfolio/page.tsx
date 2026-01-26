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

  const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-xl tracking-wide">{t.title}</h1>
        <p className="mt-2 text-sm text-black/60 max-w-2xl">{t.intro}</p>
      </div>

      <div className="text-xs tracking-widest text-black/50 mb-4">
        {t.section}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {ordered.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className={[
              "group relative border border-black/10 bg-white overflow-hidden",
              "transition-shadow duration-500",
              ease,
              "hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
            ].join(" ")}
          >
            {/* couche image (au hover) */}
            <div
              className={[
                "absolute inset-0 opacity-0",
                "transition-opacity duration-700",
                ease,
                "group-hover:opacity-100",
              ].join(" ")}
            >
              <div className="absolute inset-0 p-7 bg-white">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    className={[
                      "object-cover",
                      "transition-transform duration-700",
                      ease,
                      "group-hover:scale-[1.03]",
                    ].join(" ")}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* couche texte (par défaut) */}
            <div
              className={[
                "relative p-6 h-[270px] flex flex-col justify-between",
                "transition-opacity duration-700",
                ease,
                "group-hover:opacity-0 group-hover:pointer-events-none",
              ].join(" ")}
            >
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

                {/* ✅ maintenant il apparaît vraiment au hover */}
                <span
                  className={[
                    "underline underline-offset-4",
                    "opacity-0 translate-x-0",
                    "transition-all duration-700",
                    ease,
                    "group-hover:opacity-100 group-hover:translate-x-0.5",
                  ].join(" ")}
                >
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
