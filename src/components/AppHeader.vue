<template>
  <v-app>
      <v-toolbar app dark class="primar" >
          <v-toolbar-title v-text="'BlackList'" ></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn v-for="(item, i) in menuItems " class="" flat :key="`menuitem${i}`" :to="item.route">
               <v-icon v-html="item.icon" ></v-icon>  
               {{item.title}}
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed:{
      menuItems(){
          return[
              {
                  icon: 'visibility',
                  title: 'Читать',
                  route: '/books'
              },
              {
                  icon: 'extension',
                  title: 'Учит слова',
                  route: '/words'
              },
              {
                  icon: 'account_circle',
                  title: 'Мой кабинет',
                  route: '/profile'
              },
              {
                  icon: 'exit_to_app',
                  title: 'Выйти',
                  route: '/logout'
              },
              {
                  icon: 'input',
                  title: 'Войти',
                  route: '/signin'
              },
              {
                  icon: 'lock_open',
                  title: 'Зарегистрироваться',
                  route: '/signup'
              },

          ]
      }
  }
}
</script>

<style scoped>
  .primar{
      
  }
</style>