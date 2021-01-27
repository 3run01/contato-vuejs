import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Helper from './helper'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTheMask from 'vue-the-mask'
import Alert from './components/shared/Alert'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTheMask)

Vue.prototype.$helper = Helper;

//Components
Vue.component('Alert', Alert)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
