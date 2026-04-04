"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project, Locale } from "@/data/projects";

type View = 1 | 2 | 3;

interface Props {
  projects: Project[];
  locale: Locale;
  title: string;
  countLabel: string;
}

export default function PortfolioGrid({ projects, locale, title, countLabel }: Props) {
  const [view, setView] = useState<View>(2);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view !== 1) return;
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [view]);

  useEffect(() => {
    if (view !== 1) return;
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [view]);

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * (scrollRef.current.clientWidth), behavior: "smooth" });
  };

  const MobileList = () => (
    <div className="sm:hidden mx-auto px-8">
      <div className="flex items-center justify-between py-8">
        <h1 className="text-4xl font-light">{title}</h1>
        <span className="text-xs text-black/40 font-light tracking-wide">{countLabel}</span>
      </div>
      <div className="pb-16 pt-2 flex flex-col gap-y-10">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}`}
            className="group block"
            aria-label={p.title[locale]}
          >
            <div className="relative overflow-hidden aspect-[4/3] bg-white">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                sizes="100vw"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-base font-light">{p.title[locale]}</span>
              <span className="text-xs text-black/40 font-light shrink-0 ml-3">{p.years}</span>
            </div>
            <p className="mt-1 text-sm font-light text-black/50 line-clamp-1">
              {p.subtitle[locale]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );

  const PageHeader = () => (
    <div className="flex items-center justify-between px-8 lg:px-14 py-8 shrink-0">
      <h1 className="text-4xl font-light">{title}</h1>
      <div className="flex items-center gap-5">
        <span className="text-xs text-black/40 font-light tracking-wide">{countLabel}</span>
        <div className="flex items-center gap-3">
          {([1, 2, 3] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => { setView(v); setActiveIndex(0); }}
              className={`transition-opacity duration-200 ${view === v ? "opacity-100" : "opacity-20 hover:opacity-60"}`}
              aria-label={`${v}-column view`}
            >
              <GridIcon cols={v} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (view === 1) {
    return (
      <>
        <MobileList />
        <div className="hidden sm:flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
          <PageHeader />
          <div
            ref={scrollRef}
            className="flex-1 min-h-0 flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
          >
            {projects.map((p, i) => (
              <div
                key={p.slug}
                className="flex-none w-full snap-start flex flex-col px-8 lg:px-14"
              >
                <Link
                  href={`/${locale}/projects/${p.slug}`}
                  className="group flex-1 min-h-0 relative block overflow-hidden bg-white"
                  aria-label={p.title[locale]}
                >
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    sizes="100vw"
                    priority={i === 0}
                  />
                </Link>
                <div className="shrink-0 mt-4 flex items-baseline justify-between">
                  <span className="text-base font-light">{p.title[locale]}</span>
                  <span className="text-xs text-black/40 font-light">{p.years}</span>
                </div>
                <p className="shrink-0 mt-1 text-sm font-light text-black/50 line-clamp-1 pb-5">
                  {p.subtitle[locale]}
                </p>
              </div>
            ))}
          </div>
          <div className="shrink-0 flex items-center justify-between px-8 lg:px-14 py-4 border-t border-black/10">
            <button
              onClick={() => goTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="text-sm font-light text-black/40 hover:text-black transition-colors duration-200 disabled:opacity-20 w-8"
            >
              ←
            </button>
            <span className="text-xs font-light text-black/30 tabular-nums">
              {activeIndex + 1} / {projects.length}
            </span>
            <button
              onClick={() => goTo(Math.min(projects.length - 1, activeIndex + 1))}
              disabled={activeIndex === projects.length - 1}
              className="text-sm font-light text-black/40 hover:text-black transition-colors duration-200 disabled:opacity-20 w-8 text-right"
            >
              →
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MobileList />
      <div className="hidden sm:block mx-auto max-w-7xl px-8">
        <PageHeader />
        <div className={[
          "pb-16 pt-2",
          view === 2
            ? "grid grid-cols-2 gap-x-8 gap-y-14"
            : "grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10",
        ].join(" ")}>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/projects/${p.slug}`}
              className="group block"
              aria-label={p.title[locale]}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-white">
                <Image
                  src={p.cover.src}
                  alt={p.cover.alt}
                  fill
                  className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes={view === 2 ? "50vw" : "(max-width:1024px) 50vw, 33vw"}
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-base font-light group-hover:opacity-60 transition-opacity duration-200">
                  {p.title[locale]}
                </span>
                <span className="text-xs text-black/40 font-light shrink-0 ml-3">{p.years}</span>
              </div>
              <p className="mt-1 text-sm font-light text-black/50 line-clamp-1">
                {p.subtitle[locale]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function GridIcon({ cols }: { cols: View }) {
  if (cols === 1) {
    return (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <rect x="1" y="1" width="26" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (cols === 2) {
    return (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <rect x="1" y="1" width="11.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15.5" y="1" width="11.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="1" y="11" width="11.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15.5" y="11" width="11.5" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
      <rect x="1" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.5" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="11" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.5" y="11" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="11" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
