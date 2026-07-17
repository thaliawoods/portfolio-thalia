import type { Metadata } from "next";
import type { Locale } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import CvClient from "./CvClient";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const fr = locale === "fr";
  return buildMetadata({
    locale,
    path: "/cv",
    title: "CV",
    description: fr
      ? "Le parcours, les compétences et l'expérience de Thalia Woods, développeuse web & creative tech. Versions française et anglaise."
      : "Background, skills and experience of Thalia Woods, web developer & creative technologist. French and English versions.",
  });
}

export default async function CvPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          title: "Curriculum vitae",
          subtitle: "Versions française et anglaise disponibles.",
        }
      : {
          title: "Curriculum vitae",
          subtitle: "French and English versions available.",
        };

  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <FadeIn>
        <div className="mb-10">
          <h1 className="text-4xl font-light">{t.title}</h1>
          <p className="mt-3 text-sm font-light text-black/50">{t.subtitle}</p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <CvClient locale={locale} />
      </FadeIn>
    </main>
  );
}
