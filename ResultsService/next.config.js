/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true
  },
  // Remove assetPrefix to prevent CSS loading issues
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://results.pafricanoi.com' : '',
  basePath: '',
  // Ensure proper CSS handling in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
