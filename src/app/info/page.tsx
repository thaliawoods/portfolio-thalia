export default function InfoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">Info</h1>

      <div className="space-y-10 text-sm">
        <section>
          <div className="text-xs text-black/50 mb-2">CONTACT</div>
          <div>Paris, France</div>
          <div>thaliawoods@…</div>
          <div className="mt-2 flex gap-4 underline">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/thaliawoods" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section>
          <div className="text-xs text-black/50 mb-2">ABOUT</div>
          <p className="max-w-2xl leading-relaxed text-black/70">
            Développeuse web (Next.js/React/TypeScript). J’aime les interfaces nettes,
            les systèmes simples, et les produits où la technique sert un vrai usage.
          </p>
        </section>
      </div>
    </main>
  );
}
