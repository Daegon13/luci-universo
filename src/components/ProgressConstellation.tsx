"use client";

import { AnimatePresence, m } from "framer-motion";
import { StarBurst } from "@/components/StarBurst";

type ProgressConstellationProps = {
  visitedCount: number;
  totalCount: number;
  isSecretUnlocked: boolean;
};

export function ProgressConstellation({ visitedCount, totalCount, isSecretUnlocked }: ProgressConstellationProps) {
  const completion = Math.min(100, Math.round((visitedCount / totalCount) * 100));

  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl border border-violet-200/20 bg-[#120d28]/80 p-4 lg:mt-6 lg:flex lg:items-center lg:gap-6 lg:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_0%,rgba(251,191,36,0.08),transparent_24%)]" aria-hidden />
      {isSecretUnlocked ? <StarBurst active className="left-auto right-8 top-5 h-10 w-10" /> : null}
      <div className="relative lg:min-w-52">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-violet-200/80">Constelación de progreso</p>
        <p className="mt-1 text-xs text-violet-200/75">Tu travesía va iluminando el centro secreto.</p>
      </div>

      <div className="relative mt-3 flex-1 lg:mt-0">
        <div className="h-2 w-full overflow-hidden rounded-full bg-violet-200/15">
          <m.div
            className="h-full rounded-full bg-gradient-to-r from-rose-300 via-violet-300 to-sky-300 shadow-[0_0_18px_rgba(244,114,182,0.38)]"
            initial={false}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        </div>
        <p className="mt-3 text-sm text-violet-100/90">
          Visitaste <span className="font-semibold text-white">{visitedCount}</span> de <span className="font-semibold text-white">{totalCount}</span> estrellas principales.
        </p>
        <AnimatePresence mode="wait">
          <m.p
            key={isSecretUnlocked ? "complete" : "pending"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-xs text-violet-200/80"
          >
            {isSecretUnlocked ? "La constelación está completa. El Centro de Mi Universo ya está desbloqueado." : "Completá la travesía para desbloquear el centro secreto."}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
