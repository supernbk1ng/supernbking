"use client";

import { motion } from "framer-motion";

import { Timeline } from "@/components/timeline";
import type { TimelineItem } from "@/components/timeline";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "C / C++",
  "Git",
  "Figma",
  "Vercel"
];

const interests = [
  "前端工程化",
  "AI 应用开发",
  "开发者工具",
  "人机交互",
  "创意编程",
  "开源社区"
];

const timelineItems: TimelineItem[] = [
  {
    year: "2026",
    title: "个人作品集网站重构",
    description:
      "使用 Next.js App Router + TypeScript + Tailwind CSS + Framer Motion 重建个人主页，集成博客、项目展示、资源分享模块，部署于 Vercel。"
  },
  {
    year: "2025",
    title: "前端开发实习",
    description:
      "在某科技公司参与内部工具的前端开发，使用 React + TypeScript 搭建组件库，学习了 CI/CD 流水线和设计系统的基本实践。"
  },
  {
    year: "2025",
    title: "接触 AI / 机器学习",
    description:
      "开始系统学习机器学习基础，从 NumPy 手写神经网络到使用 PyTorch 完成课程项目，对 AI 应用层开发产生浓厚兴趣。"
  },
  {
    year: "2024",
    title: "第一个全栈项目上线",
    description:
      "独立完成一个校园工具类应用的开发与上线，覆盖前端、API 设计和部署全流程，积累了从原型到生产环境的完整经验。"
  },
  {
    year: "2023",
    title: "大学入学 — 计算机科学专业",
    description:
      "进入大学学习计算机科学与技术，从 C 语言入门到数据结构、算法、计算机组成原理等核心课程的系统学习。"
  }
];

const fadeIn = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

export function AboutContent() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-28 sm:px-8 lg:px-12">
      <motion.p
        {...fadeIn}
        className="font-mono text-[0.68rem] font-semibold uppercase text-graphite/58"
      >
        Student Profile
      </motion.p>
      <motion.h1
        {...fadeIn}
        className="mt-6 font-display text-6xl italic leading-none sm:text-8xl"
      >
        About
      </motion.h1>

      <motion.div
        {...fadeIn}
        className="mt-14 grid gap-10 sm:grid-cols-2"
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h2 className="font-display text-2xl italic text-graphite">
            Hi, I&rsquo;m supernbking
          </h2>
          <p className="mt-4 text-sm leading-8 text-graphite/65">
            CS 专业大三学生，现居校园。对前端工程、AI
            应用和开发者工具充满热情。相信好的工具能让创造变得简单，好的设计能让技术变得温暖。
          </p>
          <p className="mt-4 text-sm leading-8 text-graphite/65">
            目前专注于 React / Next.js 技术栈的深度实践，同时探索 AI
            在开发者工具和应用层的落地。课余时间喜欢写博客、整理学习资源、参与开源项目。
          </p>
        </div>

        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-start gap-3">
            <span className="shrink-0 rounded-[4px] border border-graphite/12 bg-white px-2 py-1 text-graphite/50">
              Education
            </span>
            <span className="pt-1 leading-6 text-graphite/65">
              B.S. Computer Science
              <br />
              <span className="text-graphite/40">
                Expected Graduation: 2027
              </span>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="shrink-0 rounded-[4px] border border-graphite/12 bg-white px-2 py-1 text-graphite/50">
              Focus
            </span>
            <span className="pt-1 leading-6 text-graphite/65">
              Frontend Engineering
              <br />
              AI Application Development
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="shrink-0 rounded-[4px] border border-graphite/12 bg-white px-2 py-1 text-graphite/50">
              Status
            </span>
            <span className="pt-1 leading-6 text-graphite/65">
              Available for internships
              <br />
              <span className="text-graphite/40">Spring / Summer 2026</span>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="shrink-0 rounded-[4px] border border-graphite/12 bg-white px-2 py-1 text-graphite/50">
              Contact
            </span>
            <span className="space-y-1 pt-1 font-mono text-xs leading-6">
              <a
                className="block text-graphite/65 underline underline-offset-4 transition-colors hover:text-graphite"
                href="mailto:3230102949@zju.edu.cn"
              >
                3230102949@zju.edu.cn
              </a>
              <a
                className="block text-graphite/65 underline underline-offset-4 transition-colors hover:text-graphite"
                href="mailto:zst1873323741@gmail.com"
              >
                zst1873323741@gmail.com
              </a>
              <a
                className="block text-graphite/50 underline underline-offset-4 transition-colors hover:text-graphite"
                href="https://github.com/supernbk1ng"
                rel="noopener noreferrer"
                target="_blank"
              >
                github.com/supernbk1ng
              </a>
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        className="mt-20"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-display text-2xl italic text-graphite">
          Skills
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              className="rounded-[4px] border border-graphite/12 bg-white/80 px-3 py-2 font-mono text-[0.66rem] font-semibold uppercase text-graphite/60 transition-colors hover:border-graphite/25 hover:text-graphite"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        className="mt-16"
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-display text-2xl italic text-graphite">
          Interests
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              className="rounded-[4px] border border-graphite/10 bg-graphite/[0.02] px-3 py-2 font-mono text-[0.66rem] font-medium text-graphite/55"
              key={interest}
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        className="mt-20"
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-display text-2xl italic text-graphite">
          Timeline
        </h2>
        <div className="mt-8">
          <Timeline items={timelineItems} />
        </div>
      </motion.div>

      <motion.footer
        {...fadeIn}
        className="mt-24 border-t border-graphite/8 pt-8 font-mono text-[0.64rem] text-graphite/35"
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
        <p>Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
        <p className="mt-1">Deployed on Vercel. &copy; {new Date().getFullYear()}</p>
      </motion.footer>
    </section>
  );
}
