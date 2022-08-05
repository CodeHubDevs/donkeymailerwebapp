/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://stannpstorage.blob.core.windows.net',
      'stannpstorage.blob.core.windows.net'
    ]
  }
}

module.exports = nextConfig
