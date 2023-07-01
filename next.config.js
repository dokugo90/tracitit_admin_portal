/** @type {import('next').NextConfig} */

//const nodeExternals = require('webpack-node-externals');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
