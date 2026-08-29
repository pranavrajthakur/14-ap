/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#07050a",
        burgundy: "#1a050d",
        plum: "#120719",
        ivory: "#f8f4ee",
        champagne: "#edd3be",
        rose: {
          glow: "rgba(226, 125, 150, 0.2)",
        },
      },
    },
  },
  plugins: [],
};
