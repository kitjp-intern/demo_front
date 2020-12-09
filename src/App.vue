<!--大元-->
<template>
  <v-app id="app">
    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer 
            app 
            permanent 
            dark 
            color="primary"

            >
      <v-list-item >
        <v-list-item-content color="primary">
          <v-list-item-title class="title">
            KIT Demostration
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- コンテンツ  -->
    <v-main>
        <keep-alive>
          <router-view ></router-view>
        </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
        items: [
          { title: 'Home', icon: 'mdi-home', link:'/'},
          { title: 'HaystackQA', icon: 'mdi-text-box', link:'HaystackQA' },
        ]
  }),
};
</script>
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
  #app{
    background-color:white;
    padding-left:30px;
  }
</style>
