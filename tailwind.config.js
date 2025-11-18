/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./script.js"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-green': '#10b981',
        'neon-blue': '#3b82f6',
        'neon-purple': '#8b5cf6',
      }
    }
  },
  plugins: [],
}
