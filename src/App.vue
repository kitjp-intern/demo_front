<!--大元-->
<template>
  <v-app id="contents">
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
        <router-view/>
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
          { title: 'HaystackQA', icon: 'mdi-text-box', link:'/' },
        ]
  }),
};
</script>
<style scoped>
  #app{
    background-color:white;
    padding-left:0px;
  }
</style>
