import type { ReactNode } from "react";
import type { Locale } from "@/data/projects";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale === "fr" || params.locale === "en"
    ? params.locale
    : "fr") as Locale;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
