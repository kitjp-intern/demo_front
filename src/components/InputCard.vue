<template>
  <v-container fluid>
    <v-textarea v-model="contexts[databaseName]" solo height="300">              
      <template v-slot:label>
        <div>
         データ中身の例 
        </div>
      </template>
    </v-textarea>
  </v-container>
</template>

<script>
export default {
  data:()=>({
    dialog:false,
    input10:[
      {name:"aaaaa.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"bbbbb.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"ccccc.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"ddddd.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"eeeee.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"fffff.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"ggggg.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"hhhhh.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"iiiii.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"jjjjj.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{name:"kkkkk.txt",flex: 2,contexts:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
    ]
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
#maru {
 height:30px;
 width:30px;
 border-radius:50%;
 border: solid 1px black;
 line-height:30px;
 background-color:white;
 margin-top:10px;
 margin-left:200px;
 
}
</style>