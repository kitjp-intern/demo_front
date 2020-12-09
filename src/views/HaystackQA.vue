<template>
  <v-container>
    <v-row>
      <v-col cols="6" style="border-left:10px">
        <about/>
      </v-col>
      <v-col cols="6">
      <answer-card/>
  
      </v-col >
    </v-row>
    <v-row>
      <v-col cols="6">
      <dataset-card/>
      <input-card/>
      </v-col>
      <v-col cols="6">
      <top-k-card/>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import About from '../components/About'
import DatasetCard from '../components/DatasetCard'
import AnswerCard from '../components/AnswerCard'
import InputCard from '../components/InputCard'
import TopKCard from '../components/TopKCard.vue'
export default {
  name:'HaystackQA',
  components:{
    About,
    DatasetCard,

    AnswerCard,
    InputCard,
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