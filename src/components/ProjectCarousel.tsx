"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string; poster?: string };

export default function ProjectCarousel({ items }: { items: Media[] }) {
  const slides = useMemo(() => items.filter(Boolean), [items]);
  const [i, setI] = useState(0);
  const max = slides.length;

  const prev = () => setI((v) => (v - 1 + max) % max);
  const next = () => setI((v) => (v + 1) % max);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [max]);

  // ✅ force la vitesse 1.5x quand on est sur une slide vidéo
  useEffect(() => {
    const current = slides[i];
    if (current?.kind === "video" && videoRef.current) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.defaultPlaybackRate = 1.5;
    }
  }, [i, slides]);

  if (max === 0) return null;

  const current = slides[i];

  return (
    <div className="w-full">
      <div className="relative w-full border border-black/10 bg-white overflow-hidden">
        <div className="relative w-full aspect-[16/10]">
          {current.kind === "image" ? (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
              poster={current.poster}
              muted
            >
              <source src={current.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {max > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center
                         border border-black/10 bg-white/90 hover:bg-white text-black shadow-sm"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next"
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

      {max > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {slides.map((m, idx) => (
            <button
              key={`${m.kind}-${m.src}-${idx}`}
              type="button"
              onClick={() => setI(idx)}
              className={`relative shrink-0 border ${
                idx === i ? "border-black/40" : "border-black/10"
              } bg-white`}
              aria-label={`Go to item ${idx + 1}`}
            >
              <div className="relative h-[64px] w-[96px] overflow-hidden">
                {m.kind === "image" ? (
                  <Image src={m.src} alt={m.alt} fill className="object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-[10px] tracking-widest text-black/60">
                    VIDEO
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
