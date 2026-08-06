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
    <div className="relative flex flex-col gap-8 lg:gap-10 lg:overflow-x-visible no-scrollbar px-4 lg:pl-1 lg:pr-20 pb-20">
      <button
        onClick={shuffle}
        className="fixed bottom-6 right-6 z-50 text-2xl text-[#424242] hover:text-black transition-colors duration-200"
        title={refreshLabel}
        aria-label={refreshLabel}
      >
        ↻
      </button>

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/${locale}/projects/${p.slug}`}
          className="group block shrink-0 lg:h-[calc(100vh-4rem)] bg-white"
          aria-label={p.title}
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-white">
            <Image
              src={displayImages[i].src}
              alt={displayImages[i].alt}
              fill
              className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={88}
              priority={i === 0}
            />

            {/* Desktop : titre au survol */}
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-light">{p.title}</p>
              <p className="text-white/75 text-xs font-light mt-0.5">{p.years}</p>
            </div>

            {i === 0 && <ScrollHint />}
          </div>

          {/* Mobile : titre toujours visible */}
          <div className="lg:hidden mt-3 flex items-baseline justify-between">
            <span className="text-base font-light">{p.title}</span>
            <span className="text-xs text-[#6b6b6b] font-light">{p.years}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
