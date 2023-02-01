// eslint-disable-next-line import/no-extraneous-dependencies

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-picture': "url('/src/assets/hotel.jpg')",
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
