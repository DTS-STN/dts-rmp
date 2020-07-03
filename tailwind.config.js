// tailwind.config.js
module.exports = {
  purge: ['./**/*.html', './**/*.vue', './**/*.jsx'],
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Noto', 'sans-serif']
    },
    extend: {
      colors: {
        'rmp-dk-blue': '#134164',
        'rmp-md-blue': '#246880',
        'rmp-lt-blue': '#B6D1D8',
        'rmp-orange': '#D87C4F',
        'rmp-dk-orange': '#AF6345'
      }
    }
  },
  variants: {},
  plugins: []
}
