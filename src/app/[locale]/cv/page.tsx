import type { Locale } from "@/data/projects";
import CvClient from "./CvClient";

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
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6">
        <h1 className="text-xl tracking-wide">{t.title}</h1>
        <p className="mt-2 text-sm text-black/60">{t.subtitle}</p>
      </div>

      <CvClient locale={locale} />
    </main>
  );
}
