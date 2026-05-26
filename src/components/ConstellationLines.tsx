"use client";

import type { UniverseSection } from "@/data/sections";

type ConstellationLinesProps = {
  sections: UniverseSection[];
};

export function ConstellationLines({ sections }: ConstellationLinesProps) {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="constellation-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(253, 224, 71, 0.35)" />
          <stop offset="45%" stopColor="rgba(244, 114, 182, 0.4)" />
          <stop offset="100%" stopColor="rgba(196, 181, 253, 0.38)" />
        </linearGradient>
      </defs>

      {sections.slice(0, -1).map((section, index) => {
        const nextSection = sections[index + 1];
        return (
          <line
            key={`${section.id}-${nextSection.id}`}
            x1={section.position.x}
            y1={section.position.y}
            x2={nextSection.position.x}
            y2={nextSection.position.y}
            stroke="url(#constellation-line-gradient)"
            strokeWidth={0.34}
            strokeLinecap="round"
            className="drop-shadow-[0_0_6px_rgba(250,204,21,0.25)]"
          />
        );
      })}
    </svg>
  );
}
