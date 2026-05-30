"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { catGuardians } from "@/data/cats";

function MysticImageSkeleton({ label }: { label: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-violet-950 via-[#18102f] to-[#070512]" aria-hidden>
      <div className="absolute inset-0 rounded-2xl border border-rose-100/20 shadow-[inset_0_0_26px_rgba(244,114,182,0.08)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,180,0.15),transparent_48%),radial-gradient(circle_at_72%_72%,rgba(125,211,252,0.12),transparent_38%)]" />
      <div className="absolute inset-y-0 -left-1/2 w-1/2 animate-[mystic-shimmer_1.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-amber-100/10 to-transparent" />
      <span className="sr-only">Cargando {label}</span>
    </div>
  );
}

function CatImageCard({ label, src, alt }: { label: string; src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-violet-100/20 bg-gradient-to-br from-violet-900/35 via-[#1a1334] to-[#0e0a1e] p-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,180,0.12),transparent_55%)]" />
        <p className="relative text-sm text-violet-100/85">
          Placeholder cósmico · {label}
          <span className="mt-1 block text-xs text-violet-200/70">{src}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-violet-100/20">
      {!isLoaded ? <MysticImageSkeleton label={label} /> : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 520px"
        className={`object-cover transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export function CatsSection() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">Constelación familiar</p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Las Cinco Guardianas</h3>
        <p className="mt-3 leading-relaxed text-violet-100/90">
          Ellas son el corazón felino del hogar: cinco presencias distintas que cuidan este universo con ternura,
          misterio y alegría.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {catGuardians.map((cat, index) => (
          <motion.article
            key={cat.id}
            className="rounded-3xl border border-sky-100/25 bg-[#16102d]/90 p-4 shadow-[0_0_30px_rgba(96,165,250,0.12)] sm:p-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            whileHover={{ y: -2, scale: 1.01 }}
          >
            <CatImageCard label={cat.name} src={cat.imageSrc} alt={cat.imageAlt} />

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-100/85">{cat.title}</p>
              <h4 className="mt-1 text-xl font-semibold text-violet-50">{cat.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-violet-100/85">{cat.shortDescription}</p>
              <p className="mt-3 border-t border-violet-200/20 pt-3 text-sm leading-relaxed text-violet-100/80">
                {cat.extendedDescription}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
