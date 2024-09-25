/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { 'max': '640px' }, // This adds an 'xs' breakpoint for screens smaller than 640px
      },
    },
  },
  plugins: [],
}
