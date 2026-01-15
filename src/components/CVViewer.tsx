"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/data/projects";
import { Document, Page, pdfjs } from "react-pdf";
import { useContainerWidth } from "@/components/useContainerWidth";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = { locale: Locale };

export default function CVViewer({ locale }: Props) {
  const defaultLang = locale === "fr" ? "fr" : "en";
  const [lang, setLang] = useState<"fr" | "en">(defaultLang);

  // zoom “user” (1 = normal). On multiplie ensuite par l’échelle responsive.
  const [zoom, setZoom] = useState(1);

  const file = useMemo(
    () => (lang === "fr" ? "/cv/cv-woods-fr.pdf" : "/cv/cv-woods-en.pdf"),
    [lang]
  );

  const t =
    locale === "fr"
      ? { open: "ouvrir", download: "télécharger" }
      : { open: "open", download: "download" };

  // largeur du conteneur (responsive)
  const { ref, width } = useContainerWidth<HTMLDivElement>();

  // width cible max (desktop) : 900px ; sur mobile : largeur container
  // (on enlève un peu pour éviter que ça “colle” aux bords)
  const targetWidth = Math.min(900, Math.max(320, width - 2));

  return (
    <section className="space-y-4">
      {/* BARRE TOP responsive */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* switch FR/EN */}
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

        {/* zoom + liens */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="flex items-center gap-2 text-xs text-black/70">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.75, +(z - 0.1).toFixed(2)))}
              className="border border-black/15 px-2 py-1 hover:bg-black hover:text-white transition"
              aria-label="zoom out"
            >
              −
            </button>
            <span className="min-w-[52px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(2, +(z + 0.1).toFixed(2)))}
              className="border border-black/15 px-2 py-1 hover:bg-black hover:text-white transition"
              aria-label="zoom in"
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

      {/* WRAPPER BLANC responsive */}
      <div className="border border-black/10 bg-white p-3 sm:p-6">
        {/* conteneur mesuré */}
        <div ref={ref} className="w-full">
          <div className="mx-auto" style={{ width: targetWidth || "100%" }}>
            <Document
              file={file}
              loading={<div className="text-sm text-black/60">loading…</div>}
            >
              <Page
                pageNumber={1}
                // ✅ responsive : on donne width, et on applique le zoom via scale
                width={targetWidth || undefined}
                scale={zoom}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      </div>
    </section>
  );
}
