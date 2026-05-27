"use client";

import { CelestialSnapshotSection } from "@/components/CelestialSnapshotSection";

type SkySectionProps = {
  initialEventId?: string;
};

export function SkySection({ initialEventId }: SkySectionProps) {
  return <CelestialSnapshotSection initialEventId={initialEventId} />;
}
