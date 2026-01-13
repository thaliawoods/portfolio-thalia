import Link from "next/link";
import Image from "next/image";
import { projects, Locale } from "@/data/projects";

export default async function HomePage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const intro =
    locale === "fr"
      ? {
          title: "Développeuse web — Front / Full-stack",
          desc: "Next.js · React · TypeScript · Strapi · Prisma",
        }
      : {
          title: "Web Developer — Front / Full-stack",
          desc: "Next.js · React · TypeScript · Strapi · Prisma",
        };

  const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-xl tracking-wide">{intro.title}</h1>
        <p className="mt-2 text-sm text-black/70 max-w-2xl">{intro.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ordered.map((p) => (
          <Link key={p.slug} href={`/${locale}/projects/${p.slug}`} className="group">
            <div className="border border-black/10">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-sm">{p.title[locale]}</div>
              <div className="text-xs text-black/60">{p.years}</div>
            </div>
            <div className="text-xs text-black/60 group-hover:text-black/80">
              {p.subtitle[locale]}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
