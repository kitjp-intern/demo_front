<template>
<v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" style="border-left:10px">
        <about/>
        <dataset-card/>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
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
}
</script>

<style>

</style>