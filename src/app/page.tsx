"use client";

import { useEffect, useState } from "react";
import { EntryGate } from "@/components/EntryGate";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Starfield } from "@/components/Starfield";
import { sections } from "@/data/sections";

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
      {!hasEntered ? (
        <EntryGate onEnter={handleEnter} />
      ) : (
        <section className="relative z-10 mx-auto w-full max-w-2xl rounded-3xl border border-violet-100/20 bg-[#0f0b22]/75 p-6 text-violet-50 shadow-[0_0_45px_rgba(121,82,212,0.35)] backdrop-blur-md sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-200/85">Nuestro universo</p>
          <h2 className="mt-2 text-3xl font-semibold">Bienvenida al mapa estelar, mi amor ✨</h2>
          <p className="mt-4 text-violet-100/90">
            Este es el umbral del universo que vamos a seguir construyendo patch a patch. Ya abriste la puerta.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <article key={section.id} className="rounded-2xl border border-violet-200/20 bg-violet-950/40 p-4">
                <h3 className="font-medium text-violet-50">{section.title}</h3>
                <p className="mt-1 text-sm text-violet-100/80">{section.description}</p>
              </article>
            ))}
          </div>

          
        </section>
      )}
      {hasEntered ? <MusicPlayer hasUserInteracted={hasEntered} autoPlaySignal={autoPlaySignal} /> : null}
    </main>
  );
}
