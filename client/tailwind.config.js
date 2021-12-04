module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        notebook:
        {
          50: '#ffe2f1',
          100: '#ffb3cf',
          200: '#fc83ab',
          300: '#f95283',
          400: '#f62259',
          500: '#dd0939',
          600: '#ad0337',
          700: '#7c002f',
          800: '#4d0021',
          900: '#20000d',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
