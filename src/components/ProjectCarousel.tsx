"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Hls from "hls.js";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string; poster?: string };

export default function ProjectCarousel({
  items,
  locale,
}: {
  items: Media[];
  locale: "fr" | "en";
}) {
  const slides = useMemo(() => items.filter(Boolean), [items]);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const max = slides.length;

  const t =
    locale === "fr"
      ? { play: "Lire la vidéo", prev: "Précédent", next: "Suivant", goto: "Aller à l'élément" }
      : { play: "Play video", prev: "Previous", next: "Next", goto: "Go to item" };

  const prev = () => { setPlaying(false); setI((v) => (v - 1 + max) % max); };
  const next = () => { setPlaying(false); setI((v) => (v + 1) % max); };

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [max]);

  // La lecture est réinitialisée dans les handlers de navigation (prev/next/vignettes) ;
  // le nettoyage HLS est géré par le cleanup de l'effet de lecture ci-dessous.

  useEffect(() => {
    if (!playing || !videoRef.current) return;
    const video = videoRef.current;
    const current = slides[i];
    if (current.kind !== "video") return;

    const isHls = current.src.endsWith(".m3u8");

    if (isHls && Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(current.src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.playbackRate = 1.5;
        video.play();
      });
    } else {
      // Safari handles HLS natively, or it's a direct mp4
      video.src = current.src;
      video.playbackRate = 1.5;
      video.play();
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [playing, i, slides]);

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
              quality={88}
              priority
            />
          ) : !playing ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="relative h-full w-full cursor-pointer bg-black"
              aria-label={t.play}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.poster || current.src}
                alt={current.alt}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <svg viewBox="0 0 24 24" fill="black" className="h-7 w-7 ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              controls
              playsInline
              muted
            />
          )}
        </div>

        {max > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label={t.prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center
                         border border-black/10 bg-white/90 hover:bg-white text-black shadow-sm"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={t.next}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center
                         border border-black/10 bg-white/90 hover:bg-white text-black shadow-sm"
            >
              →
            </button>

            <div className="absolute right-2 top-2 text-[10px] tracking-widest text-[#6b6b6b] bg-white/90 px-2 py-1 border border-black/10">
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
              onClick={() => { setPlaying(false); setI(idx); }}
              className={`relative shrink-0 border ${
                idx === i ? "border-black/40" : "border-black/10"
              } bg-white`}
              aria-label={`${t.goto} ${idx + 1}`}
            >
              <div className="relative h-[64px] w-[96px] overflow-hidden">
                {m.kind === "image" ? (
                  <Image src={m.src} alt={m.alt} fill className="object-cover" />
                ) : (
                  <div className="relative h-full w-full">
                    {m.poster && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.poster} alt={m.alt} className="h-full w-full object-cover" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90">
                        <svg viewBox="0 0 24 24" fill="black" className="h-3 w-3 ml-0.5">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
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
