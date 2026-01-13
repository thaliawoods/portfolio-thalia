import { projects, Locale } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = { locale: Locale; slug: string };

export default async function ProjectPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { locale, slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-10">
        <div className="text-sm text-black/60">{project.years}</div>
        <h1 className="text-2xl tracking-wide">{project.title[locale]}</h1>
        <p className="mt-2 text-sm text-black/70 max-w-2xl">
          {project.subtitle[locale]}
        </p>

        {project.content?.[locale] && (
          <p className="mt-4 text-sm leading-relaxed max-w-2xl">
            {project.content[locale]}
          </p>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-xs text-black/50 mb-2">ROLE</div>
            <ul className="space-y-1">{project.roles.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          <div>
            <div className="text-xs text-black/50 mb-2">STACK</div>
            <ul className="space-y-1">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <div className="text-xs text-black/50 mb-2">LINKS</div>
            <ul className="space-y-1">
              {project.links.map((l) => (
                <li key={l.href}>
                  <Link className="underline" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {project.gallery.map((img) => (
          <div key={img.src} className="border border-black/10">
            <Image src={img.src} alt={img.alt} width={1600} height={1100} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
