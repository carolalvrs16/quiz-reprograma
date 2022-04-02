module.exports = {
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',

      gray: {
        400: '#5F5F6E',
        600: '#2D2D3A',
        700: '#131419',
      },

      primary: {
        200: '#4447E2',
      },

      error: '#EB5757',
      success: '#27AE60',
      warning: '#E2B93B',
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
  },
  content: [
    './src/pages/*.tsx',
    './src/components/**/*.tsx',
  ],
  plugins: [],
}
