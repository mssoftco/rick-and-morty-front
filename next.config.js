/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['rickandmortyapi.com'] },
  distDir: 'build'
};

module.exports = nextConfig;
