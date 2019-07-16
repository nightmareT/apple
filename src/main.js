import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import Vuetify from 'vuetify'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueJsonp)
axios.defaults.headers.post['Content-Type'] = 'application/json'

new Vue({
  render: h => h(App),
}).$mount('#app')
