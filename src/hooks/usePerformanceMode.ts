"use client";

import { useEffect, useState } from "react";

export type PerformanceMode = "full" | "balanced" | "lite";

type NavigatorWithSignals = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

function resolvePerformanceMode(): PerformanceMode {
  if (typeof window === "undefined") return "balanced";

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navigatorWithSignals = window.navigator as NavigatorWithSignals;
  const saveData = navigatorWithSignals.connection?.saveData === true;
  const hardwareConcurrency = navigatorWithSignals.hardwareConcurrency;

  if (reducedMotion || saveData) return "lite";
  if (isMobile && typeof hardwareConcurrency === "number" && hardwareConcurrency <= 4) return "lite";
  if (isMobile) return "balanced";

  return "full";
}

export function usePerformanceMode(): PerformanceMode {
  const [performanceMode, setPerformanceMode] = useState<PerformanceMode>("balanced");

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPerformanceMode(resolvePerformanceMode());

    update();
    mobileQuery.addEventListener("change", update);
    reducedMotionQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      reducedMotionQuery.removeEventListener("change", update);
    };
  }, []);

  return performanceMode;
}
