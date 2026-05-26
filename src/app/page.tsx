"use client";

import { useMemo, useState } from "react";
import { EntryGate } from "@/components/EntryGate";
import { GalaxyMap } from "@/components/GalaxyMap";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Starfield } from "@/components/Starfield";

const STORAGE_KEY = "luci-universo-has-entered";
const VISITED_SECTIONS_KEY = "luci-universo-visited-sections";

function getInitialHasEntered() {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "1") {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(VISITED_SECTIONS_KEY);
  }

  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export default function Home() {
  const [hasEntered, setHasEntered] = useState(getInitialHasEntered);
  const [autoPlaySignal, setAutoPlaySignal] = useState(0);

  useMemo(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("reset") === "1") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setAutoPlaySignal((prev) => prev + 1);
    window.localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden px-4 py-8 sm:px-6">
      <Starfield />
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center">
        {!hasEntered ? <EntryGate onEnter={handleEnter} /> : <GalaxyMap />}
      </div>
      {hasEntered ? <MusicPlayer hasUserInteracted={hasEntered} autoPlaySignal={autoPlaySignal} /> : null}
    </main>
  );
}
