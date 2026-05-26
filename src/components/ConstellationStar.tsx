"use client";

import { motion } from "framer-motion";
import type { UniverseSection } from "@/data/sections";

type ConstellationStarProps = {
  section: UniverseSection;
  isVisited: boolean;
  isNext: boolean;
  isSecretUnlocked: boolean;
  isDisabled: boolean;
  onSelect: (section: UniverseSection) => void;
};

const SIZE_CLASS: Record<UniverseSection["size"], string> = {
  small: "h-10 w-10",
  medium: "h-14 w-14",
  large: "h-16 w-16",
};

export function ConstellationStar({
  section,
  isVisited,
  isNext,
  isSecretUnlocked,
  isDisabled,
  onSelect,
}: ConstellationStarProps) {
  const isSecret = section.importance === "secret";
  const secretLocked = isSecret && !isSecretUnlocked;

  const secretUnlockedTone = "border-amber-100/80 bg-gradient-to-br from-amber-100/65 via-rose-200/55 to-fuchsia-200/40";

  const starTone = secretLocked
    ? "border-violet-200/20 bg-violet-200/10"
    : isSecret && isSecretUnlocked
      ? secretUnlockedTone
      : isVisited
        ? "border-rose-200/70 bg-gradient-to-br from-amber-100/50 via-rose-200/45 to-violet-200/40"
        : "border-violet-100/55 bg-gradient-to-br from-white/60 via-violet-200/45 to-rose-200/35";

  return (
    <motion.div
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${section.position.x}%`, top: `${section.position.y}%` }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(section)}
        disabled={isDisabled}
        aria-label={`Abrir sección ${section.fullTitle}`}
        whileHover={isDisabled ? undefined : { scale: 1.08 }}
        whileTap={isDisabled ? undefined : { scale: 0.95 }}
        animate={isNext && !isDisabled ? { scale: [1, 1.07, 1] } : undefined}
        transition={isNext && !isDisabled ? { duration: 2.2, repeat: Infinity } : undefined}
        className={`${SIZE_CLASS[section.size]} relative rounded-full border shadow-[0_0_26px_rgba(236,72,153,0.3)] transition ${starTone} ${isDisabled ? "cursor-not-allowed opacity-65" : "cursor-pointer"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#100b22]`}
      >
        <span className="absolute inset-0 rounded-full bg-white/35 blur-[6px]" aria-hidden />
      </motion.button>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] z-20 w-52 -translate-x-1/2 rounded-xl border border-violet-100/20 bg-[#120d28]/90 p-2 text-center opacity-0 shadow-[0_0_18px_rgba(244,114,182,0.22)] transition group-hover:opacity-100 group-focus-within:opacity-100">
        <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/75">{section.fullTitle}</p>
        <p className="mt-1 text-xs text-violet-100/85">{secretLocked ? "Completá las demás estrellas para encender este centro." : section.description}</p>
      </div>
    </motion.div>
  );
}
