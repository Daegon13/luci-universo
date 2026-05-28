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
  medium: "h-[3.25rem] w-[3.25rem] lg:h-14 lg:w-14",
  large: "h-[3.75rem] w-[3.75rem] lg:h-[4.25rem] lg:w-[4.25rem]",
};

const ACCENT_GLOW: Record<UniverseSection["accent"], string> = {
  violet: "shadow-[0_0_26px_rgba(167,139,250,0.42)]",
  rose: "shadow-[0_0_28px_rgba(251,113,133,0.42)]",
  amber: "shadow-[0_0_28px_rgba(253,224,71,0.36)]",
  sky: "shadow-[0_0_28px_rgba(125,211,252,0.36)]",
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

  const secretUnlockedTone = "border-amber-100/85 bg-gradient-to-br from-amber-100/70 via-rose-200/60 to-fuchsia-200/45";

  const starTone = secretLocked
    ? "border-violet-200/22 bg-violet-200/10"
    : isSecret && isSecretUnlocked
      ? secretUnlockedTone
      : isVisited
        ? "border-rose-100/80 bg-gradient-to-br from-amber-100/60 via-rose-200/55 to-violet-200/45"
        : "border-violet-100/60 bg-gradient-to-br from-white/65 via-violet-200/48 to-rose-200/38";

  return (
    <motion.div
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${section.position.x}%`, top: `${section.position.y}%` }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {isSecret ? (
        <span
          className={`pointer-events-none absolute -inset-4 rounded-full border border-amber-100/20 bg-[radial-gradient(circle,rgba(251,191,36,0.16),transparent_62%)] ${isSecretUnlocked ? "opacity-100" : "opacity-45"}`}
          aria-hidden
        />
      ) : null}

      {isNext && !isDisabled ? <span className="pointer-events-none absolute -inset-3 animate-ping rounded-full border border-rose-200/35" aria-hidden /> : null}

      <motion.button
        type="button"
        onClick={() => onSelect(section)}
        disabled={isDisabled}
        aria-label={`Abrir sección ${section.fullTitle}`}
        whileHover={isDisabled ? undefined : { scale: 1.08 }}
        whileTap={isDisabled ? undefined : { scale: 0.95 }}
        animate={isNext && !isDisabled ? { scale: [1, 1.07, 1] } : undefined}
        transition={isNext && !isDisabled ? { duration: 2.2, repeat: Infinity } : undefined}
        className={`${SIZE_CLASS[section.size]} relative rounded-full border ${ACCENT_GLOW[section.accent]} transition ${starTone} ${
          isDisabled ? "cursor-not-allowed opacity-65" : "cursor-pointer"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]`}
      >
        <span className="absolute inset-0 rounded-full bg-white/35 blur-[6px]" aria-hidden />
        <span className={`absolute inset-[22%] rounded-full bg-white/80 ${isVisited ? "shadow-[0_0_18px_rgba(255,255,255,0.85)]" : ""}`} aria-hidden />
      </motion.button>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] z-20 w-48 -translate-x-1/2 text-center opacity-90 transition group-hover:opacity-100 group-focus-within:opacity-100 lg:w-56">
        <p className="rounded-full border border-violet-100/18 bg-[#090615]/60 px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-violet-100/80 backdrop-blur-sm">
          {isVisited ? "Visitada · " : isNext && !isDisabled ? "Próxima · " : ""}
          {section.title}
        </p>
        <div className="mt-2 rounded-xl border border-violet-100/16 bg-[#120d28]/86 p-2 opacity-0 shadow-[0_0_18px_rgba(244,114,182,0.22)] backdrop-blur-md transition group-hover:opacity-100 group-focus-within:opacity-100">
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/75">{section.fullTitle}</p>
          <p className="mt-1 text-xs text-violet-100/85">{secretLocked ? "Completá las demás estrellas para encender este centro." : section.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
