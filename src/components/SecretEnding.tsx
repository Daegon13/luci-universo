"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StarBurst } from "@/components/StarBurst";

const FALLING_STARS = ["left-[12%]", "left-[26%]", "left-[48%]", "left-[70%]", "left-[86%]"];

export function SecretEnding() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-100/20 bg-amber-100/[0.025] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_50%_78%,rgba(244,114,182,0.10),transparent_38%)]" aria-hidden />
      <StarBurst active className="left-1/2 top-14 h-12 w-12 -translate-x-1/2" />
      {!reduceMotion
        ? FALLING_STARS.map((position, index) => (
            <motion.span
              key={position}
              className={`pointer-events-none absolute top-0 h-1.5 w-1.5 rounded-full bg-amber-100 shadow-[0_0_14px_rgba(254,240,138,0.95)] ${position}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 90, 160], opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, delay: index * 0.22, repeat: 1, repeatDelay: 0.5, ease: "easeIn" }}
              aria-hidden
            />
          ))
        : null}

      <motion.div className="relative space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.55 }}>
        <p className="text-xs uppercase tracking-[0.2em] text-rose-200/85">Centro secreto</p>
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Feliz cumpleaños, mi amor.</h3>
        <div className="space-y-4 text-sm leading-relaxed text-violet-100/90 sm:text-base">
          <p>
            No hice esta web para mostrarte lo que sé hacer. La hice porque a veces el amor necesita una forma,
            una casa, una canción, una estrella donde quedarse.
          </p>
          <p>
            Vos sos mi sol, mi luna y mis estrellas. Sos mi hogar, mi equipo, mi destino improbable, mi caos
            favorito y mi paz más verdadera.
          </p>
          <p>
            Gracias por existir en mi vida. Gracias por elegirme. Gracias por ser vos.
          </p>
          <p>Te amo hasta que la última estrella del universo se apague.</p>
        </div>
        <p className="pt-2 text-right text-sm text-rose-100">Con amor,<br />Diego.</p>
      </motion.div>
    </div>
  );
}
