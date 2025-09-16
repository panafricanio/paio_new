/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true
  },
  basePath: '',
  // Explicitly disable assetPrefix to prevent CSS loading issues
  assetPrefix: '',
  // Ensure proper CSS handling in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
