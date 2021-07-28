const path = require('path')

const IsProduction = process.env.NODE_ENV === 'production'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
  }
}
