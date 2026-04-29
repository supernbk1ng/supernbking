"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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

  return (
    <header
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 font-mono font-semibold uppercase sm:px-8 lg:px-12",
        isDark
          ? "py-5 text-[0.75rem] text-white/[0.82]"
          : "py-6 text-[0.8rem] text-graphite/72"
      )}
    >
      <Link
        className={cn(
          "pointer-events-auto transition-colors duration-300",
          isDark
            ? "text-[0.8rem] hover:text-white"
            : "text-base hover:text-graphite"
        )}
        href="/"
      >
        PORTFOLIO 2026
      </Link>

      <nav
        className={cn(
          "pointer-events-auto items-center",
          isDark
            ? "absolute left-1/2 top-4 hidden -translate-x-1/2 gap-1 rounded-full border border-white/[0.16] bg-white/[0.07] px-3 py-2 shadow-[0_14px_48px_rgba(0,22,90,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md sm:flex"
            : "flex gap-6 md:gap-8"
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
                  : "transition-opacity hover:opacity-100",
                isActive &&
                  cn(
                    "opacity-100",
                    isDark ? "bg-white/[0.12] text-white" : "text-graphite"
                  ),
                !isActive && !isDark && "opacity-55"
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

      <div className="pointer-events-auto hidden items-center gap-4 sm:flex">
        <a
          className={cn(
            "rounded-full px-3 py-2 text-[0.8rem] transition duration-300",
            isDark
              ? "text-white/[0.72] hover:bg-white/10 hover:text-white"
              : "text-base opacity-55 hover:opacity-100"
          )}
          href="mailto:hello@example.com"
        >
          MAIL
        </a>
      </div>
    </header>
  );
}
