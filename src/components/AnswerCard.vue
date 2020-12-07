<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
  <v-col>
    <dataset-choose/>
    <h2 class="answer">Question</h2>
    <h1 v-if="question!=null">{{ question }}</h1>
    <h1 v-else><br></h1>
    <h2 class="answer">Answer</h2>
    <h1 v-if="answer1.answer=={}"><br></h1>
    <h1 v-else>{{ answer1.answer }}</h1>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
import DatasetChoose from './DatasetChoose'
export default {
  components: { DatasetChoose },
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
    GetAnswer(query){
      let url = 'https://927477f6db88.ngrok.io/get/' + decodeURI(query);
      axios.get(url)
      .then(response=>{
        for (let i=0; i < response.data.q.length; i++){
          response.data.q[i].dialog = false
          response.data.q[i].flex = 3
          response.data.q[i].top = i + 1
          response.data.q[i].color = this.color[i]
        }
        this.$store.state.answerTop10 = response.data.q
        this.$store.state.answer = response.data.q[0]
        this.showSnackBar('success','通信成功')
      })
      .catch((reason)=>{
        console.log(reason.message)
        this.showSnackBar('error','取得に失敗しました。時間をおいて再度お試しください')
      })
    },
    showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
  },
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