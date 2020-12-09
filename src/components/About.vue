<!-- Home data -->
<template>
  <v-container>
    <v-row>
    <h1>Haystack Q&Aの使い方</h1>
    </v-row>
    <v-row>
      <ol>
        <li>データセットを選択</li>
        <li>質問文を記入後<v-btn x-small rounded  color='primary'>Send</v-btn></li>
        <li>答えを確認してください。</li>
        <li>他の回答を確認したい場合はカードをクリックしてください</li>
      </ol>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {
  }
}
</script>

<style>
#home{
  text-align: center;
}

</style>
