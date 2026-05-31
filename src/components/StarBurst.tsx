"use client";

import { memo, useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

type StarBurstProps = {
  active?: boolean;
  className?: string;
  compact?: boolean;
};

const PARTICLES = [
  { x: -18, y: -16, d: 0 },
  { x: 18, y: -14, d: 0.05 },
  { x: -22, y: 8, d: 0.1 },
  { x: 20, y: 12, d: 0.15 },
  { x: 0, y: -24, d: 0.08 },
  { x: 2, y: 22, d: 0.18 },
];

function useCompactBurst(explicitCompact: boolean) {
  const [isCompact, setIsCompact] = useState(explicitCompact);

  useEffect(() => {
    if (explicitCompact) return;

    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsCompact(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [explicitCompact]);

  return explicitCompact || isCompact;
}

export const StarBurst = memo(function StarBurst({ active = true, className = "", compact = false }: StarBurstProps) {
  const reduceMotion = useReducedMotion();
  const isCompact = useCompactBurst(compact);
  const particles = isCompact ? PARTICLES.slice(0, 3) : PARTICLES;

  if (!active || reduceMotion) return null;

  return (
    <span className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {particles.map((particle) => (
        <m.span
          key={`${particle.x}-${particle.y}`}
          className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-amber-100 shadow-[0_0_10px_rgba(254,240,138,0.9)]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
          animate={{ x: particle.x, y: particle.y, opacity: [0, 1, 0], scale: [0.2, 1, 0.4] }}
          transition={{ duration: 1.15, delay: particle.d, repeat: Infinity, repeatDelay: isCompact ? 6.5 : 4.8, ease: "easeOut" }}
        />
      ))}
    </span>
  );
});
