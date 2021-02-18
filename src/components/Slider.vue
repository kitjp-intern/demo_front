<template>
  <v-card
    flat
    color="transparent"
  >
    <v-subheader>最低確率</v-subheader>

    <v-card-text>
      <v-row>
        <v-col class="pr-4">
          <v-slider
            v-model="prob"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
            thumb-label="always"
            step="10"
            ticks
          >
            <template v-slot:append>
              <v-text-field
                v-model="prob"
                @input="updateProb"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      prob:60,
      min:0,
      max:100
    }
  },
  methods:{
    updateProb(){
      this.$store.dispatch('updateProb',this.prob)
    }
  }
}
</script>

<style>

</style>