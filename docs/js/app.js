(function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],d=0,v=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(v.length)v.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/demo_front/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"053c":function(t,a,e){},"07d9":function(t,a,e){"use strict";e("053c")},"14b5":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"contents"}},[e("v-navigation-drawer",{attrs:{app:"",permanent:"",dark:"",color:"primary"}},[e("v-list-item",[e("v-list-item-content",{attrs:{color:"primary"}},[e("v-list-item-title",{staticClass:"title"},[t._v(" KIT Demostration ")])],1)],1),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e("v-list-item",{key:a.title,attrs:{link:"",to:a.link}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.title))])],1)],1)})),1)],1),e("v-main",[e("div",[e("keep-alive",[e("router-view")],1)],1)])],1)},o=[],s={name:"App",components:{},data:function(){return{items:[{title:"home",icon:"mdi-home",link:"/"},{title:"HaystackQA",icon:"mdi-text-box",link:"/HaystackQA"}]}}},i=s,c=(e("e7ef"),e("2877")),l=e("6544"),u=e.n(l),d=e("7496"),v=e("132d"),f=e("8860"),p=e("da13"),m=e("5d23"),h=e("34c3"),w=e("f6c4"),b=e("f774"),g=Object(c["a"])(i,r,o,!1,null,"4a874993",null),_=g.exports;u()(g,{VApp:d["a"],VIcon:v["a"],VList:f["a"],VListItem:p["a"],VListItemContent:m["a"],VListItemIcon:h["a"],VListItemTitle:m["b"],VMain:w["a"],VNavigationDrawer:b["a"]});var x=e("f309");n["a"].use(x["a"]);var V=new x["a"]({}),k=e("8c4f"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticStyle:{"text-align":"center"}},[t._v("KT DEMO")])},C=[],$={},B=Object(c["a"])($,y,C,!1,null,null,null),A=B.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticStyle:{"border-left":"10px"},attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[e("about"),e("dataset-card")],1),e("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"/HaystackQA"}},[t._v("Question")])],1),e("li",[e("router-link",{attrs:{to:"/HaystackQA/Answer"}},[t._v("answer")])],1)]),e("div",{staticClass:"child-page"},[e("router-view")],1)])],1)],1)},j=[],D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("h1",[t._v("Haystack Q&Aの使い方")])]),e("v-row",[e("ol",[e("li",[t._v("データセットを選択")]),e("li",[t._v("質問文を記入後"),e("v-btn",{attrs:{"x-small":"",rounded:"",color:"primary"}},[t._v("Send")])],1),e("li",[t._v("答えを確認してください。")]),e("li",[t._v("他の回答を確認したい場合はカードをクリックしてください")])])])],1)},S=[],N={name:"About",components:{}},T=N,E=(e("b8ab"),e("8336")),q=e("a523"),P=e("0fd9"),I=Object(c["a"])(T,D,S,!1,null,null,null),L=I.exports;u()(I,{VBtn:E["a"],VContainer:q["a"],VRow:P["a"]});var R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:"",justify:"center"}},t._l(t.dataOutput,(function(a){return e("v-col",{key:a.name,attrs:{cols:a.flex}},[e("v-card",{attrs:{elevation:"5",outlined:""}},[e("v-card-title",{domProps:{textContent:t._s(a.name)}}),e("v-card-text",{domProps:{textContent:t._s(a.summary)}}),e("v-card-actions",[e("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(t){a.show=!a.show}}},[t._v(" Explore ")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(t){a.show=!a.show}}},[e("v-icon",[t._v(t._s(a.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"card.show"}]},[e("v-divider"),e("v-card-text",[t._v(t._s(a.explain))])],1)]),e("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(e){t.datasetChange(a.name),t.pushDataBase()}}},[t._v("データセット選択")])],1)],1)})),1),e("input-card")],1)},H=[],M=e("bc3a"),Q=e.n(M),K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contexts[t.databaseName],expression:"contexts[databaseName]"}],staticClass:"textlines",attrs:{placeholder:"データの中身の例"},domProps:{value:t.contexts[t.databaseName]},on:{input:function(a){a.target.composing||t.$set(t.contexts,t.databaseName,a.target.value)}}})])],1)},F=[],G={data:function(){return{dialog:!1}},computed:{database:function(){return this.$store.state.dataBase},databaseName:function(){return this.$store.state.datasetName},contexts:function(){return this.$store.state.contexts}}},J=G,z=(e("8d26"),Object(c["a"])(J,K,F,!1,null,null,null)),U=z.exports;u()(z,{VContainer:q["a"],VRow:P["a"]});var W={name:"DatasetCard",components:{InputCard:U},methods:{datasetChange:function(t){this.$store.state.datasetName=t,console.log(this.$store.state.datasetName)},pushDataBase:function(){var t="https://098d1a5b7905.ngrok.io/get/"+this.$store.state.datasetName;Q.a.get(t,{database:this.$store.state.datasetName}).then((function(t){console.log("pushDataBase"+t)})).catch((function(t){console.log(t)}))}},computed:{dataOutput:function(){return this.$store.getters.getStateDataBase}},created:function(){this.$store.dispatch("commitDataBase")}},X=W,Y=e("b0af"),Z=e("99d9"),tt=e("62ad"),at=e("ce7e"),et=e("0789"),nt=e("2fa4"),rt=Object(c["a"])(X,R,H,!1,null,null,null),ot=rt.exports;u()(rt,{VBtn:E["a"],VCard:Y["a"],VCardActions:Z["a"],VCardText:Z["c"],VCardTitle:Z["d"],VCol:tt["a"],VContainer:q["a"],VDivider:at["a"],VExpandTransition:et["a"],VIcon:v["a"],VRow:P["a"],VSpacer:nt["a"]});var st={name:"HaystackQA",components:{About:L,DatasetCard:ot}},it=st,ct=(e("fc5c"),Object(c["a"])(it,O,j,!1,null,null,null)),lt=ct.exports;u()(ct,{VCol:tt["a"],VContainer:q["a"],VRow:P["a"]});var ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("p",[t._v("HI")]),e("dataset-choose"),e("input-card")],1)},dt=[],vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("h2",[t._v("あなたが選んだデータセットは...")])]),e("v-row",{attrs:{justify:"center"}},[null!=t.datasetName?e("h1",{attrs:{id:"datasetname"}},[t._v(t._s(t.datasetName))]):e("h1",[e("br")])])],1)},ft=[],pt={computed:{datasetName:function(){return this.$store.state.datasetName}}},mt=pt,ht=(e("96f4"),Object(c["a"])(mt,vt,ft,!1,null,null,null)),wt=ht.exports;u()(ht,{VContainer:q["a"],VRow:P["a"]});var bt={components:{DatasetChoose:wt,InputCard:U}},gt=bt,_t=Object(c["a"])(gt,ut,dt,!1,null,null,null),xt=_t.exports;u()(_t,{VContainer:q["a"]});var Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("dataset-choose"),e("answer-card"),e("top-k-card")],1)},kt=[],yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"qa"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",[e("dataset-choose"),e("question-card"),e("h1",{staticClass:"answer"},[t._v("Answer")]),e("div",[e("b",[t._v(t._s(t.answer1.answer))])])],1)],1)],1)},Ct=[],$t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}}},[e("v-container",[e("v-row",{attrs:{justify:"center","align-content":"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{label:"質問",outlined:"",solo:"",dense:""},model:{value:t.question,callback:function(a){t.question=a},expression:"question"}})],1),e("v-col",{attrs:{cols:"1"}},[e("v-btn",{staticClass:"pa-1 ma-1",attrs:{disabled:t.diaLog,loading:t.diaLog,color:"primary"},on:{click:function(a){return t.GetAnswer(t.question)}}},[t._v("SEND")]),e("v-dialog",{attrs:{width:"1000"},model:{value:t.dialogAnswer,callback:function(a){t.dialogAnswer=a},expression:"dialogAnswer"}},[e("v-card",{attrs:{color:"primary",dark:""}},[e("v-card-title",[t._v(" Answer:"+t._s(t.answer1.answer)+" ")])],1)],1),e("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"1000"},model:{value:t.diaLog,callback:function(a){t.diaLog=a},expression:"diaLog"}},[e("v-card",{attrs:{color:"primary",dark:""}},[e("v-card-title",[t._v(" 質問送信中 "),e("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1),e("v-snackbar",{staticClass:"font-weight-bold",attrs:{color:t.snackBar.color,top:"",timeout:3e3},model:{value:t.snackBar.show,callback:function(a){t.$set(t.snackBar,"show",a)},expression:"snackBar.show"}},[t._v(" "+t._s(t.snackBar.message)+" ")])],1)],1)},Bt=[],At={data:function(){return{snackBar:{show:!1,color:"",message:"",question:"目で追う時間が長くなるのはどんな女性？"}}},computed:{answerOutput:function(){return this.$store.state.answerTop10},answer1:function(){return this.$store.state.answer},diaLog:function(){return this.$store.state.dialog},dialogAnswer:function(){return this.$store.state.dialogAnswer}},methods:{GetAnswer:function(t){var a=this;this.$store.state.dialog=!0;var e="https://098d1a5b7905.ngrok.io/get/"+decodeURI(t);Q.a.get(e).then((function(t){for(var e=0;e<t.data.q.length;e++)t.data.q[e].dialog=!1,t.data.q[e].flex=12,t.data.q[e].top=e+1;a.$store.state.answerTop10=t.data.q,console.log(t.data.q),a.$store.state.answer=t.data.q[0],a.showSnackBar("success","通信成功"),a.$store.state.dialog=!1})).catch((function(t){console.log(t.message),a.showSnackBar("error",t.message+"取得に失敗しました。時間をおいて再度お試しください"),a.$store.state.dialog=!1})),this.$store.state.dialogAnswer=!0},showSnackBar:function(t,a){this.snackBar.message=a,this.snackBar.color=t,this.snackBar.show=!0}}},Ot=At,jt=(e("e758"),e("169a")),Dt=e("4bd4"),St=e("8e36"),Nt=e("2db4"),Tt=e("8654"),Et=Object(c["a"])(Ot,$t,Bt,!1,null,"1afd5b47",null),qt=Et.exports;u()(Et,{VBtn:E["a"],VCard:Y["a"],VCardTitle:Z["d"],VCol:tt["a"],VContainer:q["a"],VDialog:jt["a"],VForm:Dt["a"],VProgressLinear:St["a"],VRow:P["a"],VSnackbar:Nt["a"],VTextField:Tt["a"]});var Pt={components:{DatasetChoose:wt,QuestionCard:qt},data:function(){return{snackBar:{show:!1,color:"",message:""}}},computed:{answer1:function(){return this.$store.state.answer},dialogAnswer:function(){return this.$store.state.dialogAnswer}},methods:{}},It=Pt,Lt=(e("07d9"),Object(c["a"])(It,yt,Ct,!1,null,"f2bbd152",null)),Rt=Lt.exports;u()(Lt,{VCol:tt["a"],VContainer:q["a"],VRow:P["a"]});var Ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[t.answer1!=[{answer:null}]?e("v-row",{staticClass:" pt-10",attrs:{dense:""}},t._l(t.answer1,(function(a){return e("v-col",{key:a.answer,attrs:{cols:a.flex}},[e("v-dialog",{attrs:{width:"800px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-card",t._g(t._b({attrs:{outlined:"",hover:""}},"v-card",o,!1),r),[a.answer.length<15?e("v-card-title",[t._v(t._s(a.answer))]):e("v-card-title",[t._v(t._s(a.answer.substring(0,14)+"..."))]),e("v-card-subtitle",[t._v(t._s("Probabilty:"+Math.floor(1e3*a.prob)/1e3))])],1)]}}],null,!0),model:{value:a.dialog,callback:function(e){t.$set(a,"dialog",e)},expression:"top.dialog"}},[e("v-card",[e("v-toolbar",{attrs:{dense:"",dark:"",color:"primary"}},[e("span",[t._v("詳細")]),e("v-spacer"),e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){a.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Answer:"+t._s(a.answer))])]),e("v-card-subtitle",[t._v(t._s("Probabilty:"+Math.floor(1e3*a.prob)/1e3))]),e("v-card-text",{domProps:{innerHTML:t._s(a.context)}})],1)],1)],1)})),1):t._e()],1)},Mt=[],Qt={computed:{answer1:function(){return this.$store.state.answerTop10}}},Kt=Qt,Ft=(e("d511"),e("71d9")),Gt=Object(c["a"])(Kt,Ht,Mt,!1,null,"1b942e15",null),Jt=Gt.exports;u()(Gt,{VBtn:E["a"],VCard:Y["a"],VCardSubtitle:Z["b"],VCardText:Z["c"],VCardTitle:Z["d"],VCol:tt["a"],VContainer:q["a"],VDialog:jt["a"],VIcon:v["a"],VRow:P["a"],VSpacer:nt["a"],VToolbar:Ft["a"]});var zt={components:{DatasetChoose:wt,AnswerCard:Rt,TopKCard:Jt}},Ut=zt,Wt=Object(c["a"])(Ut,Vt,kt,!1,null,null,null),Xt=Wt.exports;u()(Wt,{VContainer:q["a"]}),n["a"].use(k["a"]);var Yt=[{path:"/",component:A},{path:"/HaystackQA",component:lt,childlen:[{path:"",component:xt},{path:"Answer",component:Xt}]}],Zt=new k["a"]({mode:"history",routes:Yt}),ta=Zt,aa=(e("b0c0"),e("2f62"));n["a"].use(aa["a"]);var ea=new aa["a"].Store({state:{datasetName:null,dataBase:[],dataSet:{},answerTop10:{},answer:{},toggleRight:!1,contexts:{},dialog:!1,dialogAnswer:!1,apiurl:"https://098d1a5b7905.ngrok.io"},mutations:{mutateDataBase:function(t,a){t.dataBase=a}},actions:{commitDataBase:function(t){var a=t.commit,e=t.state,n=e.apiurl+"/get/database";return Q.a.get(n).then((function(t){for(var n=0;n<t.data.length;n++)t.data[n].show=!1,t.data[n].flex=4,t.data[n].dialog=!1,e.contexts[t.data[n].name]=t.data[n].contexts;a("mutateDataBase",t.data)})).catch((function(t){console.log(t.message),a("mutateDataBase",{})}))},pushDataBase:function(t){var a=t.apiurl+"/post/database";Q.a.post(a,{database:t.datasetName})}},getters:{getStateDataBase:function(t){return t.dataBase}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:V,router:ta,store:ea,render:function(t){return t(_)}}).$mount("#app")},6810:function(t,a,e){},"7f1e":function(t,a,e){},"8d26":function(t,a,e){"use strict";e("7f1e")},9138:function(t,a,e){},"96f4":function(t,a,e){"use strict";e("a878")},"98e0":function(t,a,e){},a10c:function(t,a,e){},a878:function(t,a,e){},b8ab:function(t,a,e){"use strict";e("98e0")},d511:function(t,a,e){"use strict";e("14b5")},e758:function(t,a,e){"use strict";e("a10c")},e7ef:function(t,a,e){"use strict";e("9138")},fc5c:function(t,a,e){"use strict";e("6810")}});