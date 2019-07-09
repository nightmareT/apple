import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueJsonp)

new Vue({
  render: h => h(App),
}).$mount('#app')
