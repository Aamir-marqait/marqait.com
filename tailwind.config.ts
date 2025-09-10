// tailwind.config.ts
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        header: "rgba(255, 255, 255, 0.05)",
      },
    },
  },
  
};

export default config;
