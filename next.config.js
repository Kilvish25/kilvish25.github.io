/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Disable basePath as we're deploying to root
  basePath: '',
  // Disable assetPrefix as we're deploying to root
  assetPrefix: '',
};

module.exports = nextConfig;
