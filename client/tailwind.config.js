/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        background: '#f8fafc',
        surface: '#ffffff',
        primary: '#4f46e5',
        secondary: '#9333ea',
        accent: '#06b6d4',
        dark: '#0f172a',
        'dark-bg': '#020617',
      },
    },
  },
  plugins: [],
}
