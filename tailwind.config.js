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
        customGrayHover: "#3A3A3A",
        customWhite: "#fff",
        customYellowDiscount: "#ffd700"
      }
    },
  },
  plugins: [],
}

