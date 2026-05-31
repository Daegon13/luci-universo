"use client";

import Image from "next/image";
import { memo, useEffect, useMemo, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { MagicShimmer } from "@/components/MagicShimmer";

type MagicImageFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
  variant?: "wedding" | "cat" | "memory" | "sky" | "secret";
  sizes?: string;
};

const VARIANT_CLASS = {
  wedding: "border-amber-100/25 shadow-[0_0_34px_rgba(251,191,36,0.13)]",
  cat: "border-sky-100/25 shadow-[0_0_34px_rgba(96,165,250,0.13)]",
  memory: "border-rose-100/25 shadow-[0_0_34px_rgba(244,114,182,0.13)]",
  sky: "border-violet-100/25 shadow-[0_0_38px_rgba(125,211,252,0.14)]",
  secret: "border-amber-100/35 shadow-[0_0_42px_rgba(251,191,36,0.18)]",
};

export const MagicImageFrame = memo(function MagicImageFrame({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  aspectRatio = "aspect-[4/3]",
  variant = "memory",
  sizes = "(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 760px",
}: MagicImageFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const reduceMotion = useReducedMotion();
  const fallbackStars = useMemo(() => ["left-[14%] top-[22%]", "left-[34%] top-[72%]", "left-[70%] top-[26%]", "left-[86%] top-[68%]"], []);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <figure key={src} className={`group relative overflow-hidden rounded-3xl border bg-[#100b23]/88 p-2 ${VARIANT_CLASS[variant]} ${className}`}>
      <m.div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#070815] ${aspectRatio}`}
        whileHover={!reduceMotion ? { scale: 1.01 } : undefined}
        whileTap={!reduceMotion ? { scale: 0.992 } : undefined}
      >
        <span className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.12),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden />
        {!hasError ? (
          <>
            {!isLoaded ? <MagicShimmer className="absolute inset-0" roundedClassName="rounded-2xl" label="Invocando recuerdo…" /> : null}
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className={`object-cover transition duration-700 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.015]"}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          </>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.16),transparent_42%),radial-gradient(circle_at_75%_78%,rgba(59,130,246,0.2),transparent_44%),linear-gradient(180deg,#060914,#120d26)] p-5 text-center">
            {fallbackStars.map((star) => (
              <span key={star} className={`absolute h-1.5 w-1.5 rounded-full bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.8)] ${star}`} aria-hidden />
            ))}
            <div className="relative">
              <p className="text-sm font-medium text-violet-50">Recuerdo en preparación</p>
              <p className="mt-1 text-xs text-violet-200/75">{src}</p>
            </div>
          </div>
        )}
      </m.div>
      {caption ? <figcaption className="px-2 py-3 text-xs leading-relaxed text-violet-100/82 sm:text-sm">{caption}</figcaption> : null}
    </figure>
  );
});
