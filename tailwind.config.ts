import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['"Geist Mono"', "monospace"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
