/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['echarts']);
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3101/:path*'
      }
    ];
  },
  reactStrictMode: true,
  exportPathMap: () => ({
    // Next Export 에서 사용하는 값
    '/': { page: '/' }
    //'/register': { page: '/register' }
  })
};

module.exports = nextConfig;
