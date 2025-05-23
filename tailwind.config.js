/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    },
  },
  plugins: [],
}

