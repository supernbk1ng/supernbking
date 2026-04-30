"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Back to top"
      className={`back-to-top fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-graphite/12 bg-white font-mono text-base text-graphite/50 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-ink-blue/30 hover:text-ink-blue hover:shadow-[0_4px_20px_rgba(7,84,216,0.18)] dark:border-white/10 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={scrollToTop}
      type="button"
    >
      &uarr;
    </button>
  );
}
