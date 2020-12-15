<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
  <v-col>
    <dataset-choose/>
    <question-card/>
    <v-card v-if="answer1!={}" color="#952175" dark>
      <h1>Answer:{{ answer1.answer }}</h1>
    </v-card>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import DatasetChoose from './DatasetChoose'
import QuestionCard from './QuestionCard'
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
    answer1(){
      console.log(this.$store.state.answer)
      return this.$store.state.answer
    },
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
  margin-right: 200px;
}

</style>