"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BlogCard } from "@/components/blog-card";
import { blogCategories, mockPosts, type BlogCategory } from "@/data/posts";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let result = activeCategory
      ? mockPosts.filter((p) => p.category === activeCategory)
      : mockPosts;

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <div className="relative mt-12">
        <input
          aria-label="Search blog posts"
          className="w-full rounded-[4px] border border-graphite/12 bg-white px-4 py-3 font-mono text-[0.78rem] text-graphite placeholder:text-graphite/35 transition-all duration-300 focus:border-ink-blue/40 focus:outline-none focus:ring-2 focus:ring-ink-blue/8"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
          type="search"
          value={searchQuery}
        />
        {searchQuery && (
          <button
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-base text-graphite/30 transition-colors hover:text-graphite/60"
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
              ? "border-ink-blue/50 bg-ink-blue text-white"
              : "border-graphite/12 bg-white text-graphite/56 hover:border-ink-blue/25 hover:text-ink-blue"
          }`}
          onClick={() => setActiveCategory(null)}
          type="button"
        >
          All
        </button>
        {blogCategories.map((cat) => (
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

      <div className="mt-12 grid gap-6">
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                initial={{ opacity: 0, y: 12 }}
                key={post.slug}
                transition={{ duration: 0.3 }}
              >
                <BlogCard index={index} post={post} />
              </motion.div>
            ))
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              className="py-16 text-center"
              initial={{ opacity: 0 }}
            >
              <p className="font-mono text-base text-graphite/40">
                {searchQuery
                  ? "No posts match your search."
                  : "该分类暂无文章"}
              </p>
              {searchQuery && (
                <button
                  className="mt-4 font-mono text-[0.78rem] text-ink-blue/70 underline underline-offset-4 transition-colors hover:text-ink-blue"
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
