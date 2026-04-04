import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, type Locale, type ProjectMedia } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import FadeIn from "@/components/FadeIn";

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

  const media: ProjectMedia[] = [
    project.cover,
    ...(project.gallery ?? []),
  ].filter(Boolean) as ProjectMedia[];

  const t =
    locale === "fr"
      ? {
          back: "← Portfolio",
          role: "Rôle",
          stack: "Stack",
          links: "Liens",
        }
      : {
          back: "← Portfolio",
          role: "Role",
          stack: "Stack",
          links: "Links",
        };

  const first = media[0];

  return (
    <main className="mx-auto max-w-7xl px-8 py-6">
      <FadeIn>
        <Link
          href={`/${locale}/portfolio`}
          className="text-xs tracking-wide text-black/40 hover:text-black transition-colors duration-200 uppercase"
        >
          {t.back}
        </Link>
      </FadeIn>

      <FadeIn delay={60}>
        <div className="mt-6 mb-2">
          <p className="text-xs tracking-widest text-black/40 uppercase mb-2">
            {project.years}
          </p>
          <h1 className="text-5xl font-light leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-xl italic font-light text-black/50">
            {subtitle}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
        <div className="lg:col-span-4 lg:pt-6">
          <FadeIn delay={120}>
            <div className="space-y-5 mb-8">
              <div>
                <p className="text-xs tracking-widest text-black/30 uppercase mb-1">{t.role}</p>
                <p className="text-base font-light text-black/70">{project.roles.join(" · ")}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-black/30 uppercase mb-1">{t.stack}</p>
                <p className="text-base font-light text-black/70">{project.stack.join(" · ")}</p>
              </div>
              {project.links.length > 0 && (
                <div>
                  <p className="text-xs tracking-widest text-black/30 uppercase mb-1">{t.links}</p>
                  <ul className="flex gap-4">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeIn>

          {content && (
            <FadeIn delay={180}>
              <p className="text-base font-light leading-relaxed text-black/60">
                {content}
              </p>
            </FadeIn>
          )}
        </div>

        <section className={content ? "lg:col-span-8" : "lg:col-span-12"}>
          <FadeIn delay={180}>
            {media.length <= 1 ? (
              <div className="w-full overflow-hidden bg-white">
                <div className="relative w-full aspect-[16/10]">
                  {first?.kind === "video" ? (
                    <video
                      className="h-full w-full object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      poster={first.poster}
                      muted
                    >
                      <source src={first.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={(first ?? project.cover).src}
                      alt={(first ?? project.cover).alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 900px"
                      priority
                    />
                  )}
                </div>
              </div>
            ) : (
              <ProjectCarousel items={media} />
            )}
          </FadeIn>
        </section>
      </div>
    </main>
  );
}
