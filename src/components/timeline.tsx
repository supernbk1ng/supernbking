"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-ink-blue/12 dark:bg-blue-400/15" aria-hidden="true" />

      <ol className="relative space-y-12">
        {items.map((item, index) => (
          <motion.li
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6"
            initial={{ opacity: 0, x: -16 }}
            key={`${item.year}-${item.title}`}
            transition={{
              delay: index * 0.12,
              duration: 0.45,
              ease: "easeOut"
            }}
          >
            <div className="relative mt-1.5 h-2 w-2 flex-none">
              <span className="absolute inset-0 rounded-full bg-ink-blue/25 dark:bg-blue-400/30" />
              <span className="absolute inset-0 rounded-full bg-ink-blue/55 dark:bg-blue-400/60" />
            </div>

            <div className="min-w-0">
              <span className="font-mono text-base font-semibold text-graphite/45 dark:text-gray-500">
                {item.year}
              </span>
              <h3 className="mt-1 font-display text-xl italic text-graphite dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-graphite/58 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
