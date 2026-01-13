import Link from "next/link";
import { projects } from "@/data/projects";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm tracking-wide">
          Thalia Woods
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <details className="relative">
            <summary className="cursor-pointer list-none select-none hover:underline">
              Projects
            </summary>
            <div className="absolute right-0 mt-2 w-80 border border-black/10 bg-white shadow-sm p-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="block px-2 py-2 hover:bg-black/5"
                >
                  <div className="text-sm">{p.title}</div>
                  <div className="text-xs text-black/60 line-clamp-2">
                    {p.subtitle}
                  </div>
                </Link>
              ))}
            </div>
          </details>

          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/info" className="hover:underline">
            Info
          </Link>
        </nav>
      </div>
    </header>
  );
}
