// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "sans-serif"],
      },
      colors: {
        lighthover: "#F3F4F6",
        darkhover: "#1F2937",
        darkTheme: "#111827",
      },
      boxShadow: {
        customBlack : "4px 4px 0 #000",
        customWhite: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
