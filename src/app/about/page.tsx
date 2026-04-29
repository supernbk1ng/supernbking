import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | supernbking",
  description:
    "CS 专业大三学生，关注前端工程、AI 应用与开发者工具。"
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-paper text-graphite">
      <SiteHeader variant="light" />

      <div className="page-header-grid relative overflow-hidden border-b border-ink-blue/8 pb-12 pt-28">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
          <p className="font-mono text-[0.8rem] font-semibold uppercase text-graphite/58">
            Student Profile
          </p>
          <h1 className="mt-6 font-display text-6xl italic leading-none text-ink-blue sm:text-8xl">
            About
          </h1>
        </div>
      </div>

      <AboutContent />
    </main>
  );
}
