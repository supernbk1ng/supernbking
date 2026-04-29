import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "ink-blue": "#0754d8",
        "ink-blue-deep": "#03358d",
        paper: "#eef0f2",
        graphite: "#15171d",
        "soft-line": "rgba(255,255,255,0.12)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "ui-monospace",
          "monospace"
        ],
        display: [
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif"
        ]
      },
      boxShadow: {
        gallery: "0 24px 60px rgba(28, 35, 45, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
