"use client";

import { useEffect, useState } from "react";

export function RouteProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-sky-light/60"
      role="progressbar"
      aria-label="Page route progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-sky via-sky-dark to-passport-red transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-[left] duration-150 ease-out text-base drop-shadow"
        style={{ left: `${progress}%` }}
        aria-hidden="true"
      >
        ✈️
      </div>
    </div>
  );
}
