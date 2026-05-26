"use client";

type ProgressConstellationProps = {
  visitedCount: number;
  totalCount: number;
  isSecretUnlocked: boolean;
};

export function ProgressConstellation({ visitedCount, totalCount, isSecretUnlocked }: ProgressConstellationProps) {
  const completion = Math.min(100, Math.round((visitedCount / totalCount) * 100));

  return (
    <div className="mt-5 rounded-2xl border border-violet-200/20 bg-[#120d28]/80 p-4">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-violet-200/80">Constelación de progreso</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-violet-200/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-300 via-violet-300 to-sky-300 transition-all duration-500"
          style={{ width: `${completion}%` }}
        />
      </div>
      <p className="mt-3 text-sm text-violet-100/90">
        Visitaste <span className="font-semibold text-white">{visitedCount}</span> de <span className="font-semibold text-white">{totalCount}</span> estrellas principales.
      </p>
      <p className="mt-1 text-xs text-violet-200/80">
        {isSecretUnlocked
          ? "El Centro de Mi Universo ya está desbloqueado."
          : "Completá la travesía para desbloquear el centro secreto."}
      </p>
    </div>
  );
}
