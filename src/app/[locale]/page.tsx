import Link from "next/link";
import { projects, type Locale } from "@/data/projects";
import ImageHover from "@/components/ImageHover";

export default async function HomePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          role: "Développeuse web — Front / Full-stack",
          blurb:
            "Je conçois des interfaces claires et des produits utiles, avec un soin particulier pour l’UX/UI, la qualité du code et la mise en production.",
          cta: "Voir le portfolio",
          cta2: "Me contacter",
          selection: "SÉLECTION",
          open: "Ouvrir →",
        }
      : {
          role: "Web developer — Front / Full-stack",
          blurb:
            "I build clean interfaces and useful products, with a strong focus on UX/UI, code quality, and shipping to production.",
          cta: "View portfolio",
          cta2: "Contact",
          selection: "SELECTED",
          open: "Open →",
        };

  // 2 projets visuels à droite
  const featured = [...projects].filter((p) => p.featured).slice(0, 2);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-4">
          <h1 className="text-3xl tracking-wide">Thalia Woods</h1>

          <div className="mt-3 text-sm tracking-wide text-black/60">
            {t.role}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-black/70 max-w-sm">
            {t.blurb}
          </p>

          <div className="mt-10 flex gap-3">
            <Link
              href={`/${locale}/portfolio`}
              className="border border-black/20 bg-white px-5 py-2.5 text-sm hover:bg-black hover:text-white transition"
            >
              {t.cta}
            </Link>

            <Link
              href={`/${locale}/info`}
              className="border border-black/10 bg-white px-5 py-2.5 text-sm hover:bg-black hover:text-white transition"
            >
              {t.cta2}
            </Link>
          </div>
        </div>

        {/* CENTER - carré portfolio avec image statique au hover */}
        <div className="lg:col-span-5">
          <Link
            href={`/${locale}/portfolio`}
            className="group relative block border border-black/10 bg-white h-[420px] overflow-hidden"
            aria-label="Open portfolio"
          >
            {/* preview image au hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio-preview.png"
                alt="Portfolio preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/55" />
            </div>

            {/* contenu central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-xs tracking-widest text-black/40 mb-5">
                  PORTFOLIO
                </div>
                <div className="text-3xl tracking-[0.18em] uppercase">
                  THALIA WOODS
                </div>

                <div className="mt-6 text-xs text-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.open}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT - images noir & blanc -> couleur au hover */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs tracking-widest text-black/40">
              {t.selection}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/projects/${p.slug}`}
                className="group block border border-black/10 bg-white overflow-hidden"
                aria-label={`Open ${p.title[locale]}`}
              >
                <div className="relative aspect-[4/5]">
                  <ImageHover
                    src={p.cover.src}
                    alt={p.cover.alt}
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
