import { motion } from "framer-motion";
import { AmbientParticles } from "@/components/AmbientParticles";
import { NebulaGlow } from "@/components/NebulaGlow";

type StarLayer = "far" | "mid" | "hero";

type Star = {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  layer: StarLayer;
  hue: "white" | "gold" | "rose";
};

const STAR_COUNTS: Record<StarLayer, number> = {
  far: 125,
  mid: 58,
  hero: 14,
};

function seededValue(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function createStars(layer: StarLayer, offset: number): Star[] {
  const amount = STAR_COUNTS[layer];

  return Array.from({ length: amount }, (_, id) => {
    const baseId = id + offset;
    const sizeBase = layer === "far" ? 1.3 : layer === "mid" ? 2.2 : 3.8;
    const sizeVariance = layer === "far" ? 1.05 : layer === "mid" ? 1.7 : 2.6;
    const opacityBase = layer === "far" ? 0.2 : layer === "mid" ? 0.36 : 0.52;
    const opacityVariance = layer === "far" ? 0.3 : layer === "mid" ? 0.36 : 0.4;

    return {
      id: baseId,
      layer,
      size: Number((seededValue(baseId, 1) * sizeVariance + sizeBase).toFixed(2)),
      top: `${Number((seededValue(baseId, 2) * 100).toFixed(2))}%`,
      left: `${Number((seededValue(baseId, 3) * 100).toFixed(2))}%`,
      duration: Number((seededValue(baseId, 4) * 4.8 + (layer === "far" ? 6.5 : 4.2)).toFixed(2)),
      delay: Number((seededValue(baseId, 5) * 5.4).toFixed(2)),
      opacity: Number((seededValue(baseId, 6) * opacityVariance + opacityBase).toFixed(2)),
      hue: ((): Star["hue"] => {
        const value = seededValue(baseId, 7);
        if (value < 0.74) return "white";
        if (value < 0.88) return "gold";
        return "rose";
      })(),
    };
  });
}

const farStars = createStars("far", 0);
const midStars = createStars("mid", 500);
const heroStars = createStars("hero", 1000);

const STAR_TONE_CLASSES: Record<Star["hue"], string> = {
  white: "bg-white",
  gold: "bg-amber-100",
  rose: "bg-rose-100",
};

function StarLayerView({
  stars,
  drift,
  blur,
}: {
  stars: Star[];
  drift: [string, string, string];
  blur?: string;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ y: drift }}
      transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className={`absolute rounded-full ${STAR_TONE_CLASSES[star.hue]} ${blur ?? ""}`}
          style={{ width: star.size, height: star.size, top: star.top, left: star.left, opacity: star.opacity }}
          animate={{ opacity: [star.opacity * 0.52, star.opacity, star.opacity * 0.66], scale: [1, 1.28, 1] }}
          transition={{ duration: star.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: star.delay }}
        />
      ))}
    </motion.div>
  );
}

export function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2f2360_0%,_#191135_34%,_#080512_72%,_#04020b_100%)]" />
      <NebulaGlow />

      <AmbientParticles amount={24} seedOffset={0} />
      <AmbientParticles amount={14} seedOffset={260} />

      <StarLayerView stars={farStars} drift={["-0.5%", "0%", "0.6%"]} blur="blur-[0.2px]" />
      <StarLayerView stars={midStars} drift={["0%", "0.6%", "-0.3%"]} />
      <StarLayerView stars={heroStars} drift={["0.5%", "0%", "-0.5%"]} blur="shadow-[0_0_14px_rgba(255,230,214,0.35)]" />
    </div>
  );
}
