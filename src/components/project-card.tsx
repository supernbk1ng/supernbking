"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      aria-label={`Open ${project.title}`}
      className="group block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite/70"
      href={`/projects/${project.slug}`}
    >
      <motion.article
        className="relative h-full w-full overflow-hidden rounded-[4px] bg-white shadow-gallery"
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        whileHover={{ scale: 1.055, y: -8 }}
      >
        <div
          className="absolute inset-0"
          style={{ background: project.gradient }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.08)_55%,rgba(0,0,0,0.64)_100%)]" />

        <div className="absolute left-4 top-4 font-mono text-[0.72rem] font-semibold uppercase text-white/80">
          {project.category}
        </div>
        <div className="absolute right-4 top-4 font-mono text-[0.72rem] font-semibold text-white/76">
          {project.year}
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <h2 className="font-mono text-base font-bold uppercase text-white">
            {project.title}
          </h2>
          <p className="mt-1 text-base text-white/76">{project.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                className="rounded-[4px] border border-white/28 bg-white/14 px-2 py-1 font-mono text-[0.8rem] font-semibold uppercase text-white"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
