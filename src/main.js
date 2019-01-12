import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './routes.js'

import store from './store.js'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'



Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
