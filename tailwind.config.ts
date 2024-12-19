import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'xl-container': 'min(90%,80rem)',
        'container': 'min(90%,67.1875rem)',
      },
      fontFamily: {
        matter: ['var(--font-matter)']
      },
      colors: {
        dark: "#121212",
        darkGray: "#6C6C6C",
        lightGray: "#C4C4C4",
        gray: "#5E5E5E",
        lightGreen: "#0CB26D",
        primaryGreen: "#00FF8F",
        darkGreen: "#006239",
        darkerGreen: "#0B4D30",
        darkestGreen: "#11291F"
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
} satisfies Config;
