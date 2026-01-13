"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Img = { src: string; alt: string };

export default function ProjectCarousel({ images }: { images: Img[] }) {
  const items = useMemo(() => images.filter(Boolean), [images]);
  const [i, setI] = useState(0);
  const max = items.length;

  const prev = () => setI((v) => (v - 1 + max) % max);
  const next = () => setI((v) => (v + 1) % max);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max]);

  if (max === 0) return null;

  const current = items[i];

  return (
    <div className="w-full">
      {/* ✅ Cadre fixe + fond blanc */}
      <div className="relative w-full border border-black/10 bg-white overflow-hidden">
        {/* ratio fixe : change ici si tu veux (aspect-[16/10], aspect-[4/3], aspect-[3/2]) */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>

        {max > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center
                         border border-black/10 bg-white/90 hover:bg-white text-black shadow-sm"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center
                         border border-black/10 bg-white/90 hover:bg-white text-black shadow-sm"
            >
              →
            </button>

            <div className="absolute right-2 top-2 text-[10px] tracking-widest text-black/60 bg-white/90 px-2 py-1 border border-black/10">
              {i + 1}/{max}
            </div>
          </>
        )}
      </div>

      {/* Miniatures */}
      {max > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setI(idx)}
              className={`relative shrink-0 border ${
                idx === i ? "border-black/40" : "border-black/10"
              } bg-white`}
              aria-label={`Go to image ${idx + 1}`}
            >
              <div className="relative h-[64px] w-[96px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
