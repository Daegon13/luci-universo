"use client";

import { m, useReducedMotion } from "framer-motion";
import { StarBurst } from "@/components/StarBurst";

const FALLING_STARS = ["left-[12%]", "left-[26%]", "left-[48%]", "left-[70%]", "left-[86%]"];

export function SecretEnding() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-100/20 bg-amber-100/[0.025] p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_50%_78%,rgba(244,114,182,0.10),transparent_38%)]" aria-hidden />
      <StarBurst active compact className="left-1/2 top-12 h-10 w-10 sm:top-14 sm:h-12 sm:w-12 -translate-x-1/2" />
      {!reduceMotion
        ? FALLING_STARS.map((position, index) => (
            <m.span
              key={position}
              className={`pointer-events-none absolute top-0 h-1.5 w-1.5 rounded-full bg-amber-100 shadow-[0_0_14px_rgba(254,240,138,0.95)] ${position}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 70, 125], opacity: [0, 0.85, 0] }}
              transition={{ duration: 2.1, delay: index * 0.2, repeat: 1, repeatDelay: 0.45, ease: "easeIn" }}
              aria-hidden
            />
          ))
        : null}

      <m.div className="relative space-y-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.55 }}>
        <p className="text-xs uppercase tracking-[0.2em] text-rose-200/85">Centro secreto</p>
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Feliz cumpleaños, mi amor.</h3>
        <div className="space-y-4 text-sm leading-relaxed text-violet-100/90 sm:text-base">
          <p>
            No hice esta web para mostrarte lo que sé hacer. La hice porque quería darte un lugar donde nuestra historia pudiera quedarse encendida.
          </p>
          <p>
            Vos sos mi sol, mi luna y mis estrellas. Sos mi hogar, mi equipo, mi destino improbable y la paz a la que siempre quiero volver.
          </p>
          <p>
            Gracias por cuidarme, por elegirme, por reírte conmigo, por traer tu magia a mi vida y por ser vos incluso en los días difíciles.
          </p>
          <p>Te amo hoy, en este cumpleaños, y te voy a amar hasta que la última estrella del universo se apague.</p>
        </div>
        <p className="pt-3 text-right text-sm text-rose-100">Con amor,<br />Diego.</p>
      </m.div>
    </div>
  );
}
