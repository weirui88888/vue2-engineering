const path = require('path')

const IsProduction = process.env.NODE_ENV === 'production'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
  },
  productionSourceMap: true
}
