import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import routes from './router'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueJsonp)
axios.defaults.headers.post['Content-Type'] = 'application/json'

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
