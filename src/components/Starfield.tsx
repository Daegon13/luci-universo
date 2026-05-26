import { motion } from "framer-motion";

type Star = {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
};

const STAR_COUNT = 48;

function seededValue(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const stars: Star[] = Array.from({ length: STAR_COUNT }, (_, id) => ({
  id,
  size: Number((seededValue(id, 1) * 2.5 + 1).toFixed(2)),
  top: `${Number((seededValue(id, 2) * 100).toFixed(2))}%`,
  left: `${Number((seededValue(id, 3) * 100).toFixed(2))}%`,
  duration: Number((seededValue(id, 4) * 3 + 2).toFixed(2)),
  delay: Number((seededValue(id, 5) * 2).toFixed(2)),
}));

export function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2d1f56_0%,_#130f2a_38%,_#090612_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(244,165,255,0.15),_transparent_40%),radial-gradient(circle_at_80%_10%,_rgba(173,216,255,0.16),_transparent_36%),radial-gradient(circle_at_50%_90%,_rgba(255,224,180,0.14),_transparent_42%)]" />
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white/90"
          style={{ width: star.size, height: star.size, top: star.top, left: star.left }}
          animate={{ opacity: [0.25, 0.9, 0.3], scale: [1, 1.35, 1] }}
          transition={{ duration: star.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: star.delay }}
        />
      ))}
    </div>
  );
}
