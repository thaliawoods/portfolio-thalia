import type { Locale } from "@/data/projects";

export default async function SkillsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale =
    params.locale === "fr" || params.locale === "en" ? params.locale : "fr";

  const t =
    locale === "fr"
      ? {
          title: "Compétences",
          skillsTitle: "COMPÉTENCES",
          front: "FRONTEND",
          back: "BACKEND",
          cms: "CMS / CONTENT",
          tools: "OUTILS",
          frontText:
            "Next.js · React · TypeScript · Tailwind · UI/UX · Accessibilité · Performance",
          backText: "Node.js · Express · Prisma · PostgreSQL · REST APIs · Auth · Docker",
          cmsText: "Strapi (Headless) · Modélisation contenu · i18n · SEO",
          toolsText: "Git/GitHub · CI/CD · Vercel · Render · Figma · Agile",
        }
      : {
          title: "Skills",
          skillsTitle: "SKILLS",
          front: "FRONTEND",
          back: "BACKEND",
          cms: "CMS / CONTENT",
          tools: "TOOLING",
          frontText:
            "Next.js · React · TypeScript · Tailwind · UI/UX · Accessibility · Performance",
          backText: "Node.js · Express · Prisma · PostgreSQL · REST APIs · Auth · Docker",
          cmsText: "Strapi (Headless) · Content modeling · i18n · SEO",
          toolsText: "Git/GitHub · CI/CD · Vercel · Render · Figma · Agile",
        };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">{t.title}</h1>

      <div className="space-y-10 text-sm">
        <section>
          <div className="text-xs text-black/50 mb-2">{t.skillsTitle}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black/70">
            <div>
              <div className="text-black/50 text-xs mb-2">{t.front}</div>
              <div>{t.frontText}</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.back}</div>
              <div>{t.backText}</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.cms}</div>
              <div>{t.cmsText}</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">{t.tools}</div>
              <div>{t.toolsText}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
