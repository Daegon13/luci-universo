import { motion } from "framer-motion";

type Star = {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
};

type DustParticle = {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
};

const STAR_COUNT = 70;
const DUST_COUNT = 22;

function seededValue(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function createStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, (_, id) => ({
    id,
    size: Number((seededValue(id, 1) * 2.6 + 0.9).toFixed(2)),
    top: `${Number((seededValue(id, 2) * 100).toFixed(2))}%`,
    left: `${Number((seededValue(id, 3) * 100).toFixed(2))}%`,
    duration: Number((seededValue(id, 4) * 4.2 + 2.4).toFixed(2)),
    delay: Number((seededValue(id, 5) * 2.8).toFixed(2)),
    opacity: Number((seededValue(id, 6) * 0.6 + 0.25).toFixed(2)),
  }));
}

function createDustParticles(): DustParticle[] {
  return Array.from({ length: DUST_COUNT }, (_, id) => ({
    id,
    top: `${Number((seededValue(id, 11) * 100).toFixed(2))}%`,
    left: `${Number((seededValue(id, 12) * 100).toFixed(2))}%`,
    size: Number((seededValue(id, 13) * 40 + 28).toFixed(2)),
    duration: Number((seededValue(id, 14) * 10 + 16).toFixed(2)),
    delay: Number((seededValue(id, 15) * 8).toFixed(2)),
  }));
}

const stars = createStars();
const dustParticles = createDustParticles();

export function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2d1f56_0%,_#130f2a_36%,_#090612_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,_rgba(244,165,255,0.15),_transparent_38%),radial-gradient(circle_at_80%_10%,_rgba(173,216,255,0.14),_transparent_34%),radial-gradient(circle_at_50%_90%,_rgba(255,224,180,0.12),_transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.34)_100%)]" />

      {dustParticles.map((particle) => (
        <motion.span
          key={`dust-${particle.id}`}
          className="absolute rounded-full bg-violet-100/10 blur-xl"
          style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.3, 1] }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{ width: star.size, height: star.size, top: star.top, left: star.left, opacity: star.opacity }}
          animate={{ opacity: [star.opacity * 0.55, star.opacity, star.opacity * 0.65], scale: [1, 1.3, 1] }}
          transition={{ duration: star.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: star.delay }}
        />
      ))}
    </div>
  );
}
