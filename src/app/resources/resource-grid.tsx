"use client";

import { useState } from "react";
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

  const filtered = activeCategory
    ? mockResources.filter((r) => r.category === activeCategory)
    : mockResources;

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-3">
        <button
          className={`rounded-[4px] border px-4 py-2 font-mono text-[0.75rem] font-semibold uppercase transition-colors ${
            activeCategory === null
              ? "border-ink-blue/50 bg-ink-blue text-white"
              : "border-graphite/12 bg-white text-graphite/56 hover:border-ink-blue/25 hover:text-ink-blue"
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
                ? "border-ink-blue/50 bg-ink-blue text-white"
                : "border-graphite/12 bg-white text-graphite/56 hover:border-ink-blue/25 hover:text-ink-blue"
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
            <motion.p
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center font-mono text-base text-graphite/40"
              initial={{ opacity: 0 }}
            >
              该分类暂无资源
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
