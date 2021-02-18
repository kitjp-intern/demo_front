<!--QAcard-->
<template>
    <v-form ref="form" lazy-validation @submit.prevent>
      <v-container>
         <v-row justify="center" align-content="center">
         <v-col cols="8">
            <v-text-field
              v-model="question"
              @input="updateQuestion"
              label="質問"
              outlined
              solo
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn 
             @click="GetAnswer(question)"
             :disabled="diaLog"
             :loading="diaLog"
             color="primary"
             class="pa-1 ma-1"
            >SEND</v-btn>
          </v-col>
        </v-row>
      <v-snackbar
         v-model="snackBar.show"
         :color="snackBar.color"
         top
         :timeout="3000"
         class="font-weight-bold">
          {{snackBar.message}}
       </v-snackbar>
      </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    snackBar: {
        show: false,
        color: '',
        message: '',
        
    },
    question:''
  }),
  computed:{
    answerOutput(){
      return this.$store.state.answerTop10
    },
    answer1(){
      return this.$store.state.answer
    },
    diaLog(){
      return this.$store.state.dialog
    },
    dialogAnswer(){
      return this.$store.state.dialogAnswer
    },
  },
  methods:{
    GetAnswer(query){
      this.$store.state.dialog = true
      let url = 'https://f21454415d37.ngrok.io' +'/get/'+ decodeURI(query);
      console.log(url)
      axios.get(url)
      .then(response=>{
        for (let i=0; i < response.data.q.length; i++){
          response.data.q[i].dialog = false
          response.data.q[i].flex = 12
          response.data.q[i].top = i + 1
        }
        console.log(response.data.q[0].prob)
        console.log(this.$store.state.prob)      
        this.$store.state.answerTop10 = response.data.q
        console.log(response.data.q)
        this.$store.state.answer = response.data.q[0]
        this.showSnackBar('success','通信成功')
        this.$store.state.dialog = false
        this.moveAnswer()
      })
      .catch((reason)=>{
        console.log(reason.message)
        this.showSnackBar('error',reason.message+'取得に失敗しました。時間をおいて再度お試しください')
        this.$store.state.dialog = false
      })
    this.$store.state.dialogAnswer=true
    },
    showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
    moveAnswer(){
      this.$router.push({path:'/answer'})
    },
    updateQuestion()  {
      this.$store.dispatch('updateQuestion',this.question)
    },
  },
}
</script>

<style scoped>
#qa{
  text-align:center;
  height: 100px;
}

</style>