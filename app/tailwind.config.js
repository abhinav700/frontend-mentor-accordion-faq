/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: " hsl(0, 0%, 100%)",
        lightPink: " hsl(275, 100%, 97%)",
        grayishPurple: " hsl(292, 16%, 49%)",
        darkPurple: " hsl(292, 42%, 14%)",
      }
    },
  },
  plugins: [],
}