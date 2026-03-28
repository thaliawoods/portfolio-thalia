"use client";

import { useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import type { Locale } from "@/data/projects";

export default function ContactPage() {
  const { locale } = useParams<{ locale: Locale }>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const t =
    locale === "fr"
      ? {
          title: "Contact",
          name: "Nom",
          email: "E-mail",
          message: "Message",
          send: "Envoyer",
          sending: "Envoi en cours...",
          sent: "Message envoyé — merci !",
          error: "Une erreur est survenue. Réessayez ou écrivez directement à thaliadwoods@gmail.com.",
        }
      : {
          title: "Contact",
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send",
          sending: "Sending...",
          sent: "Message sent — thank you!",
          error: "Something went wrong. Try again or write directly to thaliadwoods@gmail.com.",
        };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdapeono", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-8 lg:px-14 py-20 min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-10">
        <FadeIn className="lg:col-span-8">
          <h1 className="text-5xl font-light mb-4">{t.title}</h1>
          <p className="text-sm font-light text-black/50">
            {locale === "fr"
              ? "Pour collaborer ou juste discuter — n'hésitez pas."
              : "Whether you'd like to collaborate or just chat — feel free to reach out."}
          </p>
        </FadeIn>

        {/* Contact links — right, aligned with title */}
        <FadeIn delay={60} className="lg:col-span-4">
          <div className="space-y-3">
            <a
              href="mailto:thaliadwoods@gmail.com"
              className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              thaliadwoods@gmail.com
            </a>
            <a
              href="https://github.com/thaliawoods"
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-light underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Form — left */}
        <FadeIn delay={120} className="lg:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest text-black/30 uppercase mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-b border-black/15 bg-transparent py-2 text-base font-light outline-none focus:border-black/40 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-widest text-black/30 uppercase mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-b border-black/15 bg-transparent py-2 text-base font-light outline-none focus:border-black/40 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs tracking-widest text-black/30 uppercase mb-2">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full border-b border-black/15 bg-transparent py-2 text-base font-light outline-none focus:border-black/40 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="text-sm font-light underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 disabled:opacity-30"
            >
              {status === "sending" ? t.sending : status === "sent" ? t.sent : t.send}
            </button>

            {status === "error" && (
              <p className="text-sm font-light text-red-600/70">{t.error}</p>
            )}
          </form>
        </FadeIn>

      </div>
    </main>
  );
}
