"use client";

import { motion } from "framer-motion";
import { futurePromises } from "@/data/promises";

const accentClasses = {
  violet: "from-violet-400/40 to-violet-100/0",
  rose: "from-rose-300/40 to-rose-100/0",
  amber: "from-amber-300/40 to-amber-100/0",
  sky: "from-sky-300/40 to-sky-100/0",
};

export function FutureSection() {
  return (
    <div>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-violet-200/80">La Ventana al Espacio</p>
      <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Todo lo que todavía quiero vivir con vos</h3>
      <p className="mt-4 leading-relaxed text-violet-100/90">
        Algún día quiero mirar el espacio con vos desde una ventana. Y cuando pase, sé que voy a pensar lo mismo que
        pienso ahora: que de todos los milagros del universo, mi favorito fue encontrarte.
      </p>

      <motion.div
        className="relative mt-6 overflow-hidden rounded-3xl border border-violet-200/25 bg-[#0a1024]/85 p-5 shadow-[0_0_35px_rgba(125,109,220,0.3)] sm:p-6"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(165,180,252,0.22),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(251,207,232,0.2),transparent_45%),linear-gradient(to_bottom,rgba(6,10,24,0.2),rgba(6,10,24,0.85))]" />
        <div className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-violet-100/20" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-100/80">Promesa de futuro</p>
          <p className="mt-3 text-sm leading-relaxed text-violet-100/90 sm:text-base">
            Quiero construir un negocio con vos, una desarrolladora de software e inteligencia artificial, y también una
            vida donde tu magia tenga espacio para crecer en la dirección que elijas.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {futurePromises.map((promise, index) => (
              <motion.article
                key={promise.id}
                className="relative overflow-hidden rounded-2xl border border-violet-100/20 bg-violet-950/30 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b ${accentClasses[promise.accent]}`}
                />
                <h4 className="relative text-sm font-semibold text-violet-50 sm:text-base">{promise.title}</h4>
                <p className="relative mt-2 text-sm leading-relaxed text-violet-100/85">{promise.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
