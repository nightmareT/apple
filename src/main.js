import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false
Vue.use(VueJsonp)

new Vue({
  render: h => h(App),
}).$mount('#app')
