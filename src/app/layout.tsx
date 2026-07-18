import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL, SITE_NAME } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thalia Woods | Développeuse Web & Creative Tech",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Portfolio de Thalia Woods, développeuse web & creative technologist. Interfaces où se rencontrent code, interaction, narration et direction visuelle.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = (await headers()).get("x-locale") === "en" ? "en" : "fr";

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
