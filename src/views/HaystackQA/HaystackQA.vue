<template>
<v-container fluid>
    <v-row>
      <v-col cols="6" sm="6" md="6" lg="6" style="border-left:10px">
        <about/>
        <dataset-card/>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6">
          <dataset-choose/>
          <h1 class="answer">Question</h1>
          <div class="content"><b>{{ question }}</b></div>
          <a><router-link to="/HaystackQA">Question</router-link></a>|
          <a><router-link to="/HaystackQA/answer">Answer</router-link></a>
          <router-view></router-view>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import About from '../../components/About'
import DatasetCard from '../../components/DatasetCard'
import DatasetChoose from '../../components/DatasetChoose.vue'
export default {
  name:'HaystackQA',
  data(){
    return{
      question:"目的はなんですか"
    }
  },
  components:{
    About,
    DatasetCard,
    DatasetChoose,
  },
}
</script>

<style>

.answer{
  display: inline;
  text-align: center;
  color:black;
  border-bottom:solid;
  border-color:gray;
  margin-right: 1000px;
  padding: 10px 10px 0px 10px;
}
.content{
  text-align:center;
  margin-top:10px;
  font-size:30px;
  margin-bottom:50px;
}


</style>