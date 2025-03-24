/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/kilvish25.github.io',
    assetPrefix: '/kilvish25.github.io/',
    trailingSlash: true,
  } : {}),
};

module.exports = nextConfig;
