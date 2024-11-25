/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ], 
  theme: {
    extend: {
      colors: {
        customGray: "#212121",
        customWhite: "#fff",
        customYellowDiscount: "#ffd700"
      }
    },
  },
  plugins: [],
}

