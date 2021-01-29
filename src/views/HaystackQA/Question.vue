<template>
  <v-container fluid>
    <p>HI</p>
    <dataset-choose/>
    <input-card/>
  </v-container>
</template>

<script>
import DatasetChoose from '../../components/DatasetChoose'
import InputCard from '../../components/InputCard'
export default {
  components: { DatasetChoose, InputCard },

}
</script>

<style>

</style>