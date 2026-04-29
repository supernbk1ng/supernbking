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
        "pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-6 font-mono text-[0.8rem] font-semibold uppercase sm:px-8 lg:px-12",
        isDark ? "text-white/82" : "text-graphite/72"
      )}
    >
      <Link
        className="pointer-events-auto text-base tracking-wide transition-opacity hover:opacity-70"
        href="/"
      >
        PORTFOLIO 2026
      </Link>

      <nav className="pointer-events-auto flex items-center gap-6 md:gap-8">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));

          return (
            <Link
              className={cn(
                "transition-opacity hover:opacity-100",
                isActive
                  ? cn(
                      "opacity-100",
                      isDark ? "text-white" : "text-graphite"
                    )
                  : "opacity-55"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-auto hidden items-center gap-4 sm:flex">
        <a
          className="text-base tracking-wide opacity-55 transition-opacity hover:opacity-100"
          href="mailto:hello@example.com"
        >
          MAIL
        </a>
      </div>
    </header>
  );
}
