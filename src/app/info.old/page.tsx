export default function InfoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">Info</h1>

      <div className="space-y-10 text-sm">
        {/* ABOUT */}
        <section>
          <div className="text-xs text-black/50 mb-2">ABOUT</div>
          <p className="max-w-2xl leading-relaxed text-black/70">
            Développeuse web (Front / Full-stack), diplômée RNCP niveau VI — Conceptrice
            Développeuse d’Applications (Ada Tech School). Après une reconversion et une
            alternance chez Julaya (fintech B2B), je conçois des interfaces claires et
            performantes, et j’aime relier produit + technique (Next.js/React/TS, Strapi,
            Node/Express, Prisma/PostgreSQL).
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-black/70">
            Je recherche une alternance (Master / RNCP niveau VII) à partir de 2026, sur des
            sujets front-end ou full-stack : produits, CMS, design systems, performance et UX.
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <div className="text-xs text-black/50 mb-2">EDUCATION</div>
          <ul className="space-y-3 text-black/80">
            <li>
              <div className="flex justify-between gap-6">
                <span> Ada Tech School — RNCP niveau VI (Bac+3)</span>
                <span className="text-black/50">2023–2026</span>
              </div>
              <div className="text-black/60">
                Développement web & conception d’applications
              </div>
            </li>

            <li>
              <div className="flex justify-between gap-6">
                <span> Aix-Marseille University — DAEU A (Mention Très Bien)</span>
                <span className="text-black/50">2020</span>
              </div>
              <div className="text-black/60">Accès aux études universitaires</div>
            </li>

            <li>
              <div className="flex justify-between gap-6">
                <span> Atelier de Sèvres — Foundation course (Art & Fashion)</span>
                <span className="text-black/50">2016</span>
              </div>
            </li>
          </ul>
        </section>

        {/* SKILLS */}
        <section>
          <div className="text-xs text-black/50 mb-2">SKILLS</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black/70">
            <div>
              <div className="text-black/50 text-xs mb-2">FRONTEND</div>
              <div>Next.js · React · TypeScript · Tailwind · UI/UX · Accessibilité · Performance</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">BACKEND</div>
              <div>Node.js · Express · Prisma · PostgreSQL · REST APIs · Auth · Docker</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">CMS / CONTENT</div>
              <div>Strapi (Headless) · Modélisation contenu · i18n · SEO</div>
            </div>

            <div>
              <div className="text-black/50 text-xs mb-2">TOOLING</div>
              <div>Git/GitHub · CI/CD · Vercel · Render · Figma · Agile</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <div className="text-xs text-black/50 mb-2">CONTACT</div>
          <div className="text-black/70">Paris, France</div>
          <div className="mt-2 flex gap-4 underline">
            <a href="https://github.com/thaliawoods" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {/* ajoute ton email si tu veux */}
            <a href="mailto:thaliadwoods@gmail.com">Email</a>
          </div>
        </section>
      </div>
    </main>
  );
}
