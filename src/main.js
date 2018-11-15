import Vue from 'vue'
import App from './components/App.vue'
import router from './config/router'
import './config/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
