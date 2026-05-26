"use client";

import { motion } from "framer-motion";
import type { UniverseSection } from "@/data/sections";

const ACCENT_STYLES: Record<UniverseSection["accent"], string> = {
  violet: "from-violet-300/35 via-violet-400/15 to-transparent border-violet-200/40",
  rose: "from-rose-300/35 via-fuchsia-300/15 to-transparent border-rose-200/40",
  amber: "from-amber-200/35 via-yellow-300/15 to-transparent border-amber-100/40",
  sky: "from-sky-300/35 via-cyan-300/15 to-transparent border-sky-200/40",
};

type FloatingOrbProps = {
  section: UniverseSection;
  index: number;
  onSelect: (section: UniverseSection) => void;
  disabled?: boolean;
};

export function FloatingOrb({ section, index, onSelect, disabled = false }: FloatingOrbProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(section)}
      disabled={disabled}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`group relative overflow-hidden rounded-3xl border bg-[#100c23]/85 p-4 text-left shadow-[0_0_30px_rgba(98,71,170,0.35)] backdrop-blur-sm transition ${ACCENT_STYLES[section.accent]} ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-70 transition group-hover:opacity-100" />
      <div className="relative z-10">
        <p className="text-[0.62rem] uppercase tracking-[0.18em] text-violet-100/85">Estrella {index + 1}</p>
        <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{section.title}</h3>
        {disabled ? <p className="mt-2 text-xs text-rose-100/90">Desbloqueá esta estrella al visitar las demás.</p> : null}
      </div>
    </motion.button>
  );
}
