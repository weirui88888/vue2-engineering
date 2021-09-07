import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.config.productionTip = false

// 仅在生产或者测试环境时记录
if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    Vue,
    dsn: 'https://8134befc9205484db7e70aea15c085c6@o380946.ingest.sentry.io/5949006',
    integrations: [new Integrations.BrowserTracing()],
    // 设置性能监控采样率
    tracesSampleRate: 1.0,
    // 设置环境，因为我们的代码可能会部署到不同的服务上面
    environment: process.env.NODE_ENV
  })
}
new Vue({
  render: h => h(App)
}).$mount('#app')
