/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#D72050'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}