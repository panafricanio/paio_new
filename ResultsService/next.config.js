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
  // Ensure CSS is properly processed in static export
  experimental: {
    optimizeCss: true
  },
  // Ensure proper CSS handling in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for static export
  swcMinify: true,
}

module.exports = nextConfig
