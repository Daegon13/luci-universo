"use client";

import { useEffect, useState } from "react";
import { EntryGate } from "@/components/EntryGate";
import { GalaxyMap } from "@/components/GalaxyMap";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Starfield } from "@/components/Starfield";

const STORAGE_KEY = "luci-universo-has-entered";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [autoPlaySignal, setAutoPlaySignal] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setHasEntered(true);
    }
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setAutoPlaySignal((prev) => prev + 1);
    window.localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <Starfield />
      {!hasEntered ? <EntryGate onEnter={handleEnter} /> : <GalaxyMap />}
      {hasEntered ? <MusicPlayer hasUserInteracted={hasEntered} autoPlaySignal={autoPlaySignal} /> : null}
    </main>
  );
}
