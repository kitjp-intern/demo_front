<!--QAcard-->
<template>
<v-container id="qa">
  <v-row>
      <h1 class="answer">Answer</h1>
      <div class="content"><b>{{answer1.answer}}</b></div>
  </v-row>
</v-container>
</template>

<script>
export default {
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
    },
    datasetName(){
      return this.$store.state.datasetName
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
  margin-right: 1000px;
  padding: 10px 10px 0px 10px;
}
div.content{
  text-align:center;
  margin-top:10px;
  margin-left: 300px;
  font-size:40px;
}





</style>