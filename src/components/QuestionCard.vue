<!--QAcard-->
<template>
    <v-form ref="form" lazy-validation @submit.prevent>
      <v-container>
         <v-row justify="center" align-content="center">
         <v-col cols="8">
            <v-text-field
              v-model="question"
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
              <v-dialog
                v-model="diaLog"
                hide-overlay
                persistent
                width="300"
              >
              <v-card
                color="primary"
                dark
              >
              <v-card-text>
                Please stand by
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
              </v-card-text>
              </v-card>
            </v-dialog>
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
        message: ''
    },
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
    },
    diaLog(){
      return this.$store.state.dialog
    },
  },
  methods:{
    GetAnswer(query){
      let url = 'https://ecf985acfa8e.ngrok.io/get/' + decodeURI(query);
      axios.get(url)
      .then(response=>{
        for (let i=0; i < response.data.q.length; i++){
          response.data.q[i].dialog = false
          response.data.q[i].flex = 12
          response.data.q[i].top = i + 1
          response.data.q[i].color = this.color[i]
        }
        this.$store.state.answerTop10 = response.data.q
        this.$store.state.answer = response.data.q[0]
        this.showSnackBar('success','通信成功')
        this.$store.state.dialog = false
      })
      .catch((reason)=>{
        console.log(reason.message)
        this.showSnackBar('error',reason.message+'取得に失敗しました。時間をおいて再度お試しください')
        this.$store.state.dialog = false
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
  height: 100px;
}

</style>