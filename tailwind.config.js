const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        error: 'hsl(0, 100%, 63%)',
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
        },
      },
      backgroundColor: {
        main: 'hsl(218, 28%, 13%)',
        'intro-and-email': 'hsl(217, 28%, 15%)',
        footer: 'hsl(216, 53%, 9%)',
        testimonials: 'hsl(219, 30%, 18%)',
      },
      fontFamily: {
        header: ["'Raleway', sans-serif", ...defaultTheme.fontFamily.sans],
        sans: ["'Open Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
