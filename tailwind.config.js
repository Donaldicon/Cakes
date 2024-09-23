/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'san-serif']
      },
      screens: {
        'small': '300px',
        'mobile': '600px',
        'lgr' : '1024px',
        'desktop': '1180px',
        'large': '1340px'
      }
    },
  },
  plugins: [],
}