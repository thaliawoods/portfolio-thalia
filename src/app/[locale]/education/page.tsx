import type { Locale } from "@/data/projects";

export default async function EducationPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale =
    params.locale === "fr" || params.locale === "en" ? params.locale : "fr";

  const t =
    locale === "fr"
      ? {
          title: "Formation",
          items: [
            {
              a: "Ada Tech School — RNCP niveau VI (Bac+3)",
              b: "Développement web & conception d’applications",
              c: "2023–2026",
            },
            {
              a: "Aix-Marseille University — DAEU A (Mention)",
              b: "Accès aux études universitaires",
              c: "2020",
            },
            {
              a: "Atelier de Sèvres — Foundation course (Art & Fashion)",
              b: "",
              c: "2016",
            },
          ],
        }
      : {
          title: "Education",
          items: [
            {
              a: "Ada Tech School — RNCP Level VI (Bachelor-equivalent)",
              b: "Web development & application design",
              c: "2023–2026",
            },
            {
              a: "Aix-Marseille University — DAEU A (Honors)",
              b: "University access diploma",
              c: "2020",
            },
            {
              a: "Atelier de Sèvres — Foundation course (Art & Fashion)",
              b: "",
              c: "2016",
            },
          ],
        };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">{t.title}</h1>

      <ul className="space-y-4 text-sm">
        {t.items.map((it) => (
          <li key={it.a} className="border border-black/10 bg-white p-4">
            <div className="flex justify-between gap-6">
              <span className="text-black/80">{it.a}</span>
              <span className="text-black/50">{it.c}</span>
            </div>
            {it.b ? <div className="mt-1 text-black/60">{it.b}</div> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
