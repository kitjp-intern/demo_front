<!--QAcard-->
<template>
<v-container id="qa">
  <v-row justify="center">
    <v-col>
    <v-form ref="form" lazy-validation @submit.prevent>
      <v-container>
         <v-row justify="center" align-content="center">
         <v-col cols="8">
            <v-text-field
              v-model="question"
              label="質問"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn 
             @click="GetAnswer(question)"
             color="primary"
             class="pa-1 ma-1"
            >SEND</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  <v-snackbar
       v-model="snackBar.show"
       :color="snackBar.color"
       top
       :timeout="3000"
       class="font-weight-bold">
      {{snackBar.message}}
   </v-snackbar>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    snackBar: {
        show: false,
        color: '',
        message: ''
    },
    color:['f4ffff','#eaffff','#d5ffff','#aaffff','#80ffff','#55ffff','#2bffff','#00ffff','#00d5d5','#00aaaa']
  }),
  computed:{
    answerOutput(){
      return this.$store.state.answerTop10
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

</style>