/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/**/*.html'],
  darkMode: 'class',
  content: ["./dist/*.html"],
  theme: {
    extend: {
      FontFamily:{
        'clashdisplay': ['Clash Display Variable', 'sans-serif']
      }
    },
  },
  plugins: [],
}

