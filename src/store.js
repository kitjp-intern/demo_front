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
    question:'運転者は誰？',
    toggleRight:false,
    contexts:{},
    dialog:false,
    dialogAnswer:false,
  },
  mutations:{
    mutateDataBase(state, payload){
      state.dataBase = payload;
    },
  },
  actions:{
    //データベース受け取り
    commitDataBase:({commit, state})=>{
      return axios.get('https://ecf985acfa8e.ngrok.io/get/database')
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
      axios.post('https://927477f6db88.ngrok.io/post/database',{
      database:state.datasetName
      })
    }

  },
  getters: {
    getStateDataBase: (state) => state.dataBase
   }
})