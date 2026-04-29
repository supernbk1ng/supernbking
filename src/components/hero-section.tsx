"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { PixelDecor } from "@/components/pixel-decor";
import { SiteHeader } from "@/components/site-header";

export function HeroSection() {
  return (
    <section className="home-grid relative min-h-screen overflow-hidden bg-ink-blue text-white">
      <SiteHeader variant="dark" />

      <PixelDecor className="absolute left-[10%] top-[16%]" />
      <PixelDecor className="absolute right-[15%] top-[21%]" />
      <PixelDecor className="absolute bottom-[23%] right-[20%]" />
      <PixelDecor className="absolute bottom-[22%] left-[8%] scale-75" />
      <PixelDecor className="absolute left-[25%] top-[8%] scale-75" tone="spark" />
      <PixelDecor className="absolute left-[10%] top-[40%] scale-75" tone="spark" />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-10 max-w-5xl font-mono text-[0.72rem] font-bold uppercase text-white/72 sm:mb-12"
          initial={false}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Creative Developer / CS Student
        </motion.p>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-7xl origin-center text-center font-display text-[2.8rem] font-normal italic leading-none text-white sm:text-[5.2rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem]"
          initial={false}
          transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
        >
          supernbking
        </motion.h1>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-9 flex w-full max-w-5xl flex-col gap-6 font-mono text-[0.8rem] font-semibold uppercase text-white/70 sm:mt-12 sm:flex-row sm:items-end sm:justify-between"
          initial={false}
          transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <p>Available for internships</p>
            <p>Spring 2026</p>
          </div>

          <Link
            className="inline-flex w-fit items-center border-b border-white/40 pb-1 text-white transition-colors hover:border-white"
            href="/projects"
          >
            View Works
          </Link>

          <div className="space-y-2 sm:text-right">
            <p>Based in campus</p>
            <p>All rights reserved</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
