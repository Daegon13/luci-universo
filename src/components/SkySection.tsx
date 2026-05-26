"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skyEvents, type SkyEvent } from "@/data/skyEvents";

type SkySectionProps = {
  initialEventId?: string;
};

function SymbolicSolarSystem({ event }: { event: SkyEvent }) {
  const orbitRings = useMemo(() => ["h-24 w-24", "h-40 w-40", "h-56 w-56"], []);

  return (
    <div className="relative mt-6 flex min-h-[18rem] items-center justify-center overflow-hidden rounded-3xl border border-violet-100/20 bg-[#070913]/85">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,182,0.18),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(125,211,252,0.15),transparent_50%)]" />

      {orbitRings.map((size, index) => (
        <motion.div
          key={size}
          className={`absolute rounded-full border border-violet-100/15 ${size}`}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 80 + index * 30, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 to-rose-300 shadow-[0_0_24px_rgba(251,191,36,0.7)]" />

      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 18 * event.orbitScale, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="block h-4 w-4 -translate-x-12 rounded-full shadow-[0_0_16px_rgba(196,181,253,0.9)]"
          style={{ backgroundColor: event.primaryColor }}
        />
      </motion.div>

      <motion.div
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 26 * event.orbitScale, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="block h-3 w-3 -translate-x-20 rounded-full"
          style={{ backgroundColor: event.secondaryColor, boxShadow: "0 0 14px rgba(248,250,252,0.45)" }}
        />
      </motion.div>
    </div>
  );
}

export function SkySection({ initialEventId }: SkySectionProps) {
  const initialEvent = skyEvents.find((event) => event.id === initialEventId) ?? skyEvents[0];
  const [selectedEventId, setSelectedEventId] = useState(initialEvent.id);

  const selectedEvent = skyEvents.find((event) => event.id === selectedEventId) ?? skyEvents[0];

  return (
    <div>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-violet-200/80">Cielos astronómicos simbólicos</p>
      <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Los cielos que guardan nuestra historia</h3>
      <p className="mt-4 text-sm leading-relaxed text-violet-100/90 sm:text-base">
        Esta visualización es artística y poética. En este patch celebramos la emoción de cada fecha, sin afirmar precisión
        astronómica real todavía.
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {skyEvents.map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() => setSelectedEventId(event.id)}
            className={`rounded-2xl border px-3 py-3 text-left transition ${
              selectedEventId === event.id
                ? "border-violet-200/60 bg-violet-500/20"
                : "border-violet-100/20 bg-violet-950/25 hover:border-violet-200/45"
            }`}
          >
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/80">Evento</p>
            <p className="mt-1 text-sm font-medium text-violet-50">{event.title}</p>
          </button>
        ))}
      </div>

      <SymbolicSolarSystem event={selectedEvent} />

      <article className="mt-5 rounded-2xl border border-violet-100/20 bg-violet-950/25 p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-violet-200/85">{selectedEvent.dateLabel}</p>
        <h4 className="mt-2 text-lg font-semibold text-violet-50">{selectedEvent.subtitle}</h4>
        <p className="mt-3 text-sm leading-relaxed text-violet-100/90 sm:text-base">{selectedEvent.poeticText}</p>
        <p className="mt-3 text-xs text-violet-200/80">{selectedEvent.note}</p>
      </article>
    </div>
  );
}
