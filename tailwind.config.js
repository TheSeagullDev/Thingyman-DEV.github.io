module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'd-blue': '#0069CE',
        'l-blue': '#0E94FF',
        'd-green': '#065143',
        'l-green': '#90FFDC',
        'l-cyan': '#D6FFF6',
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
    },
  },
  plugins: [],
}
