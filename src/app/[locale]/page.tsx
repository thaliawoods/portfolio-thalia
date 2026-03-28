import Link from "next/link";
import Image from "next/image";
import { projects, type Locale } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ScrollHint from "@/components/ScrollHint";

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
            "Je conçois et développe des interfaces où se rencontrent code, interaction et direction visuelle.",
          cta: "Portfolio",
          cta2: "Contact",
        }
      : {
          role: "Web developer — Front / Full-stack",
          blurb:
            "I design and build interfaces where code, interaction, and visual direction meet.",
          cta: "Portfolio",
          cta2: "Contact",
        };

  const featured = [...projects].filter((p) => p.featured);

  return (
    <main className="flex flex-col lg:grid lg:grid-cols-[42%_58%]">

      {/* ── Left panel — sticky hero ── */}
      <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] flex flex-col justify-center px-8 lg:px-14 py-20 lg:py-0">
        <FadeIn>
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] uppercase">
            Thalia Woods
          </h1>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="mt-4 text-base italic font-light text-black/50">
            {t.role}
          </p>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="mt-8 text-sm font-light leading-relaxed text-black/60 max-w-xs">
            {t.blurb}
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="mt-10 flex flex-col gap-3 text-sm">
            <Link
              href={`/${locale}/portfolio`}
              className="underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 w-fit"
            >
              {t.cta}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 w-fit"
            >
              {t.cta2}
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* ── Right panel — full-height images with side margins ── */}
      <div className="flex flex-col gap-10 pl-1 pr-6 lg:pr-20 pb-20">
        {featured.map((p, i) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className="group relative block h-[60vh] lg:h-[calc(100vh-4rem)] bg-white"
            aria-label={p.title[locale]}
          >
            <Image
              src={p.cover.src}
              alt={p.cover.alt}
              fill
              className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority={i === 0}
            />

            {/* Project label on hover */}
            <div className="absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-light">{p.title[locale]}</p>
              <p className="text-white/60 text-xs font-light mt-0.5">{p.years}</p>
            </div>

            {/* Scroll hint — only on first image */}
            {i === 0 && <ScrollHint />}
          </Link>
        ))}
      </div>

    </main>
  );
}
