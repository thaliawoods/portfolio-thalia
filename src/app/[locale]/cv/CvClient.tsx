"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/data/projects";

const CVViewer = dynamic(() => import("@/components/CVViewer"), {
  ssr: false,
  loading: () => (
    <div className="border border-black/10 bg-white p-6 text-sm text-black/60">
      loading…
    </div>
  ),
});

export default function CvClient({ locale }: { locale: Locale }) {
  return <CVViewer locale={locale} />;
}
