import type { Metadata } from "next";
import type { Locale } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
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
    path: "/info",
    title: fr ? "Infos" : "Info",
    description: fr
      ? "Développeuse web & creative tech. Mon travail se situe à la croisée de la technique et de la direction artistique - parcours, compétences et formation."
      : "Web developer & creative technologist. My work sits at the intersection of technical development and art direction - background, skills and education.",
  });
}

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

aboutTitle: "À propos",
about1:
  "Développeuse Web & Creative Tech.",
about2:
  "Mon travail se situe à la croisée de la technique et de la direction artistique : je conçois des interfaces claires, sensibles et robustes, en portant autant d’attention à la structure des données et à la maintenabilité qu’à l’UX/UI, aux interactions et aux détails visuels.",
about3:
  "Actuellement en alternance à la DICOM (Ministère de l’Intérieur) pendant mon Master à Gobelins, après une alternance front-end chez Julaya (fintech B2B) et un stage chez Détours en Cinécourt.",
          eduTitle: "Formation",
          edu: [
            {
              institution: "Gobelins Paris",
              degree: "Titre RNCP niveau 7 (Bac+5)\nExpert en création numérique interactive",
              year: "2026-2028",
            },
            {
              institution: "Three.js Journey",
              degree: "Formation en ligne\nThree.js, WebGL, shaders, 3D web",
              year: "2026",
            },
            {
              institution: "Ada Tech School",
              degree: "RNCP niveau VI (Bac+3)\nConception et développement d’applications",
              year: "2023-2026",
            },
            {
              institution: "Aix-Marseille University",
              degree: "DAEU A - Mention Très Bien",
              year: "2020-2021",
            },
            {
              institution: "Atelier de Sèvres",
              degree: "Prépa d’Art - Option Mode",
              year: "2016-2017",
            },
          ],

          skillsTitle: "Compétences",
          skills: [
            { label: "Front", value: "Next.js · React · TypeScript · Tailwind · Angular · HTML · CSS · iOS (SwiftUI)" },
            { label: "Back", value: "Node.js · Express · Strapi · Python · PHP" },
            { label: "Data / ORM", value: "PostgreSQL · Prisma · MongoDB · MySQL" },
            { label: "Creative coding", value: "Godot · Three.js · Canvas 2D · GLSL · MIDI · Web Audio API" },
            { label: "Outils", value: "Docker · Git · CI/CD (GitHub Actions) · Tests (Jest, Playwright) · LaTeX · Jira · Figma · Blender · Photoshop · InDesign · Illustrator" },
          ],

          contactTitle: "Contact",
          email: "thaliadwoods@gmail.com",
          github: "GitHub",
          linkedin: "LinkedIn",
          githubUrl: "https://github.com/thaliawoods",
          linkedinUrl: "https://www.linkedin.com/in/thalia-woods-794917281/",
        }
      : {
          title: "Info",

aboutTitle: "About",
about1:
  "Web Developer & Creative Tech.",
about2:
  "My work sits at the intersection of technical development and art direction: I design interfaces that are clear, thoughtful, and robust, with as much attention to data structure and maintainability as to UX/UI, interactions, and visual details.",
about3:
  "Currently on a work-study contract at DICOM (French Ministry of the Interior) alongside my Master’s at Gobelins, after a front-end apprenticeship at Julaya (B2B fintech) and an internship at Détours en Cinécourt.",
          eduTitle: "Education",
          edu: [
            {
              institution: "Gobelins Paris",
              degree: "RNCP Level 7 (Master’s)\nExpert en création numérique interactive",
              year: "2026-2028",
            },
            {
              institution: "Three.js Journey",
              degree: "Online course\nThree.js, WebGL, shaders, 3D web",
              year: "2026",
            },
            {
              institution: "Ada Tech School",
              degree: "RNCP Level VI (Bachelor)\nApplication design & development",
              year: "2023-2026",
            },
            {
              institution: "Aix-Marseille University",
              degree: "DAEU A - Highest Honors",
              year: "2020-2021",
            },
            {
              institution: "Atelier de Sèvres",
              degree: "Foundation course - Art & Fashion",
              year: "2016-2017",
            },
          ],

          skillsTitle: "Skills",
          skills: [
            { label: "Front", value: "Next.js · React · TypeScript · Tailwind · Angular · HTML · CSS · iOS (SwiftUI)" },
            { label: "Back", value: "Node.js · Express · Strapi · Python · PHP" },
            { label: "Data / ORM", value: "PostgreSQL · Prisma · MongoDB · MySQL" },
            { label: "Creative coding", value: "Godot · Three.js · Canvas 2D · GLSL · MIDI · Web Audio API" },
            { label: "Tools", value: "Docker · Git · CI/CD (GitHub Actions) · Testing (Jest, Playwright) · LaTeX · Jira · Figma · Blender · Photoshop · InDesign · Illustrator" },
          ],

          contactTitle: "Contact",
          email: "thaliadwoods@gmail.com",
          github: "GitHub",
          linkedin: "LinkedIn",
          githubUrl: "https://github.com/thaliawoods",
          linkedinUrl: "https://www.linkedin.com/in/thalia-woods-794917281/",
        };

  return (
    <main className="mx-auto max-w-5xl px-8 lg:px-14 py-20">
      {/* Row 1: About (left) + Contact (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-20">
        <FadeIn className="lg:col-span-8">
          <section>
            <p className="text-xs tracking-widest text-[#6b6b6b] uppercase mb-6">
              {t.aboutTitle}
            </p>

            <p className="text-2xl font-light leading-snug text-black/80 mb-6">
              {t.about1}
            </p>

            <p className="text-base font-light leading-relaxed text-[#424242] max-w-2xl mb-4">
              {t.about2}
            </p>

            <p className="text-base font-light leading-relaxed text-[#424242] max-w-2xl">
              {t.about3}
            </p>
          </section>
        </FadeIn>

        {/* Contact - top right, aligned with About */}
        <FadeIn delay={80} className="lg:col-span-4">
          <section>
            <p className="text-xs tracking-widest text-[#6b6b6b] uppercase mb-6">
              {t.contactTitle}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${t.email}`}
                className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
              >
                {t.email}
              </a>

              <a
                href={t.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
              >
                {t.github}
              </a>

              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
              >
                {t.linkedin}
              </a>
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Row 2: Skills (left) + Education (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 border-t border-black/10 pt-14">
        {/* Skills */}
        <FadeIn delay={120} className="lg:col-span-8">
          <section>
            <p className="text-xs tracking-widest text-[#6b6b6b] uppercase mb-6">
              {t.skillsTitle}
            </p>

            <div className="space-y-6">
              {t.skills.map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-light text-[#6b6b6b] mb-1">
                    {s.label}
                  </p>
                  <p className="text-base font-light leading-relaxed text-[#424242]">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={160} className="lg:col-span-4">
          <section>
            <p className="text-xs tracking-widest text-[#6b6b6b] uppercase mb-6">
              {t.eduTitle}
            </p>

            <ul className="space-y-6">
              {t.edu.map((e) => (
                <li key={e.institution}>
                  <p className="text-base font-light">{e.institution}</p>
                  <p className="text-sm font-light text-[#424242] mt-0.5 whitespace-pre-line">{e.degree}</p>
                  <p className="text-sm font-light text-[#6b6b6b] mt-0.5">{e.year}</p>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
