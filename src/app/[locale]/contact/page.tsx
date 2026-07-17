import type { Metadata } from "next";
import type { Locale } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const fr = locale === "fr";
  return buildMetadata({
    locale,
    path: "/contact",
    title: "Contact",
    description: fr
      ? "Contactez Thalia Woods pour une collaboration, une alternance ou simplement échanger."
      : "Get in touch with Thalia Woods for a collaboration, an apprenticeship, or just to chat.",
  });
}

export default function ContactPage() {
  return <ContactForm />;
}
