"use client";

import { motion } from "framer-motion";
import { ConstellationStar } from "@/components/ConstellationStar";
import { ConstellationLines } from "@/components/ConstellationLines";
import type { UniverseSection } from "@/data/sections";

type ConstellationTimelineProps = {
  sections: UniverseSection[];
  visitedSections: string[];
  isSecretUnlocked: boolean;
  onSelect: (section: UniverseSection) => void;
};

export function ConstellationTimeline({ sections, visitedSections, isSecretUnlocked, onSelect }: ConstellationTimelineProps) {
  const nextSection = sections.find((section) => !visitedSections.includes(section.id));

  return (
    <>
      <div className="relative mt-6 hidden min-h-[40rem] overflow-hidden rounded-3xl border border-violet-200/15 bg-[#0e0a20]/70 lg:block">
        <ConstellationLines sections={sections} />
        {sections.map((section) => (
          <ConstellationStar
            key={section.id}
            section={section}
            isVisited={visitedSections.includes(section.id)}
            isNext={nextSection?.id === section.id}
            isSecretUnlocked={isSecretUnlocked}
            isDisabled={section.importance === "secret" && !isSecretUnlocked}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="relative mt-6 space-y-4 px-1 lg:hidden">
        <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-violet-300/35 via-rose-200/45 to-amber-200/35" />
        {sections.map((section, index) => {
          const alignLeft = index % 2 === 0;
          const disabled = section.importance === "secret" && !isSecretUnlocked;
          const visited = visitedSections.includes(section.id);

          return (
            <motion.button
              key={section.id}
              type="button"
              onClick={() => onSelect(section)}
              disabled={disabled}
              aria-label={`Abrir sección ${section.fullTitle}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative min-h-32 w-[calc(50%-0.9rem)] rounded-2xl border p-4 text-left shadow-[0_0_18px_rgba(91,60,170,0.35)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 ${alignLeft ? "mr-auto" : "ml-auto"} ${disabled ? "border-violet-200/20 bg-[#120d24]/60 opacity-65" : visited ? "border-rose-200/45 bg-[#1a1234]/90" : "border-violet-200/35 bg-[#140e2a]/85"}` }
            >
              <span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-violet-100/60 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.7)] aria-hidden" style={alignLeft ? { right: "-1.45rem" } : { left: "-1.45rem" }} />
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/80">{disabled ? "Bloqueada" : visited ? "Visitada" : "Estrella"}</p>
              <h3 className="mt-1 text-sm font-semibold text-white">{section.fullTitle}</h3>
              <p className="mt-1 text-xs text-violet-100/85">{disabled ? "Esta estrella se ilumina al completar la travesía." : section.description}</p>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
