import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0F172A",
          accent: "#3B82F6",
          text: "#F8FAFC",
        },
        bg: {
          base: "#0F172A",
          surface: "#1E293B",
          elevated: "#273449",
          hover: "#334155",
          subtle: "#1A2332",
        },
        accent: {
          base: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          subtle: "rgba(59, 130, 246, 0.15)",
          muted: "rgba(59, 130, 246, 0.5)",
          ring: "rgba(59, 130, 246, 0.5)",
        },
        text: {
          base: "#F8FAFC",
          secondary: "rgba(248, 250, 252, 0.7)",
          muted: "rgba(248, 250, 252, 0.5)",
          subtle: "rgba(248, 250, 252, 0.35)",
          inverse: "#0F172A",
        },
        border: {
          DEFAULT: "rgba(248, 250, 252, 0.1)",
          subtle: "rgba(248, 250, 252, 0.06)",
          hover: "rgba(248, 250, 252, 0.2)",
          accent: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.3)",
        sm: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
        md: "0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)",
        lg: "0 10px 25px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.3)",
        xl: "0 20px 50px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(0, 0, 0, 0.4)",
        glow: "0 0 20px rgba(59, 130, 246, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
