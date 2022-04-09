module.exports = {
  purge: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      }
    },
    colors: {
      white: '#FFFFFF',
      elephant: '#0D2436',
      silver: '#CCCCCC',
      'green-persia': '#009B86',
      keppel: '#34AC9C'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
