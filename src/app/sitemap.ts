import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/metadata";

const LOCALES = ["fr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/portfolio", "/cv", "/info", "/contact"];
  const projectPaths = projects.map((p) => `/projects/${p.slug}`);
  const allPaths = [...staticPaths, ...projectPaths];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of allPaths) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: {
            fr: `${SITE_URL}/fr${path}`,
            en: `${SITE_URL}/en${path}`,
          },
        },
      });
    }
  }

  return entries;
}
