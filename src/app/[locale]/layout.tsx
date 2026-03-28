import type { ReactNode } from "react";
import type { Locale } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <div className="flex-1">
        {children}
      </div>
      <Footer locale={locale} />
    </div>
  );
}
