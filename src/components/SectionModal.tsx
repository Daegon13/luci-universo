"use client";

import { AnimatePresence, motion } from "framer-motion";
import { OriginSection } from "@/components/OriginSection";
import { WeddingSection } from "@/components/WeddingSection";
import { VowsSection } from "@/components/VowsSection";
import { CatsSection } from "@/components/CatsSection";
import { FirstDanceSection } from "@/components/FirstDanceSection";
import { FutureSection } from "@/components/FutureSection";
import { SkySection } from "@/components/SkySection";
import type { UniverseSection } from "@/data/sections";

type SectionModalProps = {
  section: UniverseSection | null;
  onClose: () => void;
};

function SectionBody({ section }: { section: UniverseSection }) {
  if (section.id === "origin") {
    return <OriginSection />;
  }

  if (section.id === "wedding") {
    return <WeddingSection />;
  }

  if (section.id === "vows") {
    return <VowsSection />;
  }

  if (section.id === "cats") {
    return <CatsSection />;
  }

  if (section.id === "first-dance") {
    return <FirstDanceSection />;
  }

  if (section.id === "future") {
    return <FutureSection />;
  }

  if (section.id === "sky-luci") {
    return <SkySection initialEventId="luci-birth" />;
  }

  if (section.id === "sky-wedding") {
    return <SkySection initialEventId="wedding-apr-3" />;
  }

  return (
    <>
      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{section.title}</h3>
      <p className="mt-4 leading-relaxed text-violet-100/90">{section.description}</p>
      <p className="mt-4 text-sm text-violet-200/80">
        Esta estrella está lista para su sección completa en los siguientes patches emocionales.
      </p>
    </>
  );
}

export function SectionModal({ section, onClose }: SectionModalProps) {
  return (
    <AnimatePresence>
      {section ? (
        <motion.div
          className="fixed inset-0 z-40 flex items-end justify-center bg-[#05030c]/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl border border-violet-200/25 bg-[#120d26]/95 p-6 text-violet-50 shadow-[0_0_45px_rgba(90,65,170,0.45)] sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200/80">Bitácora estelar</p>
            <SectionBody section={section} />
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-2xl border border-violet-200/35 bg-violet-950/55 px-4 py-3 text-sm font-medium transition hover:border-rose-200/50"
            >
              Seguir recorriendo el universo
            </button>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
