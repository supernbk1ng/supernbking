"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative rounded-full p-2 font-mono text-[0.8rem] transition-colors hover:bg-white/10"
      onClick={toggle}
      type="button"
    >
      <span className="block h-5 w-5 leading-5">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
