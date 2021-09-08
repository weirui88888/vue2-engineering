import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.config.productionTip = false

// 仅在生产或者测试环境时记录
if (process.env.VUE_APP_ORIGIN_TYPE !== 'development') {
  Sentry.init({
    Vue,
    dsn: 'https://b4ebb1115deb4f3587c950c009d9b2bf@sentry-qa.bybutter.com/2',
    integrations: [new Integrations.BrowserTracing()],
    // 设置性能监控采样率
    tracesSampleRate: 1.0,
    // 设置环境，因为我们的代码可能会部署到不同的服务上面
    environment: process.env.VUE_APP_ORIGIN_TYPE,
    // 通过该种方式设置自定义tag,可以把用户的uid加进去和一些版本信息加进去
    initialScope: {
      tags: { 'my-tag1': 'my value1', uid: '12334' },
      extra: { key1: 'value1' },
      user: { name: 'tom', age: 19 }
    }
  })
}

window.abc.say()
new Vue({
  render: h => h(App)
}).$mount('#app')
