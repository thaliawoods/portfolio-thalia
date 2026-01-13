import type { Locale } from "@/data/projects";

export default async function InfoPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale =
    params.locale === "fr" || params.locale === "en" ? params.locale : "fr";

  const t =
    locale === "fr"
      ? {
          title: "Infos",
          aboutTitle: "À PROPOS",
          about1:
            "Développeuse web (front-end / full-stack), diplômée RNCP niveau VI (Bac +3) — Conception et développement d’applications (Ada Tech School).",

          about2:
            "Après plusieurs années dans la restauration, la vente et le secteur social, j’ai eu envie de construire des outils numériques utiles, qui simplifient le quotidien. Ce qui me motive : transformer des besoins parfois flous en interfaces claires, esthétiques et fiables. J’accorde autant d’importance à l’UX/UI et aux détails visuels qu’à la rigueur technique (structure, qualité du code, cas limites).",

          about3:
            "Je viens de terminer mon alternance de développeuse front-end chez Julaya (fintech B2B en Afrique de l’Ouest), et je recherche, dans le cadre de mon Master, une nouvelle alternance de 24 mois (4 jours entreprise / 1 jour école).",

          eduTitle: "FORMATION",
          edu1a: "Ada Tech School — RNCP niveau VI (Bac +3)",
          edu1b: "Développement web & conception d’applications",
          edu1c: "2023–2026",
          edu2a: "Aix-Marseille University — DAEU A (Mention Très Bien)",
          edu2b: "Diplôme d'accès aux études universitaires",
          edu2c: "2020",
          edu3a: "Atelier de Sèvres — Foundation course (Art & Fashion)",
          edu3c: "2016",
          skillsTitle: "COMPÉTENCES",
          front: "FRONTEND",
          back: "BACKEND",
          other: "AUTRES",
          tools: "OUTILS",
          contactTitle: "CONTACT",
          location: "Paris, France",
          email: "thaliadwoods@gmail.com",
          github: "GitHub",
          linkedin: "LinkedIn",
        }
      : {
          title: "Info",
          aboutTitle: "ABOUT",
          about1:
            "Web developer (front-end / full-stack), RNCP Level VI graduate (Bachelor-equivalent) — Application design & development (Ada Tech School).",
          about2:
            "After several years working in hospitality, retail, and the social sector, I wanted to build useful digital tools that genuinely make everyday life easier. What drives me: turning sometimes fuzzy needs into clear, aesthetic, and reliable interfaces. I care as much about UX/UI and visual details as I do about technical rigor (structure, code quality, edge cases).",
          about3:
            "I’ve just completed my front-end developer apprenticeship at Julaya (a B2B fintech in West Africa), and I’m now looking for a new 24-month apprenticeship as part of my Master’s program (4 days in a company / 1 day at school).",
          // ...
          contactTitle: "CONTACT",
          location: "Paris, France",
          email: "thaliadwoods@gmail.com",
          github: "GitHub",
          linkedin: "LinkedIn",
        };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">{t.title}</h1>

      <div className="space-y-10 text-sm">
        <section>
          <div className="text-xs text-black/50 mb-2">{t.aboutTitle}</div>
          <p className="max-w-2xl leading-relaxed text-black/70">{t.about1}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-black/70">
            {t.about2}
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-black/70">
            {t.about3}
          </p>
        </section>

        <section>
          <div className="text-xs text-black/50 mb-2">{t.eduTitle}</div>
          <ul className="space-y-3 text-black/80">
            <li>
              <div className="flex justify-between gap-6">
                <span>{t.edu1a}</span>
                <span className="text-black/50">{t.edu1c}</span>
              </div>
              <div className="text-black/60">{t.edu1b}</div>
            </li>

            <li>
              <div className="flex justify-between gap-6">
                <span>{t.edu2a}</span>
                <span className="text-black/50">{t.edu2c}</span>
              </div>
              <div className="text-black/60">{t.edu2b}</div>
            </li>

            <li>
              <div className="flex justify-between gap-6">
                <span>{t.edu3a}</span>
                <span className="text-black/50">{t.edu3c}</span>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <div className="text-xs text-black/50 mb-2">{t.skillsTitle}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black/70">
            <div>
              <div className="text-black/50 text-xs mb-2">{t.front}</div>
              <div>
                JavaScript · TypeScript · React · Next.js · Tailwind · UX/UI
              </div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.back}</div>
              <div>Node.js · Express · Prisma · PostgreSQL · Python · PHP </div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.other}</div>
              <div>Agile · Accessibilité · Performances</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.tools}</div>
              <div>
                Docker · Git / GitHub · Vercel · Render · Figma · Neon · Postman
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-xs text-black/50 mb-2">{t.contactTitle}</div>
          <div className="text-black/70">{t.location}</div>

          <div className="mt-2 flex flex-wrap gap-4 underline">
            <a href={`mailto:${t.email}`}>{t.email}</a>

            <a
              href="https://github.com/thaliawoods"
              target="_blank"
              rel="noreferrer"
            >
              {t.github}
            </a>

            <a
              href="https://www.linkedin.com/in/thalia-woods-794917281/"
              target="_blank"
              rel="noreferrer"
            >
              {t.linkedin}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
