<template>
  <div>
      <v-navigation-drawer absolute temporary v-model="drawer" class="need-hide" >
          <v-list>
              <v-list-tile v-for="(item, i) in menuItems" :key="`nawdrawer${i}`" >
                  <v-list-tile-action>
                      <v-icon v-html="item.icon" ></v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title" ></v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar app dark class="primar" >
          <v-toolbar-side-icon @click.stop="drawer = !drawer" class="need-hide" ></v-toolbar-side-icon>
          <router-link to="/" tag="span" style="cursor:pointer">
            <v-toolbar-title v-text="'BlackList'" ></v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-dowm need-down">
            <v-btn v-for="(item, i) in menuItems " class="" flat :key="`menuitem${i}`" :to="item.route">
               <v-icon v-html="item.icon" ></v-icon>  
               {{item.title}}
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
        drawer: false
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
                  title: 'Учить слова',
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
@media (min-width:900px) and (max-width:2560px) {
   .need-hide{
       display:none;
   }
}
@media (min-width:100px) and (max-width:900px) {
   .need-down{
       display: none;
   }
}
</style>