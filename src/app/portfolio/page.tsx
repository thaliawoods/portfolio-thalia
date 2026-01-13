import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const shots = projects.flatMap((p) =>
    p.gallery.map((img) => ({ ...img, slug: p.slug, title: p.title }))
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-xl tracking-wide mb-6">Portfolio</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shots.map((s) => (
          <Link key={s.src} href={`/projects/${s.slug}`} className="group">
            <div className="border border-black/10">
              <Image src={s.src} alt={s.alt} width={900} height={700} className="w-full h-auto" />
            </div>
            <div className="mt-1 text-xs text-black/60 group-hover:text-black/80">
              {s.title}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
