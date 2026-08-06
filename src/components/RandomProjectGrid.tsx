"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollHint from "./ScrollHint";

type ImageData = { src: string; alt: string };

export type ProjectData = {
  slug: string;
  title: string;
  years?: string;
  cover: ImageData;
  gallery: ImageData[];
};

function pickRandom(images: ImageData[]) {
  return images[Math.floor(Math.random() * images.length)];
}

function randomize(projects: ProjectData[]) {
  return projects.map((p) => pickRandom([p.cover, ...p.gallery]));
}

export default function RandomProjectGrid({
  projects,
  locale,
}: {
  projects: ProjectData[];
  locale: string;
}) {
  const [displayImages, setDisplayImages] = useState<ImageData[]>(() =>
    projects.map((p) => p.cover)
  );

  // Randomize only after mount so server and first client render match.
  useEffect(() => {
    setDisplayImages(randomize(projects));
  }, [projects]);

  const shuffle = useCallback(() => {
    setDisplayImages(randomize(projects));
  }, [projects]);

  const refreshLabel =
    locale === "fr" ? "Actualiser les images" : "Refresh images";

  return (
    <div className="relative flex lg:flex-col gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none no-scrollbar px-4 lg:pl-1 lg:pr-20 pb-20">
      <button
        onClick={shuffle}
        className="fixed bottom-6 right-6 z-50 text-2xl text-black/40 hover:text-black transition-colors duration-200"
        title={refreshLabel}
        aria-label={refreshLabel}
      >
        ↻
      </button>

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/${locale}/projects/${p.slug}`}
          className="group relative block flex-none w-[85vw] h-[60vh] lg:w-auto lg:h-[calc(100vh-4rem)] bg-white snap-start"
          aria-label={p.title}
        >
          <Image
            src={displayImages[i].src}
            alt={displayImages[i].alt}
            fill
            className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            sizes="(max-width: 1024px) 85vw, 58vw"
            priority={i === 0}
          />

          <div className="absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-light">{p.title}</p>
            <p className="text-white/60 text-xs font-light mt-0.5">{p.years}</p>
          </div>

          {i === 0 && <ScrollHint />}
        </Link>
      ))}
    </div>
  );
}
