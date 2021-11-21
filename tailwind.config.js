module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr'
      },
      minHeight: {
        44: '44px'
      },
      minWidth: {
        44: '44px'
      },
      screens: {
        tablet: '1024px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
