"use client";

import { type RefObject, useEffect, useState } from "react";

const DEFAULT_IN_VIEW_OPTIONS: IntersectionObserverInit = { rootMargin: "120px 0px", threshold: 0.01 };

export function useInViewLite<T extends Element>(ref: RefObject<T | null>, options: IntersectionObserverInit = DEFAULT_IN_VIEW_OPTIONS) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options, ref]);

  return isInView;
}
