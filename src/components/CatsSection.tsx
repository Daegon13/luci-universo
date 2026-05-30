"use client";

import { motion } from "framer-motion";
import { catGuardians } from "@/data/cats";
import { MagicImageFrame } from "@/components/MagicImageFrame";

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
            <MagicImageFrame src={cat.imageSrc} alt={cat.imageAlt} variant="cat" caption={cat.title} className="rounded-2xl" />

            <div className="mt-4">
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
