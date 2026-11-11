"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
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

const CYCLE_MS = 1200;

function imagesOf(project: ProjectData) {
  return [project.cover, ...project.gallery];
}

function randomStarts(projects: ProjectData[]) {
  return projects.map((p) => Math.floor(Math.random() * imagesOf(p).length));
}

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false
  );
}

function useImageCycle(count: number, startIndex: number, enabled: boolean) {
  const [offset, setOffset] = useState(0);
  const [hovering, setHovering] = useState(false);

  const index = (startIndex + offset) % count;

  useEffect(() => {
    if (!hovering || !enabled || count === 1) return;
    const id = setInterval(() => setOffset((o) => o + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, [hovering, enabled, count]);

  const start = useCallback(() => setHovering(true), []);

  const stop = useCallback(() => {
    setHovering(false);
    setOffset(0);
  }, []);

  return { index, hovering, start, stop };
}

function ProjectCard({
  project,
  locale,
  startIndex,
  snap,
  priority,
  hint,
}: {
  project: ProjectData;
  locale: string;
  startIndex: number;
  snap: boolean;
  priority: boolean;
  hint: boolean;
}) {
  const images = imagesOf(project);
  const reduced = usePrefersReducedMotion();
  const { index, hovering, start, stop } = useImageCycle(
    images.length,
    startIndex,
    !reduced
  );
  const [loaded, setLoaded] = useState(false);

  const shown = loaded ? images : [images[startIndex]];
  const activeSrc = images[index].src;

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className={`group block shrink-0 lg:h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-center bg-white ${
        snap ? "lg:snap-start" : ""
      }`}
      aria-label={project.title}
      onMouseEnter={() => {
        setLoaded(true);
        start();
      }}
      onMouseLeave={stop}
    >
      <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:max-h-[70vh] overflow-hidden bg-white">
        {shown.map((m) => (
          <Image
            key={m.src}
            src={m.src}
            alt={m.alt}
            fill
            className={`object-contain transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] ${
              m.src === activeSrc ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={88}
            priority={priority && m.src === images[startIndex].src}
          />
        ))}

        {/* desktop : titre au survol */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-light">{project.title}</p>
          <p className="text-white/75 text-xs font-light mt-0.5">
            {project.years}
          </p>
          {hovering && images.length > 1 && (
            <p className="text-white/60 text-[10px] font-light mt-1 tracking-widest">
              {index + 1}/{images.length}
            </p>
          )}
        </div>

        {hint && <ScrollHint />}
      </div>

      {/* mobile : titre toujours visible */}
      <div className="lg:hidden mt-3 flex items-baseline justify-between">
        <span className="text-base font-light">{project.title}</span>
        <span className="text-xs text-[#6b6b6b] font-light">
          {project.years}
        </span>
      </div>
    </Link>
  );
}

export default function RandomProjectGrid({
  projects,
  locale,
}: {
  projects: ProjectData[];
  locale: string;
}) {
  const [starts, setStarts] = useState<number[]>(() => projects.map(() => 0));

  // randomize only after mount so server and first client render match
  useEffect(() => {
    setStarts(randomStarts(projects));
  }, [projects]);

  const shuffle = useCallback(() => {
    setStarts(randomStarts(projects));
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
        <ProjectCard
          key={p.slug}
          project={p}
          locale={locale}
          startIndex={starts[i]}
          snap={i !== projects.length - 1}
          priority={i === 0}
          hint={i === 0}
        />
      ))}
    </div>
  );
}
