"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";

const ACCESS_KEYS = ["mi sol luna y mis estrellas", "mi sol, mi luna y mis estrellas", "mi sol luna y mis estrellas."];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [keyInput, setKeyInput] = useState("");
  const [error, setError] = useState("");
  const isReady = useMemo(() => keyInput.trim().length > 0, [keyInput]);

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const normalizedInput = normalize(keyInput);
    const isValidKey = ACCESS_KEYS.some((candidate) => normalize(candidate) === normalizedInput);

    if (isValidKey) {
      setError("");
      onEnter();
      return;
    }

    setError("Esa no es nuestra clave. Probá con la frase de nuestros votos.");
  };

  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-20 mx-auto w-full max-w-xl rounded-3xl border border-white/15 bg-[#120d26]/80 p-6 shadow-[0_0_50px_rgba(107,65,188,0.35)] backdrop-blur-md sm:p-10"
    >
      <p className="text-sm uppercase tracking-[0.24em] text-rose-200/85">La Puerta Estelar</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Luci: Mi Sol, Mi Luna y Mis Estrellas</h1>
      <p className="mt-4 text-base leading-relaxed text-violet-100/90 sm:text-lg">
        Luci Jennifer Mayada Aragonés, este universo fue creado con todo lo que amo de vos.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label htmlFor="symbolic-key" className="text-sm text-violet-100/90">
          Escribí nuestra clave simbólica para entrar.
        </label>
        <input
          id="symbolic-key"
          name="symbolicKey"
          value={keyInput}
          onChange={(event) => setKeyInput(event.target.value)}
          placeholder="mi sol luna y mis estrellas"
          autoComplete="off"
          className="w-full rounded-2xl border border-violet-200/30 bg-violet-950/70 px-4 py-3 text-white placeholder:text-violet-300/70 focus:border-rose-200/70 focus:outline-none focus:ring-2 focus:ring-rose-300/35"
        />
        {error ? <p className="text-sm text-rose-200">{error}</p> : null}

        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={!isReady}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-200 px-4 py-3 font-semibold text-[#1a1233] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Entrar a nuestro universo
        </button>
      </form>
    </motion.section>
  );
}
