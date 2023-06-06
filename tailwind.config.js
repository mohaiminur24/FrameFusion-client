/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#1c77c6",
        secoundary: 'bfc3c6',
        primaryHover : '#1e70b8',
        secoundaryHover: "#b8babb"
      },
      fontFamily:{
        'Cinzel': ['Cinzel, serif'],
        'Inter': ['Inter, sans-serif'],
        'Raleway': ['Raleway, sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}