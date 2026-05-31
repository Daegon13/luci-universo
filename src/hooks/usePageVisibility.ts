"use client";

import { useEffect, useState } from "react";

export function usePageVisibility() {
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return isPageVisible;
}
