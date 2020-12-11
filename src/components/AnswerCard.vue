<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
  <v-col>
    <dataset-choose/>
    <question-card/>
    <h2 class="answer">Answer</h2>
    <h2 v-if="answer1.answer=={}"><br></h2>
    <h2 v-else>{{ answer1.answer }}</h2>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import DatasetChoose from './DatasetChoose'
import QuestionCard from './QuestionCard.vue'
export default {
  components: { 
    DatasetChoose,
    QuestionCard,
  },
  data:()=>({
    snackBar: {
        show: false,
        color: '',
        message: ''
    },
  }),
  computed:{
    datasetName(){
      return this.$store.state.datasetName
    },
    answer1(){
      return this.$store.state.answer
    },
    question(){
      return this.$store.state.question
    }
  },
  methods:{
  }
}
</script>

<style scoped>
#qa{
  text-align:center;
}
.answer{
  display: inline;
  text-align: center;
  color:black;
  border-bottom:solid;
  border-color:gray;
  margin-right: 700px;
}

</style>