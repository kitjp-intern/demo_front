<template>
  <v-container fluid>
    <v-btn to="/HaystackQA">Reset</v-btn>
    <answer-card/>
    <top-k-card/>
  </v-container>
</template>

<script>
import AnswerCard from '../../components/AnswerCard'
import TopKCard from '../../components/TopKCard'
export default {
  components: {  AnswerCard, TopKCard,},
}
</script>

<style>

</style>