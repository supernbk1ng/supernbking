"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { BlogPost } from "@/data/posts";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
        ease: "easeOut"
      }}
    >
      <Link
        className="group relative block rounded-[4px] border border-graphite/8 bg-white/80 p-6 pl-[calc(1.5rem-2px)] transition-all duration-300 before:absolute before:inset-y-3 before:left-0 before:w-[2px] before:rounded-full before:bg-transparent before:transition-colors before:duration-300 hover:border-graphite/20 hover:bg-white hover:shadow-[0_8px_32px_rgba(21,23,29,0.08)] hover:before:bg-ink-blue/45 sm:p-8 sm:pl-[calc(2rem-2px)]"
        href={`/blog/${post.slug}`}
      >
        <div className="flex flex-wrap items-center gap-3 font-mono text-[0.75rem] font-semibold uppercase text-graphite/50">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })}
          </time>
          <span className="text-graphite/25" aria-hidden="true">
            /
          </span>
          <span className="rounded-[4px] border border-graphite/12 bg-graphite/[0.03] px-2 py-0.5 text-graphite/60">
            {post.category}
          </span>
          <span className="text-graphite/25" aria-hidden="true">
            /
          </span>
          <span>{post.readingTime} min read</span>
        </div>

        <h2 className="mt-4 font-display text-2xl italic leading-tight text-graphite transition-colors group-hover:text-graphite/85 sm:text-3xl">
          {post.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-graphite/58">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              className="font-mono text-[0.72rem] font-medium uppercase text-graphite/40"
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
