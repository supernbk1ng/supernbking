"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  variant?: "dark" | "light";
};

const navItems = [
  { href: "/projects", label: "WORKS" },
  { href: "/blog", label: "BLOG" },
  { href: "/resources", label: "RES" },
  { href: "/about", label: "ABOUT" }
];

export function SiteHeader({ variant = "dark" }: SiteHeaderProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 font-mono font-semibold uppercase sm:px-8 lg:px-12",
        isDark
          ? "py-5 text-[0.75rem] text-white/[0.82]"
          : "py-6 text-[0.8rem] text-graphite/72 dark:text-gray-300/70"
      )}
    >
      <Link
        className={cn(
          "pointer-events-auto transition-colors duration-300",
          isDark
            ? "text-[0.8rem] hover:text-white"
            : "text-base hover:text-graphite dark:hover:text-white"
        )}
        href="/"
      >
        PORTFOLIO 2026
      </Link>

      {/* desktop pill nav */}
      <nav
        className={cn(
          "pointer-events-auto items-center",
          isDark
            ? "absolute left-1/2 top-4 hidden -translate-x-1/2 gap-1 rounded-full border border-white/[0.16] bg-white/[0.07] px-3 py-2 shadow-[0_14px_48px_rgba(0,22,90,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md sm:flex"
            : "hidden gap-6 md:gap-8 sm:flex"
        )}
      >
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));

          return (
            <Link
              className={cn(
                "relative transition duration-300",
                isDark
                  ? "rounded-full px-4 py-2 text-white/[0.72] hover:bg-white/10 hover:text-white"
                  : "transition-opacity hover:opacity-100 dark:hover:opacity-100",
                isActive &&
                  cn(
                    "opacity-100",
                    isDark ? "bg-white/[0.12] text-white" : "text-graphite dark:text-white"
                  ),
                !isActive && !isDark && "opacity-55 dark:opacity-50"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
              {isActive && isDark ? (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/90" />
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* desktop right side */}
      <div className="pointer-events-auto hidden items-center gap-3 sm:flex">
        {!isDark && <ThemeToggle />}
        <a
          className={cn(
            "rounded-full px-3 py-2 text-[0.8rem] transition duration-300",
            isDark
              ? "text-white/[0.72] hover:bg-white/10 hover:text-white"
              : "text-base opacity-55 hover:opacity-100 dark:opacity-50 dark:hover:opacity-100"
          )}
          href="mailto:hello@example.com"
        >
          MAIL
        </a>
      </div>

      {/* mobile hamburger */}
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className={cn(
          "pointer-events-auto flex flex-col gap-[5px] p-2 sm:hidden",
          isDark ? "text-white" : "text-graphite dark:text-gray-300"
        )}
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
      >
        <span
          className={`block h-[2px] w-5 rounded-full transition-transform duration-300 ${
            isDark ? "bg-white" : "bg-current"
          } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`block h-[2px] w-5 rounded-full transition-opacity duration-300 ${
            isDark ? "bg-white" : "bg-current"
          } ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-[2px] w-5 rounded-full transition-transform duration-300 ${
            isDark ? "bg-white" : "bg-current"
          } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {/* mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-graphite/40 dark:bg-black/60 sm:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              animate={{ x: 0 }}
              className={`mobile-menu-panel absolute right-0 top-0 flex h-full w-64 flex-col px-6 py-8 ${
                isDark
                  ? "bg-ink-blue-deep/95 text-white"
                  : "bg-white/95 text-graphite dark:bg-gray-900/95 dark:text-gray-100"
              }`}
              exit={{ x: "100%" }}
              initial={{ x: "100%" }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.72rem] font-semibold uppercase opacity-60">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  className="p-1 opacity-60 transition-opacity hover:opacity-100"
                  onClick={() => setMenuOpen(false)}
                  type="button"
                >
                  <span className="text-lg">&times;</span>
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href + "/"));

                  return (
                    <Link
                      className={cn(
                        "rounded-[4px] px-4 py-3 font-mono text-[0.82rem] font-semibold transition-colors",
                        isActive
                          ? cn(
                              isDark
                                ? "bg-white/[0.10] text-white"
                                : "bg-ink-blue/[0.06] text-ink-blue dark:bg-blue-400/10 dark:text-blue-400"
                            )
                          : cn(
                              isDark
                                ? "text-white/55 hover:bg-white/[0.06] hover:text-white/85"
                                : "text-graphite/55 hover:bg-graphite/[0.04] hover:text-graphite dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                            )
                      )}
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4 border-t border-current/10 pt-6">
                <a
                  className={cn(
                    "block rounded-[4px] px-4 py-3 font-mono text-[0.78rem] font-semibold transition-colors",
                    isDark
                      ? "text-white/50 hover:bg-white/[0.06] hover:text-white/80"
                      : "text-graphite/50 hover:bg-graphite/[0.04] hover:text-graphite dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                  )}
                  href="mailto:hello@example.com"
                >
                  MAIL
                </a>
                <div className="px-4">
                  <ThemeToggle />
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
