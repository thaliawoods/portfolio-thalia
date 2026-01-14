import type { ReactNode } from "react";
import type { Locale } from "@/data/projects";
import Header from "@/components/Header"; // adapte le chemin (Navbar, SiteHeader, etc.)

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  const locale: Locale =
    rawLocale === "fr" || rawLocale === "en" ? rawLocale : "fr";

  return (
    <>
      <Header locale={locale} />
      {children}
    </>
  );
}
