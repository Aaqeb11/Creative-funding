import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, #84FE77, #3A6D35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
