import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import store from './store/index.js'

import App from './App.vue'

Vue.use(Vuelidate)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
