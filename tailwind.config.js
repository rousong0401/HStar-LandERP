module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '7.5': '1.875rem',
        '22': '5.5rem'
      },
      padding: {
        '7.5': '1.875rem',
      },
      colors: {
        primary: '#E79506',
        lightorange: '#ECB500',
        opacityorange: '#F0BC5E',
        green: '#6CB70B',
        blue: '#255B8A',
        yellow: '#FFF8E0',
        lightred: '#EF9090'
      },
      backgroundColor: {
        primary: '#E79506',
        lightorange: '#ECB500',
        opacityorange: '#F0BC5E',
        green: '#6CB70B',
        blue: '#255B8A',
        yellow: '#FFF8E0',
        lightred: '#EF9090'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.9375rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5625rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
