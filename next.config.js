/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['rickandmortyapi.com'] },
  distDir: 'build',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
