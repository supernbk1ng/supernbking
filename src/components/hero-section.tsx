"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { PixelDecor } from "@/components/pixel-decor";
import { SiteHeader } from "@/components/site-header";

export function HeroSection() {
  return (
    <section className="home-grid relative isolate min-h-screen overflow-hidden bg-ink-blue text-white">
      <SiteHeader variant="dark" />

      <PixelDecor className="float-slow absolute left-[9%] top-[25%] z-[4] scale-75 opacity-80" />
      <PixelDecor className="float-soft absolute right-[9%] top-[19%] z-[4] hidden scale-[0.68] opacity-90 sm:block" />
      <PixelDecor className="float-delay absolute right-[17%] top-[38%] z-[4] hidden scale-[1.38] opacity-95 md:block" />
      <PixelDecor className="absolute bottom-[13%] left-[9%] z-[4] hidden scale-[0.72] opacity-80 sm:block" />
      <PixelDecor className="float-soft absolute bottom-[12%] right-[10%] z-[4] hidden scale-[0.7] opacity-[0.78] sm:block" />
      <PixelDecor
        className="float-delay absolute left-[29%] top-[12%] z-[4] hidden scale-[0.72] opacity-90 md:block"
        tone="spark"
      />
      <PixelDecor
        className="float-slow spark-blue absolute right-[22%] bottom-[27%] z-[4] hidden scale-[0.82] opacity-60 lg:block"
        tone="spark"
      />
      <PixelDecor
        className="absolute left-[50%] bottom-[26%] z-[4] hidden scale-[0.58] opacity-90 md:block"
        tone="spark"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center text-center">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[0.72rem] font-bold uppercase text-white/[0.68] sm:text-[0.78rem]"
            initial={false}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Creative Developer / CS Student
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="hero-title-glow mt-8 w-full origin-center font-display text-[2.75rem] font-normal italic leading-[0.86] text-white sm:mt-10 sm:text-[6rem] md:text-[8.5rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[14rem]"
            initial={false}
            transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
          >
            supernbking
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-[18rem] font-mono text-[0.82rem] leading-6 text-white/[0.58] sm:mt-7 sm:max-w-2xl sm:text-sm"
            initial={false}
            transition={{ delay: 0.14, duration: 0.55, ease: "easeOut" }}
          >
            Building projects, notes and resources with care.
          </motion.p>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto grid w-full max-w-5xl gap-5 font-mono text-[0.74rem] font-semibold uppercase text-white/[0.66] sm:grid-cols-[1fr_auto_1fr] sm:items-end sm:text-center"
          initial={false}
          transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
        >
          <div className="space-y-2 sm:text-left">
            <p className="text-white/[0.88]">Available for</p>
            <p>Internships · Spring 2026</p>
          </div>

          <Link
            className="group inline-flex w-fit items-center border-b border-white/[0.38] pb-2 text-[0.9rem] text-white transition-colors hover:border-white sm:mx-16"
            href="/projects"
          >
            View Works
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <div className="hidden space-y-2 sm:block sm:text-right">
            <p className="text-white/[0.88]">Based in</p>
            <p>ZJU Campus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
