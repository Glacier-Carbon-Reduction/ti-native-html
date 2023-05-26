/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        glacier: {
          green: '#6dd4ad',
          greenDark: '#2d9d90',
          blue: '#539adb',
          blueDark: '#143560'
        }
      },
      fontFamily: {
        pangea: ['Pangea']
      }
    }
  },
  plugins: [],
}

