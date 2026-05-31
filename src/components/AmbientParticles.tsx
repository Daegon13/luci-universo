import { memo, useMemo } from "react";
import { m, useReducedMotion } from "framer-motion";

type AmbientParticlesProps = {
  amount?: number;
  seedOffset?: number;
  compact?: boolean;
  paused?: boolean;
};

type Particle = {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

function seededValue(index: number, salt: number) {
  const x = Math.sin(index * 19.341 + salt * 61.79) * 43758.5453;
  return x - Math.floor(x);
}

function createParticles(amount: number, seedOffset: number): Particle[] {
  return Array.from({ length: amount }, (_, id) => ({
    id,
    top: `${Number((seededValue(id + seedOffset, 1) * 100).toFixed(2))}%`,
    left: `${Number((seededValue(id + seedOffset, 2) * 100).toFixed(2))}%`,
    size: Number((seededValue(id + seedOffset, 3) * 58 + 26).toFixed(2)),
    opacity: Number((seededValue(id + seedOffset, 4) * 0.16 + 0.07).toFixed(2)),
    duration: Number((seededValue(id + seedOffset, 5) * 16 + 18).toFixed(2)),
    delay: Number((seededValue(id + seedOffset, 6) * 6).toFixed(2)),
  }));
}

export const AmbientParticles = memo(function AmbientParticles({ amount = 26, seedOffset = 0, compact = false, paused = false }: AmbientParticlesProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const particles = useMemo(() => createParticles(amount, seedOffset), [amount, seedOffset]);

  if (amount <= 0) return null;

  return (
    <>
      {particles.map((particle) => (
        <m.span
          key={particle.id}
          className={`pointer-events-none absolute rounded-full bg-violet-100/20 ${compact ? "blur-lg" : "blur-2xl"}`}
          style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size, opacity: particle.opacity }}
          animate={
            reduceMotion || paused
              ? { opacity: particle.opacity, scale: 1 }
              : { opacity: [particle.opacity * 0.7, particle.opacity, particle.opacity * 0.8], scale: [1, 1.35, 1] }
          }
          transition={
            reduceMotion || paused
              ? { duration: 0 }
              : { duration: compact ? particle.duration + 10 : particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: particle.delay }
          }
        />
      ))}
    </>
  );
});
