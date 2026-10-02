/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F8F8",
        surface: "#FFFFFF",
        beige: "#ECECEC",
        charcoal: "#212529",
        clay: "#4C4C4C",
        primary: {
          DEFAULT: "#814882",
          hover: "#6A3A6B",
          light: "#F2EAF2",
        },
        borderBase: "#DFDFDF",
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