"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BlogCard } from "@/components/blog-card";
import { blogCategories, mockPosts, type BlogCategory } from "@/data/posts";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(
    null
  );

  const filteredPosts = activeCategory
    ? mockPosts.filter((p) => p.category === activeCategory)
    : mockPosts;

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
            <motion.p
              animate={{ opacity: 1 }}
              className="py-16 text-center font-mono text-base text-graphite/40"
              initial={{ opacity: 0 }}
            >
              该分类暂无文章
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
