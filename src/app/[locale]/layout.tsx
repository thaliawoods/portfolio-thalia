import "../globals.css";
import Header from "@/components/Header";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "fr" | "en" } | Promise<{ locale: "fr" | "en" }>;
}) {
  const { locale } = await Promise.resolve(params);

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}
