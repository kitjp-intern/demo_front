<template>
  <v-container>
    <v-row>
    <textarea 
      v-model="contexts[databaseName]"
      class="textlines"
      placeholder="データの中身の例"
      >              
    </textarea>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data:()=>({
    dialog:false,
  }),
  computed:{
    database(){
      return this.$store.state.dataBase
    },
    databaseName(){
      return this.$store.state.datasetName
    },
    contexts(){
      return this.$store.state.contexts
    }
  },

}
</script>

<style>
.textlines {
    border: 1px solid black;  /* 枠線 */
    border-radius: 0.67em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color:white;  /* 背景色 */
    width: 48em;             /* 横幅 */
    height: 300px;           /* 高さ */
    font-size: 1em;          /* 文字サイズ */
    line-height: 1.2;        /* 行の高さ */
}
</style>