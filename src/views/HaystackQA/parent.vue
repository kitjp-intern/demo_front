<template>
<v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" style="border-left:10px">
        <about/>
        <dataset-card/>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        <div>
          <router-link to="/HaystackQA/answer">answer</router-link>
        </div>
        <div>
          <router-view/>
        </div>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import About from '../../components/About'
import DatasetCard from '../../components/DatasetCard'
export default {
  name:'HaystackQA',
  components:{
    About,
    DatasetCard,
  },
}
</script>

<style>

.router-enter-active {
  transition: all 1s;
  transition-delay: 0.5s;
}
.router-leave-active {
  transition: all 0.5s;
}
.router-enter,
.router-leave-to {
  opacity: 0;
}


</style>