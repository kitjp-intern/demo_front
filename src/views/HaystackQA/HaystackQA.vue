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
          <div v-if="question!=''" class="content"><b>{{ question }}</b></div>
          <div v-else><br><div>
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
    }
  },
  computed:{
    question(){
      return this.$store.getters.getStateQuestion
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