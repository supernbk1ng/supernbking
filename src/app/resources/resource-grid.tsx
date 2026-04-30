"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ResourceCard } from "@/components/resource-card";
import {
  mockResources,
  resourceCategories,
  type ResourceCategory
} from "@/data/resources";

export function ResourceGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ResourceCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = activeCategory
      ? mockResources.filter((r) => r.category === activeCategory)
      : mockResources;

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <div className="relative mt-12">
        <input
          aria-label="Search resources"
          className="w-full rounded-[4px] border border-graphite/12 bg-white px-4 py-3 font-mono text-[0.78rem] text-graphite placeholder:text-graphite/35 transition-all duration-300 focus:border-ink-blue/40 focus:outline-none focus:ring-2 focus:ring-ink-blue/8 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:border-blue-400/50 dark:focus:ring-blue-400/10"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search resources..."
          type="search"
          value={searchQuery}
        />
        {searchQuery && (
          <button
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-base text-graphite/30 transition-colors hover:text-graphite/60 dark:text-gray-500 dark:hover:text-gray-300"
            onClick={() => setSearchQuery("")}
            type="button"
          >
            &times;
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className={`rounded-[4px] border px-4 py-2 font-mono text-[0.75rem] font-semibold uppercase transition-colors ${
            activeCategory === null
              ? "border-ink-blue/50 bg-ink-blue text-white dark:border-blue-400/50 dark:bg-blue-600"
              : "border-graphite/12 bg-white text-graphite/56 hover:border-ink-blue/25 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
          }`}
          onClick={() => setActiveCategory(null)}
          type="button"
        >
          All
        </button>
        {resourceCategories.map((cat) => (
          <button
            className={`rounded-[4px] border px-4 py-2 font-mono text-[0.75rem] font-semibold uppercase transition-colors ${
              activeCategory === cat
                ? "border-ink-blue/50 bg-ink-blue text-white dark:border-blue-400/50 dark:bg-blue-600"
                : "border-graphite/12 bg-white text-graphite/56 hover:border-ink-blue/25 hover:text-ink-blue dark:border-white/10 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-400/30 dark:hover:text-blue-400"
            }`}
            key={cat}
            onClick={() => setActiveCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            filtered.map((resource, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                initial={{ opacity: 0, y: 12 }}
                key={resource.name}
                transition={{ duration: 0.3 }}
              >
                <ResourceCard index={index} resource={resource} />
              </motion.div>
            ))
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center"
              initial={{ opacity: 0 }}
            >
              <p className="font-mono text-base text-graphite/40 dark:text-gray-500">
                {searchQuery
                  ? "No resources match your search."
                  : "该分类暂无资源"}
              </p>
              {searchQuery && (
                <button
                  className="mt-4 font-mono text-[0.78rem] text-ink-blue/70 underline underline-offset-4 transition-colors hover:text-ink-blue dark:text-blue-400/70 dark:hover:text-blue-400"
                  onClick={() => setSearchQuery("")}
                  type="button"
                >
                  Clear search
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
