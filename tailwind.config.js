/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ["var(--font-michroma)"],
        lato: ["var(--font-lato)"],
        yrsa: ["var(--font-yrsa)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
