"use client";

import { useEffect, useState } from "react";

type TocItem = {
  heading: string;
  id: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = items.map((item) => slugify(item.heading));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }

  if (items.length === 0) return null;

  return (
    <>
      {/* mobile toggle */}
      <button
        aria-expanded={open}
        aria-label="Toggle table of contents"
        className="mb-6 flex w-full items-center justify-between rounded-[4px] border border-graphite/10 bg-white/80 px-4 py-3 font-mono text-[0.78rem] font-semibold uppercase text-graphite/55 transition-colors hover:border-ink-blue/20 dark:border-white/8 dark:bg-gray-800/80 dark:text-gray-400 lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        On this page
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>

      {/* mobile list */}
      {open && (
        <nav className="mb-8 rounded-[4px] border border-graphite/8 bg-white/80 p-4 dark:border-white/8 dark:bg-gray-800/80 lg:hidden">
          <ul className="space-y-2">
            {items.map((item) => {
              const id = slugify(item.heading);
              return (
                <li key={id}>
                  <button
                    className={`toc-link w-full text-left font-mono text-[0.72rem] leading-relaxed transition-colors ${
                      activeId === id
                        ? "text-ink-blue dark:text-blue-400"
                        : "text-graphite/50 hover:text-graphite/80 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                    onClick={() => handleClick(id)}
                    type="button"
                  >
                    {item.heading}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* desktop sticky sidebar */}
      <nav className="hidden lg:block">
        <p className="font-mono text-[0.72rem] font-semibold uppercase text-graphite/35 dark:text-gray-500">
          On this page
        </p>
        <ul className="mt-4 space-y-2.5 border-l border-graphite/10 pl-4 dark:border-white/10">
          {items.map((item) => {
            const id = slugify(item.heading);
            return (
              <li key={id}>
                <button
                  className={`toc-link block text-left font-mono text-[0.72rem] leading-relaxed transition-colors ${
                    activeId === id
                      ? "text-ink-blue dark:text-blue-400"
                      : "text-graphite/45 hover:text-graphite/75 dark:text-gray-450 dark:hover:text-gray-250"
                  }`}
                  onClick={() => handleClick(id)}
                  type="button"
                >
                  {item.heading}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
