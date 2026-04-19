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
        navy: {
          DEFAULT: "rgb(var(--color-navy-rgb) / <alpha-value>)",
          muted: "rgb(var(--color-navy-muted-rgb) / <alpha-value>)",
        },
        ink: "#0A0E1A",
        gold: {
          DEFAULT: "#C9A84C",
          dim: "#9a7a38",
        },
        parchment: "rgb(var(--color-parchment-rgb) / <alpha-value>)",
      },
      fontFamily: {
        arabic: ["var(--font-el-messiri)", "serif"],
        arabicBody: ["var(--font-cairo)", "sans-serif"],
        latin: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "grain-dark":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        "gold-mesh":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(201,168,76,0.08) 0%, transparent 50%)",
      },
      animation: {
        "line-draw": "lineDraw 1.2s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        lineDraw: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
