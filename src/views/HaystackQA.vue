<template>
  <v-container>
    <v-row>
      <v-col cols="6" style="border-left:10px">
        <about/>
        <dataset-card/>
      </v-col>
      <v-col cols="6">
      <answer-card/> 
      <top-k-card/>
      </v-col >
    </v-row>
  </v-container> 
</template>

<script>
import About from '../components/About'
import DatasetCard from '../components/DatasetCard'
import AnswerCard from '../components/AnswerCard'

import TopKCard from '../components/TopKCard.vue'
export default {
  name:'HaystackQA',
  components:{
    About,
    DatasetCard,
    AnswerCard,
    TopKCard,
  },
  computed:{
    toggleRight(){
      return this.$store.state.toggleRight
    }
  },
}
</script>

<style>

</style>