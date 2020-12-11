<template>
  <v-container  color="black" class="card" fluid>
    <v-row dense class=" pt-10" >
          <v-col
            v-for="top in database"
            :key="top.name"
            :cols="top.flex"
          >
          <v-dialog
            v-model="top.dialog"
            width="800px"
          >
          <template v-slot:activator="{ on, attrs }">
              <v-card outlined  hover v-bind="attrs" v-on="on" >
                <v-card-title v-if="top.fileName.length<15">{{top.fileName}}</v-card-title>
                <v-card-title v-else>{{top.fileName.substring(0,14)+ '...'}}</v-card-title> 
                <v-card-subtitle>{{top.text}}</v-card-subtitle>
              </v-card>
          </template>

          <v-card>
          <v-toolbar dense dark color="primary">
            <span>詳細</span>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="top.dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
            <v-card-title>
               <span class="headline">:{{top.contexts}}</span>
            </v-card-title>
            <v-card-text v-html="top.contexts">
            </v-card-text>
          </v-card>
          </v-dialog>

         </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  data:()=>({
    dialog:false,
    input10:[
      {fileName:"aaaaa.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"bbbbb.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"ccccc.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"ddddd.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"eeeee.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"fffff.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"ggggg.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"hhhhh.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"iiiii.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"jjjjj.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
      ,{fileName:"kkkkk.txt",flex: 2,text:"texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"}
    ]
  }),
  computed:{
    database(){
      return this.$store.state.dataBase
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