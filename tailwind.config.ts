/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.1)',
        lightBlue: '#cce6ff'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
