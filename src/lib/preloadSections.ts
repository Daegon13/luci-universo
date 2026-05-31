type IdleDeadlineLike = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: (deadline: IdleDeadlineLike) => void, options?: { timeout?: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const preloadHeavySections = () => {
  void Promise.allSettled([
    import("@/components/WeddingSection"),
    import("@/components/CatsSection"),
    import("@/components/VowsSection"),
    import("@/components/SecretEnding"),
    import("@/components/CelestialSnapshotSection"),
  ]);
};

export function scheduleSectionPreload() {
  if (typeof window === "undefined") return () => undefined;

  const idleWindow = window as WindowWithIdleCallback;

  if (idleWindow.requestIdleCallback) {
    const handle = idleWindow.requestIdleCallback(preloadHeavySections, { timeout: 4200 });
    return () => idleWindow.cancelIdleCallback?.(handle);
  }

  const timeout = window.setTimeout(preloadHeavySections, 1800);
  return () => window.clearTimeout(timeout);
}
