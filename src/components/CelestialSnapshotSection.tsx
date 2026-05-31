"use client";

import { useState } from "react";
import { celestialEvents } from "@/data/celestialEvents";
import { SkyEventCard } from "@/components/SkyEventCard";
import { SkyViewToggle } from "@/components/SkyViewToggle";
import { SolarSystemPostcard } from "@/components/SolarSystemPostcard";
import { MagicButton } from "@/components/MagicButton";

type SkyView = "earthSky" | "solarSystem";

type CelestialSnapshotSectionProps = {
  initialEventId?: string;
};

export function CelestialSnapshotSection({ initialEventId }: CelestialSnapshotSectionProps) {
  const initialEvent = celestialEvents.find((event) => event.id === initialEventId) ?? celestialEvents[0];
  const [selectedEventId, setSelectedEventId] = useState(initialEvent.id);
  const [selectedView, setSelectedView] = useState<SkyView>("earthSky");

  const selectedEvent = celestialEvents.find((event) => event.id === selectedEventId) ?? celestialEvents[0];
  const selectedImage = selectedEvent.views[selectedView];

  return (
    <section className="cv-section">
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-violet-200/80">Observatorio místico</p>
      <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Postales celestiales de nuestra historia</h3>
      <p className="mt-4 text-sm leading-relaxed text-violet-100/90 sm:text-base">
        Una colección íntima de capturas astronómicas manuales y simbólicas para honrar fechas que marcaron nuestro destino.
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {celestialEvents.map((event) => (
          <MagicButton
            key={event.id}
            type="button"
            variant={selectedEventId === event.id ? "secondary" : "ghost"}
            onClick={() => setSelectedEventId(event.id)}
            className="justify-start px-3 py-3 text-left"
            aria-pressed={selectedEventId === event.id}
          >
            <span>
              <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/80">Evento</span>
              <span className="mt-1 block text-sm font-medium text-violet-50">{event.title}</span>
            </span>
          </MagicButton>
        ))}
      </div>

      <div className="mt-5">
        <SkyViewToggle value={selectedView} onChange={setSelectedView} />
      </div>

      <SolarSystemPostcard image={selectedImage.image} alt={selectedImage.alt} title={selectedEvent.title} />
      <SkyEventCard event={selectedEvent} />
    </section>
  );
}
