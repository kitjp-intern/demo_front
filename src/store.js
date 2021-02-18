import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    datasetName:null,
    dataBase:[],
    dataSet:{},
    answerTop10:{},
    answer:{},
    toggleRight:false,
    contexts:{},
    dialog:false,
    dialogAnswer:false,
    apiurl:'https://e73d770791ae.ngrok.io',
    question:'',
    prob:60
  },
  mutations:{
    mutateDataBase(state, payload){
      state.dataBase = payload;
    },
    mutateQuestion(state, payload ) {
      state.question = payload;
    },
    mutateProb(state, payload ) {
      state.prob = payload;
    },


  },
  actions:{
    //データベース受け取り
    commitDataBase:({commit, state})=>{
      let apiurl = state.apiurl + '/get/database'
      return axios.get(apiurl)
      .then(response => {
        for (let i=0; i < response.data.length; i++){
          response.data[i].show = false
          response.data[i].flex = 4
          response.data[i].dialog = false
          state.contexts[response.data[i].name]=response.data[i].contexts
        }
        
        commit('mutateDataBase', response.data)
       })
       .catch((reason) => {
        console.log(reason.message)
        commit('mutateDataBase',{})
       })
    },
    //選択されたデータベースのpost
    pushDataBase(state){
      let apiurlpost = state.apiurl + '/post/database'
      axios.post(apiurlpost,{
      database:state.datasetName
      })
    },
    updateQuestion(store,question) {
      return store.commit("mutateQuestion", question);
    },
    updateProb(store,prob){
      return store.commit("mutateProb", prob)
    }


  },
  getters: {
    getStateDataBase: (state) => state.dataBase,
    getStateQuestion: (state) => state.question 
   }
})