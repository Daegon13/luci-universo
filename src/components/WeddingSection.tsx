"use client";

import Image from "next/image";
import { useState } from "react";
import { weddingEvents, weddingPhotos } from "@/data/wedding";

function WeddingPhotoCard({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-violet-950/70 to-[#120d26]/80 p-4 text-center text-sm text-violet-100/90">
        Placeholder elegante · {src}
      </div>
    );
  }

  return <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" onError={() => setHasError(true)} />;
}

export function WeddingSection() {
  return (
    <section className="space-y-6">
      <p className="text-xs uppercase tracking-[0.2em] text-rose-100/85">Boda y memoria</p>
      <h3 className="text-2xl font-semibold text-white sm:text-3xl">El Día que Elegimos Ser Hogar</h3>
      <p className="leading-relaxed text-violet-100/90">
        No fue solo una ceremonia: fue la confirmación de que ya éramos equipo. Estas fechas guardan el corazón de ese
        compromiso y esta galería queda lista para llenarse con sus fotos más queridas.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {weddingEvents.map((event) => (
          <article key={event.id} className="rounded-2xl border border-rose-100/25 bg-rose-950/30 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-100">{event.dateLabel}</p>
            <p className="mt-1 text-base font-medium text-white">{event.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-violet-100/85">{event.meaning}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {weddingPhotos.map((photo) => (
          <figure key={photo.id} className="overflow-hidden rounded-2xl border border-amber-100/25 bg-[#1b1435]">
            <div className="relative aspect-[4/3]">
              <WeddingPhotoCard src={photo.src} alt={photo.alt} />
            </div>
            <figcaption className="border-t border-amber-100/15 px-4 py-3 text-xs leading-relaxed text-violet-100/80 sm:text-sm">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
