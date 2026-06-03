import { existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, "..", "src", "content", "blog");

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9一-鿿]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hasNonAscii(text) {
  return /[^\x00-\x7F]/.test(text);
}

const title = process.argv[2];
if (!title) {
  console.log("Usage: node scripts/new-post.mjs <title> [slug]");
  console.log("  title  — 文章标题 (required)");
  console.log("  slug   — URL slug (optional, auto-generated from title if English, required if Chinese)");
  process.exit(1);
}

let slug = process.argv[3];
if (!slug) {
  if (hasNonAscii(title)) {
    console.log("Error: 中文标题需要提供 slug 作为第二个参数");
    console.log(`Usage: node scripts/new-post.mjs "${title}" <slug>`);
    process.exit(1);
  }
  slug = toSlug(title);
}

const filePath = join(contentDir, `${slug}.mdx`);

if (existsSync(filePath)) {
  console.log(`Error: 文件已存在 — ${filePath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const frontmatter = `---
title: "${title}"
date: "${today}"
category: "编程开发"
tags:
  -
excerpt: ""
readingTime: 5
coverImage: ""
---

{/* 在此编写正文 */}

`;

writeFileSync(filePath, frontmatter, "utf-8");
console.log(`Created: ${filePath}`);
console.log(`Edit the file and then run: npm run build`);
