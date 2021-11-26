module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: '#E5E5E5',
        primary: '#00C1B1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
