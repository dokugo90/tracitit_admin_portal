/** @type {import('next').NextConfig} */

//const nodeExternals = require('webpack-node-externals');

const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: 'loose'
  },
}

module.exports = nextConfig
