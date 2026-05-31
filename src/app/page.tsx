"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { EntryGate } from "@/components/EntryGate";
import { GalaxyMap } from "@/components/GalaxyMap";
import { MagicLoading } from "@/components/MagicLoading";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Starfield } from "@/components/Starfield";

const STORAGE_KEY = "luci-universo-has-entered";
const VISITED_SECTIONS_KEY = "luci-universo-visited-sections";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isOpeningUniverse, setIsOpeningUniverse] = useState(false);
  const [autoPlaySignal, setAutoPlaySignal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldReset = params.get("reset") === "1";

    if (shouldReset) {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
        window.localStorage.removeItem(VISITED_SECTIONS_KEY);
      } catch {
        // La entrada debe seguir disponible aunque el almacenamiento local falle.
      }

      window.history.replaceState({}, "", window.location.pathname);
      return;
    }

    window.setTimeout(() => {
      try {
        setHasEntered(window.localStorage.getItem(STORAGE_KEY) === "true");
      } catch {
        setHasEntered(false);
      }
    }, 0);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setIsOpeningUniverse(true);

    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Entrar al universo no debe depender de localStorage en mobile/private mode.
    }

    setAutoPlaySignal((prev) => prev + 1);
    window.setTimeout(() => setIsOpeningUniverse(false), 900);
  };

  return (
    <main className="relative isolate min-h-[100dvh] overflow-x-hidden px-3 pb-40 pt-4 sm:px-6 sm:pb-32 sm:pt-8">
      <Starfield />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col pt-2 sm:pt-0">
        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <m.div key="entry" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.45 }}>
              <EntryGate onEnter={handleEnter} />
            </m.div>
          ) : (
            <m.div key="map" initial={{ opacity: 0, y: 18, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <GalaxyMap />
            </m.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpeningUniverse ? (
          <m.div
            className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center bg-[#05030c]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rounded-3xl border border-amber-100/20 bg-[#120d26]/80 px-5 py-4 shadow-[0_0_55px_rgba(251,191,36,0.18)] backdrop-blur-md">
              <MagicLoading variant="portal" size="lg" label="Abriendo la puerta estelar…" />
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>

      {hasEntered ? <MusicPlayer hasUserInteracted={hasEntered} autoPlaySignal={autoPlaySignal} /> : null}
    </main>
  );
}
