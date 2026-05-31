"use client";

import { FormEvent, KeyboardEvent, PointerEvent, useCallback, useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
import { MagicButton } from "@/components/MagicButton";
import { MagicLoading } from "@/components/MagicLoading";

const ACCESS_KEY = "mi sol luna y mis estrellas";
const SUBMIT_DEDUPE_MS = 350;

export function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [passphrase, setPassphrase] = useState("");
  const [error, setError] = useState("");
  const [isOpening, setIsOpening] = useState(false);
  const lastSubmitAtRef = useRef(0);
  const isReady = useMemo(() => passphrase.trim().length > 0, [passphrase]);

  const attemptEnter = useCallback(() => {
    const now = Date.now();

    if (now - lastSubmitAtRef.current < SUBMIT_DEDUPE_MS) {
      return;
    }

    lastSubmitAtRef.current = now;

    const normalizedPassphrase = passphrase.trim().toLowerCase();

    if (!normalizedPassphrase) {
      setError("Escribí nuestra frase para abrir la puerta.");
      return;
    }

    if (normalizedPassphrase === ACCESS_KEY) {
      setError("");
      setIsOpening(true);
      onEnter();
      return;
    }

    setError("Todavía no se abrió. Probá con la frase que nació en mis votos.");
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

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") {
      attemptEnter();
    }
  };

  return (
    <m.section
      initial={false}
      animate={{ opacity: isOpening ? 0.92 : 1, y: 0, scale: isOpening ? 0.985 : 1 }}
      transition={{ duration: 0.45 }}
      className="pointer-events-auto relative z-20 mx-auto w-full max-w-lg rounded-3xl border border-white/15 bg-[#120d26]/84 p-5 shadow-[0_0_34px_rgba(107,65,188,0.26)] backdrop-blur-md sm:max-w-xl sm:p-9"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-rose-200/85 sm:text-sm">La Puerta Estelar</p>
      <h1 className="mt-3 text-[1.7rem] font-semibold leading-tight text-white sm:text-4xl">Luci: Mi Sol, Mi Luna y Mis Estrellas</h1>
      <p className="mt-3 text-sm leading-relaxed text-violet-100/90 sm:mt-4 sm:text-lg">
        Luci Jennifer Mayada Aragonés, antes de entrar quiero que sepas algo: este universo nació de todo lo que amo de vos.
      </p>

      <form onSubmit={handleSubmit} className="pointer-events-auto relative z-10 mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        <label htmlFor="symbolic-key" className="text-sm text-violet-100/90">
          Escribí la frase que abre este universo.
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
          className="w-full rounded-2xl border border-violet-200/30 bg-violet-950/70 px-4 py-3.5 text-base text-white placeholder:text-violet-300/70 focus:border-rose-200/70 focus:outline-none focus:ring-2 focus:ring-rose-300/35"
        />
        {error ? <p className="text-sm text-rose-200">{error}</p> : null}

        {isOpening ? (
          <div className="rounded-2xl border border-amber-100/20 bg-amber-100/[0.05] px-4 py-3">
            <MagicLoading variant="portal" label="Abriendo nuestro cielo…" />
          </div>
        ) : null}

        <MagicButton
          type="submit"
          variant="primary"
          size="lg"
          aria-disabled={!isReady || isOpening}
          disabled={!isReady || isOpening}
          loading={isOpening}
          loadingLabel="Abriendo nuestro cielo…"
          onClick={attemptEnter}
          onPointerUp={handlePointerUp}
          className="w-full"
        >
          Entrar a nuestro universo
        </MagicButton>
      </form>
    </m.section>
  );
}
