"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FloatingOrb } from "@/components/FloatingOrb";
import { SectionModal } from "@/components/SectionModal";
import { ProgressConstellation } from "@/components/ProgressConstellation";
import { sections, type UniverseSection } from "@/data/sections";

const SECRET_CENTER_ID = "secret-center";
const VISITED_STORAGE_KEY = "luci-universo-visited-sections";

const DESKTOP_POSITIONS = [
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-5 lg:row-start-2",
  "lg:col-start-2 lg:row-start-3",
  "lg:col-start-4 lg:row-start-3",
  "lg:col-start-1 lg:row-start-4",
  "lg:col-start-5 lg:row-start-4",
];

function getInitialVisitedSections() {
  if (typeof window === "undefined") return [];

  const stored = window.localStorage.getItem(VISITED_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored) as string[];
    const validIds = new Set(sections.map((section) => section.id));
    return parsed.filter((id) => validIds.has(id));
  } catch {
    window.localStorage.removeItem(VISITED_STORAGE_KEY);
    return [];
  }
}

export function GalaxyMap() {
  const [selectedSection, setSelectedSection] = useState<UniverseSection | null>(null);
  const [visitedSections, setVisitedSections] = useState<string[]>(getInitialVisitedSections);

  const orbitLines = useMemo(() => ["h-56 w-56", "h-80 w-80", "h-[28rem] w-[28rem]"], []);
  const requiredSections = useMemo(() => sections.filter((section) => section.id !== SECRET_CENTER_ID), []);

  useEffect(() => {
    window.localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify(visitedSections));
  }, [visitedSections]);

  const isSecretUnlocked = requiredSections.every((section) => visitedSections.includes(section.id));

  const handleSelectSection = (section: UniverseSection, options?: { bypassLock?: boolean }) => {
    if (section.id === SECRET_CENTER_ID && !isSecretUnlocked && !options?.bypassLock) return;

    setVisitedSections((previous) => (previous.includes(section.id) ? previous : [...previous, section.id]));
    setSelectedSection(section);
  };

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-violet-100/20 bg-[#0f0b22]/70 p-5 pb-24 shadow-[0_0_45px_rgba(121,82,212,0.32)] backdrop-blur-md sm:p-8 sm:pb-24 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(167,139,250,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(251,191,180,0.16),transparent_42%)]" />
      <p className="relative text-xs uppercase tracking-[0.2em] text-violet-200/85">Nuestro universo</p>
      <h2 className="relative mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">Tocá una estrella para abrir un recuerdo</h2>
      <p className="relative mt-3 max-w-2xl text-sm text-violet-100/85 sm:text-base">
        Este mapa ya contiene las nueve puertas principales de la travesía. Cada orbe representa una parte sagrada de la historia de Diego y Luci.
      </p>

      <ProgressConstellation
        visitedCount={visitedSections.filter((id) => id !== SECRET_CENTER_ID).length}
        totalCount={requiredSections.length}
        isSecretUnlocked={isSecretUnlocked}
      />

      <div className="relative mt-6 hidden min-h-[38rem] items-center justify-center lg:flex">
        {orbitLines.map((size, index) => (
          <motion.div
            key={size}
            className={`absolute rounded-full border border-violet-200/15 ${size}`}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 90 + index * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <div className="relative z-10 grid w-full max-w-5xl grid-cols-5 grid-rows-4 gap-4">
          {sections.map((section, index) => (
            <div key={section.id} className={DESKTOP_POSITIONS[index]}>
              <FloatingOrb
                section={section}
                index={index}
                onSelect={handleSelectSection}
                disabled={section.id === SECRET_CENTER_ID && !isSecretUnlocked}
                desktopHighlight
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 lg:hidden sm:grid-cols-2">
        {sections.map((section, index) => (
          <FloatingOrb
            key={section.id}
            section={section}
            index={index}
            onSelect={handleSelectSection}
            disabled={section.id === SECRET_CENTER_ID && !isSecretUnlocked}
          />
        ))}
      </div>

      {!isSecretUnlocked ? (
        <button
          type="button"
          onClick={() =>
            handleSelectSection(sections.find((section) => section.id === SECRET_CENTER_ID) as UniverseSection, {
              bypassLock: true,
            })
          }
          className="relative mt-4 w-full rounded-2xl border border-rose-200/35 bg-rose-950/25 px-4 py-3 text-sm font-medium text-rose-100 transition hover:border-rose-200/60 lg:w-auto"
        >
          Abrir igual el centro secreto ahora
        </button>
      ) : null}

      <SectionModal section={selectedSection} onClose={() => setSelectedSection(null)} />
    </section>
  );
}
