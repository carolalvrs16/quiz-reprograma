const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

/**
 * @type {import('next').NextConfig}
 * */
module.exports = withReactSvg({

  include: resolve(__dirname, 'src/assets/svgs'),

  swcMinify: true,

  trailingSlash: true,
})
