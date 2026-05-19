import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0A0A0B",
          light: "#FAFAF7",
        },
        surface: {
          dark: "#111114",
          light: "#F0F0EC",
        },
        "text-primary": {
          dark: "#EDEDED",
          light: "#0A0A0B",
        },
        "text-muted": {
          dark: "#8A8A93",
          light: "#5A5A63",
        },
        accent: "#3B82F6",
        border: {
          dark: "#1F1F23",
          light: "#D8D8D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
