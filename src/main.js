import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: 'https://8134befc9205484db7e70aea15c085c6@o380946.ingest.sentry.io/5949006',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

new Vue({
  render: h => h(App)
}).$mount('#app')
