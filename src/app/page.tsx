"use client";

import { useEffect, useState } from "react";
import { EntryGate } from "@/components/EntryGate";
import { GalaxyMap } from "@/components/GalaxyMap";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Starfield } from "@/components/Starfield";

const STORAGE_KEY = "luci-universo-has-entered";
const VISITED_SECTIONS_KEY = "luci-universo-visited-sections";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
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

    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Entrar al universo no debe depender de localStorage en mobile/private mode.
    }

    setAutoPlaySignal((prev) => prev + 1);
  };

  return (
    <main className="relative isolate min-h-[100dvh] overflow-x-hidden px-3 pb-36 pt-4 sm:px-6 sm:pb-32 sm:pt-8">
      <Starfield />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col pt-2 sm:pt-0">
        {!hasEntered ? <EntryGate onEnter={handleEnter} /> : <GalaxyMap />}
      </div>
      {hasEntered ? <MusicPlayer hasUserInteracted={hasEntered} autoPlaySignal={autoPlaySignal} /> : null}
    </main>
  );
}
