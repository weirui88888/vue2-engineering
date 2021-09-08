const path = require('path')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
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
  configureWebpack: config => {
    if (process.env.VUE_APP_ORIGIN_TYPE !== 'development') {
      return {
        plugins: [
          new SentryWebpackPlugin({
            include: '.',
            ignore: ['node_modules']
          })
        ],
        output: {
          sourceMapFilename: '[name].js.map'
        }
      }
    }
  },
  productionSourceMap: true
}
