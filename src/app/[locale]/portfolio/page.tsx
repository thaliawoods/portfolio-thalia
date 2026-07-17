import type { Metadata } from "next";
import { projects, type Locale } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import PortfolioGrid from "@/components/PortfolioGrid";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const fr = locale === "fr";
  return buildMetadata({
    locale,
    path: "/portfolio",
    title: "Portfolio",
    description: fr
      ? "Sélection de projets de Thalia Woods : creative coding, web full-stack, design d'interface et collaborations artistiques."
      : "Selected projects by Thalia Woods: creative coding, full-stack web, interface design and artistic collaborations.",
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);

  const title = "Portfolio";
  const countLabel =
    locale === "fr" ? `${projects.length} projets` : `${projects.length} projects`;

  const ordered = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured)
  );

  return (
    <main>
      <PortfolioGrid
        projects={ordered}
        locale={locale}
        title={title}
        countLabel={countLabel}
      />
    </main>
  );
}
