import Link from "next/link";
import Image from "next/image";
import { projects, type Locale } from "@/data/projects";

type Params = { locale: Locale };

export default async function PortfolioPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          title: "Portfolio",
          intro:
            "Tous mes projets (perso, école et pro). Clique sur un projet pour voir la page dédiée (contexte, stack, liens, screenshots).",
          featured: "Featured",
          all: "Tous",
          featuredOnly: "Projets mis en avant",
          allProjects: "Tous les projets",
        }
      : {
          title: "Portfolio",
          intro:
            "All my projects (personal, school and professional). Click a project to open its dedicated page (context, stack, links, screenshots).",
          featured: "Featured",
          all: "All",
          featuredOnly: "Featured projects",
          allProjects: "All projects",
        };

  const featured = projects.filter((p) => p.featured);
  const all = [...projects];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-xl tracking-wide">{t.title}</h1>
        <p className="mt-2 text-sm text-black/70 max-w-2xl">{t.intro}</p>

        {/* mini filtres via anchors (sans state, simple et clean) */}
        <div className="mt-4 flex gap-3 text-sm">
          <a
            href="#featured"
            className="inline-flex items-center rounded-full border border-black/15 px-3 py-1 hover:bg-black/5"
          >
            {t.featured}
          </a>
          <a
            href="#all"
            className="inline-flex items-center rounded-full border border-black/15 px-3 py-1 hover:bg-black/5"
          >
            {t.all}
          </a>
        </div>
      </div>

      {/* FEATURED */}
      <section id="featured" className="mb-12">
        <div className="text-xs text-black/50 mb-3">{t.featuredOnly.toUpperCase()}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/projects/${p.slug}`}
              className="group"
            >
              <div className="border border-black/10 overflow-hidden">
                <Image
                  src={p.cover.src}
                  alt={p.cover.alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-2 flex items-baseline justify-between gap-4">
                <div className="text-sm">{p.title[locale]}</div>
                <div className="text-xs text-black/60">{p.years}</div>
              </div>

              <div className="text-xs text-black/60 group-hover:text-black/80">
                {p.subtitle[locale]}
              </div>
            </Link>
          ))}
        </div>

        {featured.length === 0 && (
          <div className="text-sm text-black/60">—</div>
        )}
      </section>

      {/* ALL */}
      <section id="all">
        <div className="text-xs text-black/50 mb-3">{t.allProjects.toUpperCase()}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {all.map((p) => (
            <Link key={p.slug} href={`/${locale}/projects/${p.slug}`} className="group">
              <div className="border border-black/10 overflow-hidden">
                <Image
                  src={p.cover.src}
                  alt={p.cover.alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-2 flex items-baseline justify-between gap-4">
                <div className="text-sm">{p.title[locale]}</div>
                <div className="text-xs text-black/60">{p.years}</div>
              </div>

              <div className="text-xs text-black/60 group-hover:text-black/80">
                {p.subtitle[locale]}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
