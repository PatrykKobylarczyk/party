/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif']
      },
      colors: {
        'plant': '#1EB865',
        'burgung': '#B81E1E',
        'heaven': '#4F90CD',
        'blueberry': '#685580'
      },
    },
  },
  plugins: [],
}
