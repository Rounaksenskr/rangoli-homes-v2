/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F1",
        surface: "#FFFFFF",
        beige: "#F3EBDF",
        charcoal: "#2B2623",
        clay: "#8A6F5A",
        terracotta: {
          DEFAULT: "#B4562F",
          hover: "#9C4724",
          light: "#F7ECE6",
        },
        borderBase: "#E6DCCD",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(43, 38, 35, 0.05)",
        card: "0 10px 30px -4px rgba(43, 38, 35, 0.08)",
      },
    },
  },
  plugins: [],
};