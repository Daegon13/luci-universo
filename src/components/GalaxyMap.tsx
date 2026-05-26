"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FloatingOrb } from "@/components/FloatingOrb";
import { SectionModal } from "@/components/SectionModal";
import { sections, type UniverseSection } from "@/data/sections";

export function GalaxyMap() {
  const [selectedSection, setSelectedSection] = useState<UniverseSection | null>(null);

  const orbitLines = useMemo(() => ["h-40 w-40", "h-64 w-64", "h-80 w-80"], []);

  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl rounded-3xl border border-violet-100/20 bg-[#0f0b22]/70 p-5 shadow-[0_0_45px_rgba(121,82,212,0.32)] backdrop-blur-md sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-200/85">Nuestro universo</p>
      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Tocá una estrella para abrir un recuerdo</h2>
      <p className="mt-3 max-w-2xl text-sm text-violet-100/85 sm:text-base">
        Este mapa ya contiene las nueve puertas principales de la travesía. Cada orbe representa una parte sagrada de la historia de Diego y Luci.
      </p>

      <div className="relative mt-6 hidden min-h-[26rem] items-center justify-center lg:flex">
        {orbitLines.map((size, index) => (
          <motion.div
            key={size}
            className={`absolute rounded-full border border-violet-200/15 ${size}`}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 90 + index * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <div className="grid w-full max-w-4xl grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <FloatingOrb key={section.id} section={section} index={index} onSelect={setSelectedSection} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:hidden sm:grid-cols-2">
        {sections.map((section, index) => (
          <FloatingOrb key={section.id} section={section} index={index} onSelect={setSelectedSection} />
        ))}
      </div>

      <SectionModal section={selectedSection} onClose={() => setSelectedSection(null)} />
    </section>
  );
}
