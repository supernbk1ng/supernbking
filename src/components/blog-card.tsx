"use client";

import Image from "next/image";
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
        className="group relative block overflow-hidden rounded-[4px] border border-graphite/8 bg-white/80 p-6 pl-[calc(1.5rem-2px)] transition-all duration-300 before:absolute before:inset-y-3 before:left-0 before:w-[2px] before:rounded-full before:bg-transparent before:transition-colors before:duration-300 hover:border-graphite/20 hover:bg-white hover:shadow-[0_8px_32px_rgba(21,23,29,0.08)] hover:before:bg-ink-blue/45 dark:border-white/8 dark:bg-gray-900/80 dark:hover:border-white/15 dark:hover:bg-gray-900 dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.32)] dark:hover:before:bg-blue-400/50 sm:p-8 sm:pl-[calc(2rem-2px)]"
        href={`/blog/${post.slug}`}
      >
        {post.coverImage && (
          <div className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden sm:-mx-8 sm:-mt-8">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 700px"
              src={post.coverImage}
            />
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[0.75rem] font-semibold uppercase text-graphite/50 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })}
          </time>
          <span className="text-graphite/25 dark:text-gray-600" aria-hidden="true">
            /
          </span>
          <span className="rounded-[4px] border border-graphite/12 bg-graphite/[0.03] px-2 py-0.5 text-graphite/60 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400">
            {post.category}
          </span>
          <span className="text-graphite/25 dark:text-gray-600" aria-hidden="true">
            /
          </span>
          <span>{post.readingTime} min read</span>
        </div>

        <h2 className="mt-4 font-display text-2xl italic leading-tight text-graphite transition-colors group-hover:text-graphite/85 dark:text-white dark:group-hover:text-white/80 sm:text-3xl">
          {post.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-graphite/58 dark:text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              className="font-mono text-[0.72rem] font-medium uppercase text-graphite/40 transition-colors hover:text-ink-blue dark:text-gray-500 dark:hover:text-blue-400"
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              key={tag}
              onClick={(e) => e.stopPropagation()}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
