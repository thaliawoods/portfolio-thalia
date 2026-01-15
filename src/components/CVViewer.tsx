"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/data/projects";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ IMPORTANT : worker de la MÊME version que l'API pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = { locale: Locale };

export default function CVViewer({ locale }: Props) {
  const defaultLang = locale === "fr" ? "fr" : "en";
  const [lang, setLang] = useState<"fr" | "en">(defaultLang);
  const [scale, setScale] = useState(1);

  const file = useMemo(() => (lang === "fr" ? "/cv/cv-woods-fr.pdf" : "/cv/cv-woods-en.pdf"), [lang]);

  const t =
    locale === "fr"
      ? { open: "ouvrir", download: "télécharger" }
      : { open: "open", download: "download" };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLang("fr")}
            className={`border px-3 py-1.5 text-xs tracking-widest transition ${
              lang === "fr"
                ? "border-black bg-black text-white"
                : "border-black/15 bg-white text-black/70 hover:text-black"
            }`}
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`border px-3 py-1.5 text-xs tracking-widest transition ${
              lang === "en"
                ? "border-black bg-black text-white"
                : "border-black/15 bg-white text-black/70 hover:text-black"
            }`}
          >
            EN
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-black/70">
            <button
              type="button"
              onClick={() => setScale((s) => Math.max(0.75, +(s - 0.1).toFixed(2)))}
              className="border border-black/15 px-2 py-1 hover:bg-black hover:text-white transition"
            >
              −
            </button>
            <span className="min-w-[52px] text-center">{Math.round(scale * 100)}%</span>
            <button
              type="button"
              onClick={() => setScale((s) => Math.min(2, +(s + 0.1).toFixed(2)))}
              className="border border-black/15 px-2 py-1 hover:bg-black hover:text-white transition"
            >
              +
            </button>
          </div>

          <div className="flex gap-5 text-xs underline underline-offset-4 text-black/60">
            <a href={file} target="_blank" rel="noreferrer" className="hover:text-black">
              {t.open}
            </a>
            <a href={file} download className="hover:text-black">
              {t.download}
            </a>
          </div>
        </div>
      </div>

      <div className="border border-black/10 bg-white p-4 sm:p-6">
        <div className="mx-auto w-full max-w-[900px]">
          <Document file={file} loading={<div className="text-sm text-black/60">loading…</div>}>
            <Page
              pageNumber={1}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </section>
  );
}
