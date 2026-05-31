"use client";

import dynamic from "next/dynamic";
import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { MagicButton } from "@/components/MagicButton";
import { MagicLoading } from "@/components/MagicLoading";
import type { UniverseSection } from "@/data/sections";
import type { PerformanceMode } from "@/hooks/usePerformanceMode";


const sectionLoading = () => (
  <div className="flex min-h-64 items-center justify-center rounded-3xl border border-violet-100/15 bg-[#0b0718]/42 p-6">
    <MagicLoading variant="portal" label="Invocando esta memoria…" />
  </div>
);

const OriginSection = dynamic(() => import("@/components/OriginSection").then((mod) => mod.OriginSection), { loading: sectionLoading });
const WeddingSection = dynamic(() => import("@/components/WeddingSection").then((mod) => mod.WeddingSection), { loading: sectionLoading });
const VowsSection = dynamic(() => import("@/components/VowsSection").then((mod) => mod.VowsSection), { loading: sectionLoading });
const CatsSection = dynamic(() => import("@/components/CatsSection").then((mod) => mod.CatsSection), { loading: sectionLoading });
const FirstDanceSection = dynamic(() => import("@/components/FirstDanceSection").then((mod) => mod.FirstDanceSection), { loading: sectionLoading });
const FutureSection = dynamic(() => import("@/components/FutureSection").then((mod) => mod.FutureSection), { loading: sectionLoading });
const CelestialSnapshotSection = dynamic(() => import("@/components/CelestialSnapshotSection").then((mod) => mod.CelestialSnapshotSection), {
  loading: sectionLoading,
});
const SecretEnding = dynamic(() => import("@/components/SecretEnding").then((mod) => mod.SecretEnding), { loading: sectionLoading });

type SectionModalProps = {
  section: UniverseSection | null;
  onClose: () => void;
  performanceMode?: PerformanceMode;
};

function SectionBody({ section }: { section: UniverseSection }) {
  if (section.id === "origin") return <OriginSection />;
  if (section.id === "wedding") return <WeddingSection />;
  if (section.id === "vows") return <VowsSection />;
  if (section.id === "cats") return <CatsSection />;
  if (section.id === "first-dance") return <FirstDanceSection />;
  if (section.id === "future") return <FutureSection />;
  if (section.id === "sky-luci") return <CelestialSnapshotSection initialEventId="luci-birth" />;
  if (section.id === "sky-wedding") return <CelestialSnapshotSection initialEventId="wedding-april-03" />;
  if (section.id === "secret-center") return <SecretEnding />;

  return null;
}

export function SectionModal({ section, onClose, performanceMode = "balanced" }: SectionModalProps) {
  const reduceMotion = useReducedMotion();
  const isLite = performanceMode === "lite";

  useEffect(() => {
    if (!section) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [onClose, section]);

  return (
    <AnimatePresence>
      {section ? (
        <m.div
          className={`fixed inset-0 z-40 flex items-end justify-center overflow-y-auto bg-[#05030c]/76 p-3 sm:items-center sm:p-4 ${isLite ? "" : "backdrop-blur-sm"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : isLite ? 0.14 : 0.22 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          {!isLite ? <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_50%_62%,rgba(168,85,247,0.14),transparent_42%)]" aria-hidden /> : null}
          <m.article
            initial={reduceMotion || isLite ? { opacity: 0, y: 12 } : { y: 34, opacity: 0, scale: 0.965 }}
            animate={reduceMotion || isLite ? { opacity: 1, y: 0 } : { y: 0, opacity: 1, scale: 1 }}
            exit={reduceMotion || isLite ? { opacity: 0, y: 8 } : { y: 18, opacity: 0, scale: 0.985 }}
            transition={{ duration: reduceMotion ? 0 : isLite ? 0.18 : 0.32, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className={`relative max-h-[88dvh] w-full max-w-2xl overflow-hidden rounded-3xl border border-violet-200/25 bg-[#120d26]/95 text-violet-50 sm:max-h-[88vh] lg:max-w-3xl ${isLite ? "shadow-[0_0_24px_rgba(90,65,170,0.28)]" : "shadow-[0_0_55px_rgba(90,65,170,0.5),0_0_90px_rgba(251,191,36,0.08)]"}`}
          >
            {!isLite ? <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(251,191,36,0.10),transparent_22%),radial-gradient(circle_at_88%_24%,rgba(244,114,182,0.08),transparent_26%)]" aria-hidden /> : null}
            <div className="sticky top-0 z-20 flex items-start justify-between gap-3 border-b border-violet-100/10 bg-[#120d26]/92 p-5 backdrop-blur-sm sm:backdrop-blur-md sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-200/80">Bitácora estelar</p>
              <MagicButton type="button" variant="ghost" size="sm" onClick={onClose} aria-label="Cerrar sección" className="h-10 w-10 rounded-full px-0" performanceMode={performanceMode}>
                <X className="h-5 w-5" />
              </MagicButton>
            </div>
            <div className="relative max-h-[calc(88dvh-5.5rem)] overflow-y-auto px-5 pb-5 pt-4 overscroll-contain sm:px-8 sm:pb-8 sm:pt-6">
              <SectionBody section={section} />
              <MagicButton type="button" variant="secondary" onClick={onClose} className="mt-6 w-full" performanceMode={performanceMode}>
                Seguir recorriendo el universo
              </MagicButton>
            </div>
          </m.article>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
