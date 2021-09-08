const path = require('path')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const IsProduction = process.env.NODE_ENV === 'production'

const resolve = dir => path.join(__dirname, dir)
// mail.backend: 'smtp'  # Use dummy if you want to disable email entirely
// mail.host: 'smtp.qq.com'
// mail.port: 587 // 25不可用
// mail.username: 'xxxxx@qq.com'
// mail.password: 'xxx' // token qq邮箱设置页面获取
// mail.use-tls: false
// # The email address to send on behalf of
// mail.from: 'xxxxx@qq.com'

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
          // vue inspect --mode development --plugins
          // vue inspect --mode production > output.js
          sourceMapFilename: 'js/[name].js.map' // maybe important
        },
        devtool: 'source-map' // 貌似必须要加否则--mode staging 不生成sourcemap文件，只在--mode production生成
      }
    }
  },
  productionSourceMap: true
}
