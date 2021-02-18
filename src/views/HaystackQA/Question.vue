<template>
  <v-container fluid>
        <question-card/>
    <v-row>
      <v-col>
        <slider></slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionCard from '../../components/QuestionCard'
import Slider from '../../components/Slider.vue'
export default {
  components: { QuestionCard,Slider },

}
</script>

<style>

</style>