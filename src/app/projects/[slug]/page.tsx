import { projects } from "@/data/projects";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-10">
        <div className="text-sm text-black/60">{project.years}</div>
        <h1 className="text-2xl tracking-wide">{project.title}</h1>
        <p className="mt-2 text-sm text-black/70 max-w-2xl">{project.subtitle}</p>

        {project.content && (
          <p className="mt-4 text-sm leading-relaxed max-w-2xl">
            {project.content}
          </p>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-xs text-black/50 mb-2">ROLE</div>
            <ul className="space-y-1">
              {project.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-black/50 mb-2">STACK</div>
            <ul className="space-y-1">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-black/50 mb-2">LINKS</div>
            <ul className="space-y-1">
              {project.links.map((l) => (
                <li key={l.href}>
                  <Link className="underline" href={l.href} target="_blank">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Gallery items={project.gallery} />
    </main>
  );
}
