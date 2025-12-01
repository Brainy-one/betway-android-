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
        // Neumorphism colors
        'neu-bg': '#1a1a2e',
        'neu-light': '#252542',
        'neu-dark': '#0f0f1a',
        'neu-surface': '#1e1e35',
      },
      boxShadow: {
        'neu-out': '8px 8px 16px #0f0f1a, -8px -8px 16px #252542',
        'neu-in': 'inset 8px 8px 16px #0f0f1a, inset -8px -8px 16px #252542',
        'neu-out-sm': '4px 4px 8px #0f0f1a, -4px -4px 8px #252542',
        'neu-in-sm': 'inset 4px 4px 8px #0f0f1a, inset -4px -4px 8px #252542',
        'neu-btn': '6px 6px 12px #0f0f1a, -6px -6px 12px #252542',
        'neu-btn-pressed': 'inset 4px 4px 8px #0f0f1a, inset -4px -4px 8px #252542',
      }
    }
  },
  plugins: [],
}
