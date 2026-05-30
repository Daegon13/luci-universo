"use client";

import { motion } from "framer-motion";
import type { UniverseSection } from "@/data/sections";

type ConstellationLinesProps = {
  sections: UniverseSection[];
  visitedSections: string[];
  isSecretUnlocked: boolean;
};

export function ConstellationLines({ sections, visitedSections, isSecretUnlocked }: ConstellationLinesProps) {
  return (
    <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="constellation-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(253, 224, 71, 0.44)" />
          <stop offset="45%" stopColor="rgba(244, 114, 182, 0.5)" />
          <stop offset="100%" stopColor="rgba(196, 181, 253, 0.46)" />
        </linearGradient>
        <linearGradient id="constellation-line-visited" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(254, 240, 138, 0.82)" />
          <stop offset="50%" stopColor="rgba(251, 113, 133, 0.72)" />
          <stop offset="100%" stopColor="rgba(221, 214, 254, 0.76)" />
        </linearGradient>
      </defs>

      {sections.slice(0, -1).map((section, index) => {
        const nextSection = sections[index + 1];
        const segmentVisited = visitedSections.includes(section.id) && visitedSections.includes(nextSection.id);
        const touchesSecret = section.importance === "secret" || nextSection.importance === "secret";
        const isDimmedSecret = touchesSecret && !isSecretUnlocked;

        return (
          <g key={`${section.id}-${nextSection.id}`}>
            <line
              x1={section.position.x}
              y1={section.position.y}
              x2={nextSection.position.x}
              y2={nextSection.position.y}
              stroke="url(#constellation-line-gradient)"
              strokeWidth={0.32}
              strokeLinecap="round"
              strokeDasharray={isDimmedSecret ? "1 1.4" : undefined}
              opacity={isDimmedSecret ? 0.34 : 0.42}
              className="drop-shadow-[0_0_7px_rgba(250,204,21,0.22)]"
            />
            {segmentVisited ? (
              <motion.line
                x1={section.position.x}
                y1={section.position.y}
                x2={nextSection.position.x}
                y2={nextSection.position.y}
                stroke="url(#constellation-line-visited)"
                strokeWidth={0.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: isDimmedSecret ? 0.48 : 0.9 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="drop-shadow-[0_0_8px_rgba(250,204,21,0.38)]"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
