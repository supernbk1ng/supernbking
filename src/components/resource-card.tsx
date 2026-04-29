"use client";

import { motion } from "framer-motion";

import type { Resource } from "@/data/resources";

type ResourceCardProps = {
  resource: Resource;
  index: number;
};

export function ResourceCard({ resource, index }: ResourceCardProps) {
  return (
    <motion.a
      animate={{ opacity: 1, y: 0 }}
      className="group relative block rounded-[4px] border border-graphite/8 bg-white/80 p-6 pl-[calc(1.5rem-2px)] transition-all duration-300 before:absolute before:inset-y-3 before:left-0 before:w-[2px] before:rounded-full before:bg-transparent before:transition-colors before:duration-300 hover:border-graphite/20 hover:bg-white hover:shadow-[0_8px_32px_rgba(21,23,29,0.08)] hover:before:bg-ink-blue/45 sm:p-7 sm:pl-[calc(1.75rem-2px)]"
      href={resource.url}
      initial={{ opacity: 0, y: 24 }}
      rel="noopener noreferrer"
      target="_blank"
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }}
    >
      <span className="font-mono text-[0.72rem] font-semibold uppercase text-graphite/45">
        {resource.category}
      </span>

      <div className="mt-2 flex items-start justify-between gap-4">
        <h3 className="font-display text-lg italic leading-snug text-graphite transition-colors group-hover:text-graphite/80">
          {resource.name}
        </h3>
        <span
          aria-hidden="true"
          className="mt-1 shrink-0 font-mono text-base text-graphite/25 transition-colors group-hover:text-graphite/45"
        >
          ↗
        </span>
      </div>

      <p className="mt-2 text-base leading-7 text-graphite/55">
        {resource.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {resource.tags.map((tag) => (
          <span
            className="font-mono text-[0.6rem] font-medium uppercase text-graphite/38"
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
