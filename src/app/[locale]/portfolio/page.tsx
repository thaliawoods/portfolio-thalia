import { projects, type Locale } from "@/data/projects";
import PortfolioGrid from "@/components/PortfolioGrid";

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
