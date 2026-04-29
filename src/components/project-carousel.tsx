"use client";

import type { CSSProperties } from "react";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="project-stage mx-auto mt-16 w-full max-w-7xl md:mt-20"
      initial={false}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="project-orbit">
        {projects.map((project, index) => {
          const angle = (360 / projects.length) * index;
          const style = {
            "--slot-rotation": `${angle}deg`
          } as CSSProperties;

          return (
            <div className="project-slot" key={project.slug} style={style}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
