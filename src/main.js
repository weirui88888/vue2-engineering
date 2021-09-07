import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: 'https://4c1f4b17c43742609095ed6d0d184484@o380946.ingest.sentry.io/5949004',
  integrations: [new Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

new Vue({
  render: h => h(App)
}).$mount('#app')
