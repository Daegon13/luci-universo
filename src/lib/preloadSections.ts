import type { PerformanceMode } from "@/hooks/usePerformanceMode";

type IdleDeadlineLike = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: (deadline: IdleDeadlineLike) => void, options?: { timeout?: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const preloadCoreSections = () => {
  void Promise.allSettled([import("@/components/WeddingSection"), import("@/components/CatsSection"), import("@/components/VowsSection")]);
};

const preloadFullSections = () => {
  void Promise.allSettled([
    import("@/components/WeddingSection"),
    import("@/components/CatsSection"),
    import("@/components/VowsSection"),
    import("@/components/SecretEnding"),
    import("@/components/CelestialSnapshotSection"),
  ]);
};

function scheduleIdle(callback: () => void, delay: number, timeout: number) {
  if (typeof window === "undefined") return () => undefined;

  const idleWindow = window as WindowWithIdleCallback;
  let idleHandle: number | undefined;
  const timeoutHandle = window.setTimeout(() => {
    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(callback, { timeout });
      return;
    }

    callback();
  }, delay);

  return () => {
    window.clearTimeout(timeoutHandle);
    if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
  };
}

export function preloadLiteCoreSections() {
  preloadCoreSections();
}

export function scheduleSectionPreload(performanceMode: PerformanceMode = "balanced") {
  if (typeof window === "undefined") return () => undefined;

  if (performanceMode === "full") {
    return scheduleIdle(preloadFullSections, 1200, 4200);
  }

  if (performanceMode === "balanced") {
    return scheduleIdle(preloadFullSections, 6000, 7200);
  }

  return scheduleIdle(preloadCoreSections, 9000, 10000);
}
