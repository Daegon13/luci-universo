"use client";

import { memo } from "react";
import { m, useReducedMotion } from "framer-motion";
import { StarBurst } from "@/components/StarBurst";
import type { UniverseSection } from "@/data/sections";

type ConstellationStarProps = {
  section: UniverseSection;
  isVisited: boolean;
  isNext: boolean;
  isSelected?: boolean;
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

export const ConstellationStar = memo(function ConstellationStar({
  section,
  isVisited,
  isNext,
  isSelected = false,
  isSecretUnlocked,
  isDisabled,
  onSelect,
}: ConstellationStarProps) {
  const reduceMotion = useReducedMotion();
  const isSecret = section.importance === "secret";
  const secretLocked = isSecret && !isSecretUnlocked;

  const secretUnlockedTone = "border-amber-100/85 bg-gradient-to-br from-amber-100/75 via-rose-200/65 to-fuchsia-200/5";

  const starTone = secretLocked
    ? "border-violet-200/22 bg-violet-200/10"
    : isSecret && isSecretUnlocked
      ? secretUnlockedTone
      : isVisited
        ? "border-amber-50/90 bg-gradient-to-br from-amber-100/70 via-rose-200/65 to-violet-200/50"
        : "border-violet-100/60 bg-gradient-to-br from-white/65 via-violet-200/48 to-rose-200/38";

  return (
    <m.div
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${section.position.x}%`, top: `${section.position.y}%` }}
      animate={!reduceMotion && isSelected ? { y: [0, -4, 0] } : undefined}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {isSecret ? (
        <span
          className={`pointer-events-none absolute -inset-4 rounded-full border border-amber-100/20 bg-[radial-gradient(circle,rgba(251,191,36,0.16),transparent_62%)] ${isSecretUnlocked ? "opacity-100" : "opacity-45"}`}
          aria-hidden
        />
      ) : null}

      {isNext && !isDisabled ? <span className="pointer-events-none absolute -inset-3 animate-ping rounded-full border border-rose-200/35 motion-reduce:animate-none" aria-hidden /> : null}
      {isSelected || (isSecret && isSecretUnlocked) ? <StarBurst active className="-inset-1" compact /> : null}

      <m.button
        type="button"
        onClick={() => {
          if (!isDisabled) onSelect(section);
        }}
        aria-disabled={isDisabled}
        aria-label={`Abrir sección ${section.fullTitle}`}
        whileHover={isDisabled || reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={isDisabled || reduceMotion ? undefined : { scale: 0.94 }}
        animate={isNext && !isDisabled && !reduceMotion ? { scale: [1, 1.045, 1] } : undefined}
        transition={isNext && !isDisabled && !reduceMotion ? { duration: 3.4, repeat: Infinity } : undefined}
        className={`${SIZE_CLASS[section.size]} relative rounded-full border ${ACCENT_GLOW[section.accent]} transition ${starTone} ${
          isDisabled ? "cursor-not-allowed opacity-65" : "cursor-pointer active:brightness-125"
        } ${isSelected ? "ring-4 ring-amber-100/25" : ""} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]`}
      >
        <span className="absolute inset-0 rounded-full bg-white/35 blur-[6px]" aria-hidden />
        <span className={`absolute inset-[22%] rounded-full bg-white/80 ${isVisited ? "shadow-[0_0_20px_rgba(255,255,255,0.9)]" : ""}`} aria-hidden />
        {isVisited ? <span className="absolute -inset-1 rounded-full border border-amber-100/20 shadow-[0_0_24px_rgba(251,191,36,0.3)]" aria-hidden /> : null}
      </m.button>

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.55rem)] z-20 w-48 -translate-x-1/2 text-center opacity-90 transition group-hover:opacity-100 group-focus-within:opacity-100 lg:w-56">
        <p className="rounded-full border border-violet-100/18 bg-[#090615]/60 px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-violet-100/80 backdrop-blur-sm">
          {isVisited ? "Visitada · " : isNext && !isDisabled ? "Próxima · " : ""}
          {section.title}
        </p>
        <div className="mt-2 rounded-xl border border-violet-100/16 bg-[#120d28]/86 p-2 opacity-0 shadow-[0_0_18px_rgba(244,114,182,0.22)] backdrop-blur-md transition group-hover:opacity-100 group-focus-within:opacity-100">
          <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-200/75">{section.fullTitle}</p>
          <p className="mt-1 text-xs text-violet-100/85">{secretLocked ? "Todavía quedan estrellas por visitar." : section.description}</p>
        </div>
      </div>
    </m.div>
  );
});
