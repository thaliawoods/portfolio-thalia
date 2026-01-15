import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, type Locale } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

type Params = { locale: Locale; slug: string };

export default async function ProjectPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { locale, slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const title = project.title[locale];
  const subtitle = project.subtitle[locale];
  const content = project.content?.[locale];

  const images = [project.cover, ...(project.gallery ?? [])].filter(Boolean);

  const t =
    locale === "fr"
      ? {
          back: "← Retour au portfolio",
          role: "RÔLE",
          stack: "STACK",
          links: "LIENS",
        }
      : {
          back: "← Back to portfolio",
          role: "ROLE",
          stack: "STACK",
          links: "LINKS",
        };

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 flex items-center justify-between">
        <Link
          href={`/${locale}/portfolio`}
          className="text-xs tracking-widest text-black/60 hover:text-black underline underline-offset-4"
        >
          {t.back}
        </Link>

        <div className="text-xs tracking-widest text-black/40">
          1/{Math.max(1, images.length)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4">
          <div className="text-xs tracking-widest text-black/50 mb-3">
            {project.years}
          </div>

          <h1 className="text-lg tracking-widest uppercase">{title}</h1>

          <p className="mt-4 text-sm leading-relaxed text-black/70">
            {subtitle}
          </p>

          {content && (
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              {content}
            </p>
          )}

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <div className="text-xs tracking-widest text-black/40 mb-2">
                {t.role}
              </div>
              <ul className="space-y-1 text-black/70">
                {project.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-widest text-black/40 mb-2">
                {t.stack}
              </div>
              <ul className="space-y-1 text-black/70">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-widest text-black/40 mb-2">
                {t.links}
              </div>
              <ul className="space-y-1 text-black/70">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-black"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8">
          {images.length <= 1 ? (
            <div className="border border-black/10 bg-white overflow-hidden">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={(images[0] ?? project.cover).src}
                  alt={(images[0] ?? project.cover).alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>
            </div>
          ) : (
            <ProjectCarousel images={images} />
          )}
        </section>
      </div>
    </main>
  );
}
