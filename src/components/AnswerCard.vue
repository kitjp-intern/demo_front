<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
  <v-col>
    <dataset-choose/>
    <question-card/>
    <v-card v-if="dialogAnswer!=false" color="primary" dark>
      <v-card-title >Answer:{{ answer1.answer }}</v-card-title>
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
      return this.$store.state.answer
    },
    dialogAnswer(){
      return this.$store.state.dialogAnswer
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
  margin-right: 200px;
}



</style>