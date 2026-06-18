import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        snow: "#F8FAFC",
        sky: "#38BDF8",
        amber: "#F59E0B"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.18)",
        amber: "0 0 48px rgba(245, 158, 11, 0.16)"
      },
      backgroundImage: {
        "radial-sky": "radial-gradient(circle at top right, rgba(56,189,248,0.20), transparent 34rem)",
        "radial-amber": "radial-gradient(circle at bottom left, rgba(245,158,11,0.14), transparent 30rem)"
      }
    }
  },
  plugins: []
};

export default config;
