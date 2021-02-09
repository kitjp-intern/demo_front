<template>
  <v-container fluid>
    <br>
    <br>
    <br>
    <br>
    <br>
    <dataset-choose/>
    <br>
    <br>
    <br>
    <br>
    <question-card/>
  </v-container>
</template>

<script>
import DatasetChoose from '../../components/DatasetChoose'
import QuestionCard from '../../components/QuestionCard'
export default {
  components: { DatasetChoose, QuestionCard },

}
</script>

<style>

</style>