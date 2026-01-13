import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-xl tracking-wide">Thalia Woods</h1>
        <p className="mt-2 text-sm text-black/70 max-w-2xl">
          Développeuse web (Front / Full-stack). Next.js · TypeScript · Strapi · Prisma.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
            <div className="border border-black/10">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={1400}
                height={900}
                className="w-full h-auto"
                priority={p.slug === projects[0]?.slug}
              />
            </div>

            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-sm">{p.title}</div>
              <div className="text-xs text-black/60">{p.years}</div>
            </div>
            <div className="text-xs text-black/60 group-hover:text-black/80">
              {p.subtitle}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
