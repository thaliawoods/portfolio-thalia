import type { Locale } from "@/data/projects";
import CvClient from "./CvClient";
import FadeIn from "@/components/FadeIn";

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
