import type { CSSProperties } from "react";

type MagicShimmerProps = {
  className?: string;
  label?: string;
  roundedClassName?: string;
  style?: CSSProperties;
};

export function MagicShimmer({ className = "", label = "Invocando recuerdo…", roundedClassName = "rounded-2xl", style }: MagicShimmerProps) {
  return (
    <div
      className={`pointer-events-none relative overflow-hidden bg-gradient-to-br from-violet-950 via-[#15102c] to-[#060713] ${roundedClassName} ${className}`}
      style={style}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(251,207,232,0.16),transparent_36%),radial-gradient(circle_at_78%_76%,rgba(125,211,252,0.13),transparent_42%)]" />
      <div className="absolute inset-0 border border-amber-100/15 shadow-[inset_0_0_28px_rgba(251,191,36,0.08)]" />
      <div className="absolute inset-y-0 -left-1/2 w-1/2 animate-[mystic-shimmer_1.9s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-rose-100/12 to-transparent motion-reduce:animate-none" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
