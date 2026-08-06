import Link from "next/link";
import type { Metadata } from "next";
import { projects, type Locale } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import FadeIn from "@/components/FadeIn";
import RandomProjectGrid from "@/components/RandomProjectGrid";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const fr = locale === "fr";
  return buildMetadata({
    locale,
    path: "",
    absoluteTitle: true,
    title: fr
      ? "Thalia Woods | Développeuse Web & Creative Tech"
      : "Thalia Woods | Web Developer & Creative Tech",
    description: fr
      ? "Portfolio de Thalia Woods. Je conçois et développe des interfaces où se rencontrent code, interaction, narration et direction visuelle."
      : "Portfolio of Thalia Woods. I design and build interfaces where code, interaction, narrative, and visual direction meet.",
  });
}

export default async function HomePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          role: "Développeuse Web & Creative Tech",
          blurb:
            "Je conçois et développe des interfaces où se rencontrent\ncode, interaction, narration et direction visuelle.",
          cta: "Portfolio",
          cta2: "Contact",
        }
      : {
          role: "Web Developer & Creative Tech",
          blurb:
            "I design and build interfaces where code, interaction, narrative, and visual direction meet.",
          cta: "Portfolio",
          cta2: "Contact",
        };

  const featured = [...projects].filter((p) => p.featured).map((p) => ({
    slug: p.slug,
    title: p.title[locale],
    years: p.years,
    cover: p.cover,
    gallery: p.gallery.filter(
      (m) => m.kind === "image" && !m.src.includes("midi-controller")
    ),
  }));

  return (
    <main className="flex flex-col lg:grid lg:grid-cols-[42%_58%]">

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
          <p className="mt-8 text-sm font-light leading-relaxed text-black/60 max-w-sm whitespace-pre-line">
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

      <RandomProjectGrid projects={featured} locale={locale} />

    </main>
  );
}
