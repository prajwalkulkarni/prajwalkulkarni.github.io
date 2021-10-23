const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  
  images: {
    // domains: ['raw.githubusercontent.com','ibb.co'],
    domains: ['raw.githubusercontent.com'],
    loader:'imgix',
    path:''
  },
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/prajwalkulkarni/prajwalkulkarni.github.io/gh-pages/' : '',
}
