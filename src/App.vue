<template>
  <div id="app">
    <v-appheader></v-appheader>
    <v-home></v-home>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',  
  data () {
    return {
      branch: "master"
    }
  },
  components:{
    'v-home': Home,
    'v-appheader': AppHeader
  }
}
</script>

<style scoped>
  
</style>
