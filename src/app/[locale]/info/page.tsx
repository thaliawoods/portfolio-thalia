import type { Locale } from "@/data/projects";

export default async function InfoPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          title: "Infos",
          aboutTitle: "À PROPOS",
          about1:
            "Développeuse web (Front / Full-stack), diplômée RNCP niveau VI — Conceptrice Développeuse d’Applications (Ada Tech School). Après une reconversion et une alternance chez Julaya (fintech B2B), je conçois des interfaces claires et performantes, et j’aime relier produit + technique (Next.js/React/TS, Strapi, Node/Express, Prisma/PostgreSQL).",
          about2:
            "Je recherche une alternance (Master / RNCP niveau VII) à partir de 2026, sur des sujets front-end ou full-stack : produits, CMS, design systems, performance et UX.",
          eduTitle: "FORMATION",
          edu1a: "Ada Tech School — RNCP niveau VI (Bac+3)",
          edu1b: "Développement web & conception d’applications",
          edu1c: "2023–2026",
          edu2a: "Aix-Marseille University — DAEU A (Mention)",
          edu2b: "Accès aux études universitaires",
          edu2c: "2020",
          edu3a: "Atelier de Sèvres — Foundation course (Art & Fashion)",
          edu3c: "2016",
          skillsTitle: "COMPÉTENCES",
          front: "FRONTEND",
          back: "BACKEND",
          cms: "CMS / CONTENT",
          tools: "OUTILS",
          contactTitle: "CONTACT",
          location: "Paris, France",
          github: "GitHub",
          linkedin: "LinkedIn",
        }
      : {
          title: "Info",
          aboutTitle: "ABOUT",
          about1:
            "Web developer (Front / Full-stack), RNCP Level VI graduate (Ada Tech School). After a career change and an apprenticeship at Julaya (B2B fintech), I build clear, performant interfaces and enjoy bridging product + engineering (Next.js/React/TS, Strapi, Node/Express, Prisma/PostgreSQL).",
          about2:
            "I’m looking for a new apprenticeship (Master / RNCP Level VII) starting in 2026, in front-end or full-stack roles: product work, CMS, design systems, performance and UX.",
          eduTitle: "EDUCATION",
          edu1a: "Ada Tech School — RNCP Level VI (Bachelor-equivalent)",
          edu1b: "Web development & application design",
          edu1c: "2023–2026",
          edu2a: "Aix-Marseille University — DAEU A (Honors)",
          edu2b: "University access diploma",
          edu2c: "2020",
          edu3a: "Atelier de Sèvres — Foundation course (Art & Fashion)",
          edu3c: "2016",
          skillsTitle: "SKILLS",
          front: "FRONTEND",
          back: "BACKEND",
          cms: "CMS / CONTENT",
          tools: "TOOLING",
          contactTitle: "CONTACT",
          location: "Paris, France",
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
          <p className="mt-3 max-w-2xl leading-relaxed text-black/70">{t.about2}</p>
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
              <div>Next.js · React · TypeScript · Tailwind · UI/UX · Accessibility · Performance</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.back}</div>
              <div>Node.js · Express · Prisma · PostgreSQL · REST APIs · Auth · Docker</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.cms}</div>
              <div>Strapi (Headless) · Content modeling · i18n · SEO</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.tools}</div>
              <div>Git/GitHub · CI/CD · Vercel · Render · Figma · Agile</div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-xs text-black/50 mb-2">{t.contactTitle}</div>
          <div className="text-black/70">{t.location}</div>
          <div className="mt-2 flex gap-4 underline">
            <a href="https://github.com/thaliawoods" target="_blank" rel="noreferrer">
              {t.github}
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              {t.linkedin}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
