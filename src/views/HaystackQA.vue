<template>
  <v-container>
    <v-row>
      <v-col>
        <About/>
      </v-col>
      <v-col>
      <AnswerCard/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      <DatasetCard/>
      <QuestionCard/>
      </v-col>
      <v-col>
      <TopKCard/>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import About from '../components/About'
import DatasetCard from '../components/DatasetCard'
import QuestionCard from '../components/QuestionCard'
import TopKCard from '../components/TopKCard'
import AnswerCard from '../components/AnswerCard'
export default {
  name:'HaystackQA',
  components:{
    About,
    DatasetCard,
    QuestionCard,
    TopKCard,
    AnswerCard,
  }
}
</script>

<style>

</style>