const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  distDir: 'build',
  reactStrictMode: true
})

module.exports = withNextra()
