/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#3b82f6",
          soft: "rgba(59,130,246,0.10)",
          dark: "#60a5fa",
          "dark-soft": "rgba(96,165,250,0.12)",
        },
      },
      maxWidth: {
        page: "1160px",
      },
    },
  },
  plugins: [],
};
