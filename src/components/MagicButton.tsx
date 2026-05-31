"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { MagicLoading } from "@/components/MagicLoading";
import type { PerformanceMode } from "@/hooks/usePerformanceMode";

type MagicButtonProps = Omit<ComponentPropsWithoutRef<"button">, "disabled"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "secret";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  loadingLabel?: string;
  performanceMode?: PerformanceMode;
};

const VARIANT_CLASS = {
  primary:
    "border-rose-100/35 bg-gradient-to-r from-violet-300/95 via-fuchsia-200/95 to-amber-100/95 text-[#1a1233] shadow-[0_0_30px_rgba(244,114,182,0.22)]",
  secondary:
    "border-violet-100/30 bg-violet-950/45 text-violet-50 shadow-[0_0_22px_rgba(167,139,250,0.14)] hover:border-rose-200/45",
  ghost: "border-violet-100/20 bg-white/[0.035] text-violet-50 hover:border-violet-100/40 hover:bg-white/[0.06]",
  danger: "border-rose-200/35 bg-rose-950/35 text-rose-100 shadow-[0_0_22px_rgba(244,63,94,0.16)] hover:border-rose-100/55",
  secret:
    "border-amber-100/45 bg-gradient-to-r from-amber-100/20 via-rose-200/18 to-violet-200/16 text-amber-50 shadow-[0_0_34px_rgba(251,191,36,0.2)] hover:border-amber-100/70",
};

const SIZE_CLASS = {
  sm: "min-h-9 px-3 py-2 text-xs",
  md: "min-h-11 px-4 py-2.5 text-sm",
  lg: "min-h-12 px-5 py-3 text-base",
};

export function MagicButton({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  disabled = false,
  loadingLabel = "Alineando estrellas…",
  className = "",
  onClick,
  type = "button",
  performanceMode = "balanced",
  ...props
}: MagicButtonProps) {
  const reduceMotion = useReducedMotion();
  const isUnavailable = disabled || loading;
  const isLite = performanceMode === "lite";
  return (
    <button
      type={type}
      aria-disabled={isUnavailable}
      data-loading={loading ? "true" : undefined}
      onClick={(event) => {
        if (isUnavailable) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      className={`group relative inline-flex touch-manipulation select-none items-center justify-center gap-2 overflow-hidden rounded-2xl border font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512] ${!isUnavailable && !reduceMotion && !isLite ? "hover:scale-[1.018] active:scale-[0.97]" : !isUnavailable ? "active:scale-[0.99]" : ""} ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${isUnavailable ? "cursor-not-allowed opacity-62" : "cursor-pointer"} ${className}`}
      {...props}
    >
      {!isLite ? (
        <>
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.16)_42%,transparent_58%)] opacity-0 transition duration-500 group-hover:opacity-100 motion-reduce:hidden" aria-hidden />
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 group-hover:animate-[mystic-shimmer_1.8s_ease-in-out_1] group-hover:opacity-100 motion-reduce:hidden" aria-hidden />
        </>
      ) : null}
      {loading ? (
        <MagicLoading label={loadingLabel} size="sm" variant="portal" className="relative [&>span:last-child]:text-current" performanceMode={performanceMode} />
      ) : (
        <span className="relative inline-flex items-center justify-center gap-2">
          {icon ? <span className="shrink-0" aria-hidden>{icon}</span> : null}
          {children}
        </span>
      )}
    </button>
  );
}
