/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['rickandmortyapi.com'] },
  distDir: 'build',
  // gitlab-ci
  ...{ ...(process.env.NODE_ENV === 'production' ? { assetPrefix: '/rick-and-morty-front/', images: { unoptimized: true } } : {}) }
};

module.exports = nextConfig;
