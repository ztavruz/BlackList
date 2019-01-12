<template>
  <v-app>
    <v-header></v-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',  
  data () {
    return {
      branch: "master"
    }
  },
  components:{
    'v-home': Home,
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style scoped>
  
</style>
