import type { CelestialEvent } from "@/data/celestialEvents";

type SkyEventCardProps = {
  event: CelestialEvent;
};

export function SkyEventCard({ event }: SkyEventCardProps) {
  return (
    <article className="mt-5 rounded-2xl border border-violet-100/20 bg-violet-950/25 p-4 sm:p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-violet-200/85">{event.dateLabel}</p>
      <p className="mt-2 text-sm text-rose-100/85">{event.locationLabel}</p>
      <p className="mt-3 text-sm leading-relaxed text-violet-100/95 sm:text-base">{event.poeticText}</p>
      <p className="mt-4 text-xs text-violet-200/75">
        Visual creado a partir de captura/representación astronómica de referencia.
      </p>
    </article>
  );
}
