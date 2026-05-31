"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { SectionModal } from "@/components/SectionModal";
import { ProgressConstellation } from "@/components/ProgressConstellation";
import { ConstellationTimeline } from "@/components/ConstellationTimeline";
import { MagicButton } from "@/components/MagicButton";
import { StarBurst } from "@/components/StarBurst";
import { sections, type UniverseSection } from "@/data/sections";

const SECRET_CENTER_ID = "secret-center";
const VISITED_STORAGE_KEY = "luci-universo-visited-sections";

function getStoredVisitedSections() {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(VISITED_STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored) as string[];
    const validIds = new Set(sections.map((section) => section.id));
    return parsed.filter((id) => validIds.has(id));
  } catch {
    try {
      window.localStorage.removeItem(VISITED_STORAGE_KEY);
    } catch {
      // La travesía debe seguir disponible aunque el almacenamiento local falle.
    }

    return [];
  }
}

type GalaxyMapProps = {
  onModalOpenChange?: (isOpen: boolean) => void;
};

export function GalaxyMap({ onModalOpenChange }: GalaxyMapProps) {
  const [selectedSection, setSelectedSection] = useState<UniverseSection | null>(null);
  const [visitedSections, setVisitedSections] = useState<string[]>(getStoredVisitedSections);
  const [showUnlockMessage, setShowUnlockMessage] = useState(false);
  const hasAnnouncedUnlock = useRef(false);

  const requiredSections = useMemo(() => sections.filter((section) => section.id !== SECRET_CENTER_ID), []);

  useEffect(() => {
    try {
      window.localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify(visitedSections));
    } catch {
      // La constelación debe poder recorrerse aunque localStorage falle en mobile/private mode.
    }
  }, [visitedSections]);

  const isSecretUnlocked = requiredSections.every((section) => visitedSections.includes(section.id));

  useEffect(() => {
    if (!isSecretUnlocked || hasAnnouncedUnlock.current) return;

    hasAnnouncedUnlock.current = true;
    setShowUnlockMessage(true);
    const timeout = window.setTimeout(() => setShowUnlockMessage(false), 3600);
    return () => window.clearTimeout(timeout);
  }, [isSecretUnlocked]);

  useEffect(() => {
    onModalOpenChange?.(selectedSection !== null);
  }, [onModalOpenChange, selectedSection]);

  useEffect(() => () => onModalOpenChange?.(false), [onModalOpenChange]);

  const isDecorativePaused = selectedSection !== null;

  const handleSelectSection = useCallback(
    (section: UniverseSection, options?: { bypassLock?: boolean }) => {
      if (section.id === SECRET_CENTER_ID && !isSecretUnlocked && !options?.bypassLock) return;

      setVisitedSections((previous) => (previous.includes(section.id) ? previous : [...previous, section.id]));
      setSelectedSection(section);
    },
    [isSecretUnlocked],
  );

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl rounded-[2rem] border border-violet-100/15 bg-[#0b0718]/24 p-4 shadow-[0_0_55px_rgba(121,82,212,0.24)] backdrop-blur-[6px] sm:p-7 md:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(167,139,250,0.07),transparent_46%),radial-gradient(circle_at_82%_78%,rgba(251,191,180,0.055),transparent_52%)]" />
      {isSecretUnlocked ? <StarBurst active={!isDecorativePaused} className="right-12 top-12 h-16 w-16" /> : null}
      <p className="relative text-xs uppercase tracking-[0.2em] text-violet-200/85">Nuestro universo</p>
      <h2 className="relative mt-2 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Recorré la constelación del tiempo</h2>
      <p className="relative mt-3 max-w-2xl text-sm text-violet-100/85 sm:text-base">
        Cada estrella representa una memoria viva de Diego y Luci. Seguí las líneas doradas y abrí cada fragmento de esta historia sagrada.
      </p>

      <AnimatePresence>
        {showUnlockMessage ? (
          <m.div
            className="relative mt-5 rounded-2xl border border-amber-100/30 bg-amber-100/[0.07] px-4 py-3 text-sm text-amber-50 shadow-[0_0_32px_rgba(251,191,36,0.16)]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            La constelación está completa.
          </m.div>
        ) : null}
      </AnimatePresence>

      <ProgressConstellation
        visitedCount={visitedSections.filter((id) => id !== SECRET_CENTER_ID).length}
        totalCount={requiredSections.length}
        isSecretUnlocked={isSecretUnlocked}
      />

      <ConstellationTimeline
        sections={sections}
        visitedSections={visitedSections}
        isSecretUnlocked={isSecretUnlocked}
        selectedSectionId={selectedSection?.id}
        onSelect={handleSelectSection}
        decorativePaused={isDecorativePaused}
      />

      {!isSecretUnlocked ? (
        <MagicButton
          type="button"
          variant="secret"
          onClick={() =>
            handleSelectSection(sections.find((section) => section.id === SECRET_CENTER_ID) as UniverseSection, {
              bypassLock: true,
            })
          }
          className="relative mt-5 w-full md:w-auto"
        >
          Abrir igual el centro secreto ahora
        </MagicButton>
      ) : null}

      <SectionModal section={selectedSection} onClose={() => setSelectedSection(null)} />
    </section>
  );
}
