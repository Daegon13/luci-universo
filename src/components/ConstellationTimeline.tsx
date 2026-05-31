"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import { ConstellationStar } from "@/components/ConstellationStar";
import { ConstellationLines } from "@/components/ConstellationLines";
import type { UniverseSection } from "@/data/sections";

type ConstellationTimelineProps = {
  sections: UniverseSection[];
  visitedSections: string[];
  isSecretUnlocked: boolean;
  selectedSectionId?: string;
  onSelect: (section: UniverseSection) => void;
};

const ACCENT_NODE_CLASS: Record<UniverseSection["accent"], string> = {
  violet: "border-violet-100 bg-violet-100 shadow-[0_0_22px_rgba(196,181,253,0.85)]",
  rose: "border-rose-100 bg-rose-100 shadow-[0_0_24px_rgba(251,113,133,0.85)]",
  amber: "border-amber-100 bg-amber-100 shadow-[0_0_24px_rgba(253,230,138,0.85)]",
  sky: "border-sky-100 bg-sky-100 shadow-[0_0_24px_rgba(186,230,253,0.82)]",
};

export function ConstellationTimeline({ sections, visitedSections, isSecretUnlocked, selectedSectionId, onSelect }: ConstellationTimelineProps) {
  const visitedSectionSet = useMemo(() => new Set(visitedSections), [visitedSections]);
  const nextSection = useMemo(() => sections.find((section) => !visitedSectionSet.has(section.id)), [sections, visitedSectionSet]);

  return (
    <>
      <div className="relative mt-6 hidden min-h-[34rem] overflow-visible rounded-[2rem] border border-violet-200/12 bg-[#080512]/18 shadow-[inset_0_0_60px_rgba(109,40,217,0.12)] md:block lg:min-h-[clamp(34rem,72dvh,43rem)]">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(244,114,182,0.11),transparent_28%),radial-gradient(circle_at_14%_22%,rgba(196,181,253,0.11),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(253,224,71,0.08),transparent_22%)]" />
        <ConstellationLines sections={sections} visitedSections={visitedSections} isSecretUnlocked={isSecretUnlocked} />
        {sections.map((section) => (
          <ConstellationStar
            key={section.id}
            section={section}
            isVisited={visitedSectionSet.has(section.id)}
            isNext={nextSection?.id === section.id}
            isSelected={selectedSectionId === section.id}
            isSecretUnlocked={isSecretUnlocked}
            isDisabled={section.importance === "secret" && !isSecretUnlocked}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="relative mt-6 md:hidden">
        <div className="pointer-events-none absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-violet-200/35 via-rose-100/55 to-amber-100/35 shadow-[0_0_18px_rgba(244,114,182,0.38)]" />
        <div className="pointer-events-none absolute inset-y-6 left-2 right-0 rounded-[2rem] bg-[radial-gradient(circle_at_18%_8%,rgba(196,181,253,0.10),transparent_20%),radial-gradient(circle_at_72%_42%,rgba(244,114,182,0.08),transparent_24%),radial-gradient(circle_at_30%_86%,rgba(251,191,36,0.07),transparent_22%)]" />
        <div className="relative space-y-3">
          {sections.map((section, index) => {
            const disabled = section.importance === "secret" && !isSecretUnlocked;
            const visited = visitedSectionSet.has(section.id);
            const isNext = nextSection?.id === section.id;
            const isSecret = section.importance === "secret";

            return (
              <m.div
                key={section.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045 }}
                className="relative pl-12"
              >
                <span className="pointer-events-none absolute left-5 top-5 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.13),transparent_62%)] shadow-[0_0_22px_rgba(167,139,250,0.18)]" aria-hidden />
                <span
                  className={`pointer-events-none absolute left-5 top-5 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    disabled ? "border-violet-200/35 bg-violet-200/20 shadow-[0_0_14px_rgba(196,181,253,0.32)]" : ACCENT_NODE_CLASS[section.accent]
                  } ${visited ? "ring-4 ring-rose-200/15" : ""} ${isNext && !disabled ? "animate-pulse" : ""}`}
                  aria-hidden
                />
                <m.button
                  type="button"
                  onClick={() => {
                    if (!disabled) onSelect(section);
                  }}
                  whileTap={!disabled ? { scale: 0.985 } : undefined}
                  aria-disabled={disabled}
                  aria-label={`Abrir sección ${section.fullTitle}`}
                  className={`group relative w-full touch-manipulation overflow-hidden rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512] ${
                    disabled
                      ? "border-violet-200/15 bg-violet-950/10 opacity-65"
                      : isSecret
                        ? "border-amber-100/35 bg-amber-100/[0.06] shadow-[0_0_24px_rgba(251,191,36,0.14)]"
                        : visited
                          ? "border-rose-200/35 bg-rose-950/[0.12] shadow-[0_0_22px_rgba(244,114,182,0.13)]"
                          : "border-violet-200/22 bg-violet-950/[0.10] shadow-[0_0_18px_rgba(124,58,237,0.12)]"
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%),radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.08),transparent_18%)] opacity-80" aria-hidden />
                  <span className="pointer-events-none absolute right-4 top-3 h-1 w-1 rounded-full bg-white/70 shadow-[18px_9px_0_rgba(255,255,255,0.35),-34px_28px_0_rgba(244,214,255,0.26)]" aria-hidden />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-violet-200/75">
                        {disabled ? "Centro dormido" : visited ? "Estrella visitada" : isNext ? "Próxima estrella" : "Punto de luz"}
                      </p>
                      <h3 className="mt-1 text-[0.98rem] font-semibold leading-snug text-white">{section.fullTitle}</h3>
                    </div>
                    <span className="mt-1 shrink-0 rounded-full border border-white/15 px-2 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-violet-100/80">
                      {section.title}
                    </span>
                  </div>
                  <p className="relative mt-2 text-xs leading-relaxed text-violet-100/82">
                    {disabled ? "Todavía quedan estrellas por visitar. Se enciende al completar la travesía, como una última promesa en el centro del cielo." : section.description}
                  </p>
                </m.button>
              </m.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
