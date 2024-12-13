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
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
} satisfies Config;
