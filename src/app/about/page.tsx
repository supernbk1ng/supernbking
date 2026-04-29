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
      <AboutContent />
    </main>
  );
}
