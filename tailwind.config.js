/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      colors: {
        primary: '#5467e8',
        secondary: '#8494FF',
      }
    },
  },
  plugins: [],
}
