const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

/**
 * @type {import('next').NextConfig}
 * */
module.exports = withReactSvg({
  env: {
    APP_URL: process.env.APP_URL,
  },

  include: resolve(__dirname, 'src/assets/svgs'),

  swcMinify: true,

  trailingSlash: true,

  i18n: {
    locales: ['pt', 'en'],

    defaultLocale: 'pt',
  }

})
