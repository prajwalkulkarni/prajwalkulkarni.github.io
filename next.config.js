const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/prajwalkulkarni/prajwalkulkarni.github.io/gh-pages/' : '',
}
