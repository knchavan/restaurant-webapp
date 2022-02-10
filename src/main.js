import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResourance from 'vue-resource'

import router from './routers'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResourance)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
