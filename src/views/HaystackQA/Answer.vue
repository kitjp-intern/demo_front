<template>
      <v-container fluid>
        <dataset-choose/>
        <answer-card/>
        <top-k-card/>
      </v-container>
</template>

<script>
import AnswerCard from '../../components/AnswerCard'
import DatasetChoose from '../../components/DatasetChoose'
import TopKCard from '../../components/TopKCard'
export default {
  components: { DatasetChoose, AnswerCard, TopKCard,},
}
</script>

<style>

</style>