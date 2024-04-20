/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-bezier': 'cubic-bezier(0.5, 1.6, 0.4, 0.7)'
      }
    },
  },
  plugins: [],
}

