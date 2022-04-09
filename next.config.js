const withReactSvg = require('next-react-svg')
const { resolve } = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/**
 * @type {import('next').NextConfig}
 * */
module.exports = withPWA(withReactSvg({
  env: {
    APP_URL: process.env.APP_URL,
  },

  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  include: resolve(__dirname, 'src/assets/svgs'),

  swcMinify: true,

  trailingSlash: true,

  i18n: {
    locales: ['pt', 'en'],

    defaultLocale: 'pt',
  }

}))
