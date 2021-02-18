<!--  データセットカード  -->
<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col
        v-for="card in dataOutput"
        :key="card.name"
        :cols="card.flex"
        >
        <v-card
          elevation="5"
          outlined  
        >
          <v-card-title v-text="card.name"></v-card-title>
          <v-card-text v-text="card.summary"></v-card-text>
          
          <v-card-actions>
            <v-btn
            color="orange lighten-2"
            text
            @click="card.show = !card.show"
            >
            Explore
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="card.show = !card.show"
          >
        <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>
              <v-card-text>{{card.explain}}</v-card-text>
            </div>
          </v-expand-transition>
          <v-btn @click="datasetChange(card.name); pushDataBase()" color="primary" rounded>データセット選択</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <input-card/>
  </v-container>
</template>

<script>
import axios from 'axios'
import InputCard from './InputCard.vue'
export default {
  name:"DatasetCard",
  components:{
    InputCard
  },
  methods:{
    datasetChange(dataset){
      //store data change
      this.$store.state.datasetName = dataset
      console.log(this.$store.state.datasetName)
    },
    pushDataBase(){
      let url =  'https://f21454415d37.ngrok.io' + this.$store.state.datasetName
      axios.get(url,{
      database:this.$store.state.datasetName
      }).then(response=>{
        console.log("pushDataBase"+response)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  computed:{
    dataOutput(){
      return this.$store.getters.getStateDataBase
    }
  },
  created() {
    this.$store.dispatch('commitDataBase')
  }
}
</script>

<style>

</style>