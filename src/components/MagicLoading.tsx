import { Sparkles } from "lucide-react";

type MagicLoadingProps = {
  label?: string;
  variant?: "stars" | "portal" | "memory" | "sky";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZE_CLASS = {
  sm: "h-8 w-8 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
};

const VARIANT_LABEL = {
  stars: "Encendiendo constelación…",
  portal: "Abriendo la puerta estelar…",
  memory: "Invocando recuerdo…",
  sky: "Alineando estrellas…",
};

const VARIANT_GLOW = {
  stars: "from-rose-200 via-violet-200 to-sky-200 shadow-[0_0_28px_rgba(244,114,182,0.28)]",
  portal: "from-amber-100 via-rose-200 to-violet-200 shadow-[0_0_34px_rgba(251,191,36,0.28)]",
  memory: "from-rose-100 via-amber-100 to-violet-200 shadow-[0_0_28px_rgba(251,207,232,0.25)]",
  sky: "from-sky-100 via-violet-200 to-amber-100 shadow-[0_0_28px_rgba(125,211,252,0.24)]",
};

export function MagicLoading({ label, variant = "stars", size = "md", className = "" }: MagicLoadingProps) {
  const resolvedLabel = label ?? VARIANT_LABEL[variant];

  return (
    <div className={`inline-flex items-center gap-3 text-violet-100/90 ${className}`} role="status" aria-live="polite">
      <span className={`${SIZE_CLASS[size]} relative inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${VARIANT_GLOW[variant]}`}>
        <span className="absolute inset-0 rounded-full border border-white/35 animate-[stellar-orbit_1.8s_linear_infinite] motion-reduce:animate-none" aria-hidden />
        <span className="absolute inset-1 rounded-full bg-[#120d26]/70 backdrop-blur-sm" aria-hidden />
        <Sparkles className="relative h-4 w-4 animate-pulse text-amber-100 motion-reduce:animate-none" aria-hidden />
      </span>
      <span className="text-sm font-medium tracking-wide">{resolvedLabel}</span>
    </div>
  );
}
