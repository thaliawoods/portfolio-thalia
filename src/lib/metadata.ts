import type { Metadata } from "next";
import type { Locale } from "@/data/projects";

export const SITE_URL = "https://thalia-woods.vercel.app";
export const SITE_NAME = "Thalia Woods";

type BuildArgs = {
  locale: Locale;
  /** Path after the locale segment, e.g. "" for home, "/portfolio", "/projects/https". */
  path: string;
  title: string;
  description: string;
  /** When true, the title is used as-is (no "— Thalia Woods" suffix). */
  absoluteTitle?: boolean;
  images?: { url: string; alt?: string }[];
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle,
  images,
}: BuildArgs): Metadata {
  const displayTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`;
  const canonical = `/${locale}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `/fr${path}`,
        en: `/en${path}`,
        "x-default": `/fr${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: canonical,
      title: displayTitle,
      description,
      // Only set images when provided, so pages without a cover fall back to
      // the file-based opengraph-image default.
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
