import type { Locale } from "@/data/projects";

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const t =
    locale === "fr"
      ? {
          title: "Contact",
          contactTitle: "CONTACT",
          location: "Paris, France",
          email: "thaliawoods@proton.me", // change si besoin
          phone: "", // mets ton numéro si tu veux, sinon laisse vide
          linksTitle: "LIENS",
          github: "GitHub",
          linkedin: "LinkedIn",
          githubUrl: "https://github.com/thaliawoods",
          linkedinUrl: "https://www.linkedin.com/", // change si besoin
        }
      : {
          title: "Contact",
          contactTitle: "CONTACT",
          location: "Paris, France",
          email: "thaliawoods@proton.me",
          phone: "",
          linksTitle: "LINKS",
          github: "GitHub",
          linkedin: "LinkedIn",
          githubUrl: "https://github.com/thaliawoods",
          linkedinUrl: "https://www.linkedin.com/",
        };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-8">{t.title}</h1>

      <div className="space-y-12 text-sm">
        <section>
          <div className="text-xs tracking-widest text-black/50 mb-3">
            {t.contactTitle}
          </div>

          <div className="space-y-2 text-black/70">
            <div>{t.location}</div>

            <div>
              <a
                className="underline underline-offset-4 hover:text-black"
                href={`mailto:${t.email}`}
              >
                {t.email}
              </a>
            </div>

            {t.phone ? <div>{t.phone}</div> : null}

            <div className="pt-4">
              <div className="text-xs tracking-widest text-black/50 mb-2">
                {t.linksTitle}
              </div>
              <div className="flex gap-4 underline underline-offset-4">
                <a
                  href={t.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  {t.github}
                </a>
                <a
                  href={t.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  {t.linkedin}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
