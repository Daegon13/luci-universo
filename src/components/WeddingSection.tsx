"use client";

import Image from "next/image";
import { useState } from "react";
import { weddingEvents, weddingPhotos } from "@/data/wedding";

function MysticImageSkeleton({ label }: { label: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950 via-[#18102f] to-[#080513]" aria-hidden>
      <div className="absolute inset-0 border border-amber-100/20 shadow-[inset_0_0_26px_rgba(251,191,36,0.08)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(251,207,232,0.18),transparent_34%),radial-gradient(circle_at_76%_72%,rgba(216,180,254,0.16),transparent_42%)]" />
      <div className="absolute inset-y-0 -left-1/2 w-1/2 animate-[mystic-shimmer_1.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-rose-100/12 to-transparent" />
      <span className="sr-only">Cargando {label}</span>
    </div>
  );
}

function WeddingPhotoCard({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-violet-950/70 to-[#120d26]/80 p-4 text-center text-sm text-violet-100/90">
        Placeholder elegante · {src}
      </div>
    );
  }

  return (
    <>
      {!isLoaded ? <MysticImageSkeleton label={alt} /> : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 520px"
        className={`object-cover transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
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
