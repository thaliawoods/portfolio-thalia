"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = { src: string; alt: string };

export default function Gallery({ items }: { items: Item[] }) {
  const total = items.length;
  const [current, setCurrent] = useState(1);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const options = useMemo(() => ({ root: null, threshold: 0.6 }), []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

      if (!visible) return;
      const idx = Number((visible.target as HTMLElement).dataset.index || "0");
      setCurrent(idx + 1);
    }, options);

    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [options]);

  return (
    <div className="relative">
      <div className="sticky top-[56px] z-10 inline-flex border border-black/10 bg-white/85 backdrop-blur px-2 py-1 text-xs">
        {current} / {total}
      </div>

      <div className="mt-4 space-y-6">
        {items.map((it, i) => (
          <div
            key={it.src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="border border-black/10"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={1600}
              height={1100}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
