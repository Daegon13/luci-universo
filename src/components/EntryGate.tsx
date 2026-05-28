"use client";

import { FormEvent, KeyboardEvent, TouchEvent, useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const ACCESS_KEY = "mi sol luna y mis estrellas";
const SUBMIT_DEDUPE_MS = 350;

export function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [passphrase, setPassphrase] = useState("");
  const [error, setError] = useState("");
  const lastSubmitAtRef = useRef(0);
  const isReady = useMemo(() => passphrase.trim().length > 0, [passphrase]);

  const attemptEnter = useCallback(() => {
    const now = Date.now();

    if (now - lastSubmitAtRef.current < SUBMIT_DEDUPE_MS) {
      return;
    }

    lastSubmitAtRef.current = now;

    const normalizedPassphrase = passphrase.trim().toLowerCase();

    if (normalizedPassphrase === ACCESS_KEY) {
      setError("");
      onEnter();
      return;
    }

    setError("Esa no es nuestra clave. Probá con la frase de nuestros votos.");
  }, [onEnter, passphrase]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    attemptEnter();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      attemptEnter();
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();
    attemptEnter();
  };

  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="pointer-events-auto relative z-20 mx-auto w-full max-w-xl rounded-3xl border border-white/15 bg-[#120d26]/80 p-6 shadow-[0_0_50px_rgba(107,65,188,0.35)] backdrop-blur-md sm:p-10"
    >
      <p className="text-sm uppercase tracking-[0.24em] text-rose-200/85">La Puerta Estelar</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Luci: Mi Sol, Mi Luna y Mis Estrellas</h1>
      <p className="mt-4 text-base leading-relaxed text-violet-100/90 sm:text-lg">
        Luci Jennifer Mayada Aragonés, este universo fue creado con todo lo que amo de vos.
      </p>

      <form onSubmit={handleSubmit} className="pointer-events-auto relative z-10 mt-8 space-y-4">
        <label htmlFor="symbolic-key" className="text-sm text-violet-100/90">
          Escribí nuestra clave simbólica para entrar.
        </label>
        <input
          id="symbolic-key"
          name="symbolicKey"
          value={passphrase}
          onChange={(event) => setPassphrase(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="mi sol luna y mis estrellas"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          className="w-full rounded-2xl border border-violet-200/30 bg-violet-950/70 px-4 py-3 text-white placeholder:text-violet-300/70 focus:border-rose-200/70 focus:outline-none focus:ring-2 focus:ring-rose-300/35"
        />
        {error ? <p className="text-sm text-rose-200">{error}</p> : null}

        <button
          type="submit"
          aria-disabled={!isReady}
          onClick={() => attemptEnter()}
          onTouchEnd={handleTouchEnd}
          className={`w-full rounded-2xl bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-200 px-4 py-3 font-semibold text-[#1a1233] transition hover:brightness-110 ${
            isReady ? "" : "cursor-not-allowed opacity-60"
          }`}
        >
          Entrar a nuestro universo
        </button>
      </form>
    </motion.section>
  );
}
