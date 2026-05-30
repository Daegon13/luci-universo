"use client";

import { weddingEvents, weddingPhotos } from "@/data/wedding";
import { MagicImageFrame } from "@/components/MagicImageFrame";

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
          <MagicImageFrame key={photo.id} src={photo.src} alt={photo.alt} caption={photo.caption} variant="wedding" />
        ))}
      </div>
    </section>
  );
}
