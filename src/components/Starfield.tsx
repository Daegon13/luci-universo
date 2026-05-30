"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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

const DESKTOP_STAR_COUNTS: Record<StarLayer, number> = {
  far: 230,
  mid: 120,
  hero: 38,
};

const MOBILE_STAR_COUNTS: Record<StarLayer, number> = {
  far: 118,
  mid: 34,
  hero: 14,
};

function seededValue(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function createStars(layer: StarLayer, offset: number, counts: Record<StarLayer, number>): Star[] {
  const amount = counts[layer];

  return Array.from({ length: amount }, (_, id) => {
    const baseId = id + offset;
    const sizeBase = layer === "far" ? 1.3 : layer === "mid" ? 2.2 : 3.8;
    const sizeVariance = layer === "far" ? 1.05 : layer === "mid" ? 1.7 : 2.6;
    const opacityBase = layer === "far" ? 0.34 : layer === "mid" ? 0.54 : 0.72;
    const opacityVariance = layer === "far" ? 0.4 : layer === "mid" ? 0.38 : 0.24;

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

const desktopStars = {
  far: createStars("far", 0, DESKTOP_STAR_COUNTS),
  mid: createStars("mid", 500, DESKTOP_STAR_COUNTS),
  hero: createStars("hero", 1000, DESKTOP_STAR_COUNTS),
};

const mobileStars = {
  far: createStars("far", 0, MOBILE_STAR_COUNTS),
  mid: createStars("mid", 500, MOBILE_STAR_COUNTS),
  hero: createStars("hero", 1000, MOBILE_STAR_COUNTS),
};

const STAR_TONE_CLASSES: Record<Star["hue"], string> = {
  white: "bg-white",
  gold: "bg-amber-100",
  rose: "bg-rose-100",
};

function useMobileStarfield() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function StaticStarLayer({ stars, blur }: { stars: Star[]; blur?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className={`pointer-events-none absolute rounded-full ${STAR_TONE_CLASSES[star.hue]} ${blur ?? ""}`}
          style={{ width: star.size, height: star.size, top: star.top, left: star.left, opacity: star.opacity }}
        />
      ))}
    </div>
  );
}

function DriftingStarLayer({
  stars,
  drift,
  blur,
  reduceMotion,
}: {
  stars: Star[];
  drift: [string, string, string];
  blur?: string;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      animate={reduceMotion ? { y: "0%" } : { y: drift }}
      transition={reduceMotion ? { duration: 0 } : { duration: 54, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <StaticStarLayer stars={stars} blur={blur} />
    </motion.div>
  );
}

function HeroStarLayer({ stars, drift, reduceMotion }: { stars: Star[]; drift: [string, string, string]; reduceMotion: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      animate={reduceMotion ? { y: "0%" } : { y: drift }}
      transition={reduceMotion ? { duration: 0 } : { duration: 46, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className={`pointer-events-none absolute rounded-full shadow-[0_0_22px_rgba(255,235,220,0.62)] ${STAR_TONE_CLASSES[star.hue]}`}
          style={{ width: star.size, height: star.size, top: star.top, left: star.left, opacity: star.opacity }}
          animate={
            reduceMotion
              ? { opacity: star.opacity, scale: 1 }
              : { opacity: [star.opacity * 0.58, star.opacity, star.opacity * 0.7], scale: [1, 1.22, 1] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: star.duration + 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: star.delay }
          }
        />
      ))}
    </motion.div>
  );
}

export function Starfield() {
  const reduceMotion = useReducedMotion() ?? false;
  const isMobile = useMobileStarfield();
  const stars = isMobile ? mobileStars : desktopStars;
  const firstParticleAmount = isMobile ? 14 : 40;
  const secondParticleAmount = isMobile ? 8 : 26;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(73,55,148,0.92)_0%,_rgba(25,18,57,0.9)_30%,_rgba(7,5,18,0.98)_70%,_#03020a_100%)]" />
      <NebulaGlow />

      <AmbientParticles amount={firstParticleAmount} seedOffset={0} />
      <AmbientParticles amount={secondParticleAmount} seedOffset={260} />

      <StaticStarLayer stars={stars.far} blur="blur-[0.1px]" />
      <DriftingStarLayer stars={stars.mid} drift={["0%", "0.6%", "-0.3%"]} reduceMotion={reduceMotion} />
      <HeroStarLayer stars={stars.hero} drift={["0.5%", "0%", "-0.5%"]} reduceMotion={reduceMotion} />
    </div>
  );
}
