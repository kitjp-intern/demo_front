(function(t){function e(e){for(var n,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/demo_front/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"contents"}},[a("v-navigation-drawer",{attrs:{app:"",permanent:"",dark:"",color:"primary"}},[a("v-list-item",[a("v-list-item-content",{attrs:{color:"primary"}},[a("v-list-item-title",{staticClass:"title"},[t._v(" KIT Demostration ")])],1)],1),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.link}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-main",[a("keep-alive",[a("router-view")],1)],1)],1)},o=[],i={name:"App",components:{},data:function(){return{items:[{title:"Home",icon:"mdi-home",link:"/"},{title:"HaystackQA",icon:"mdi-text-box",link:"HaystackQA"}]}}},s=i,u=(a("cf1b"),a("2877")),c=a("6544"),l=a.n(c),d=a("7496"),f=a("132d"),p=a("8860"),m=a("da13"),v=a("5d23"),h=a("34c3"),g=a("f6c4"),b=a("f774"),y=Object(u["a"])(s,r,o,!1,null,"628ad3cc",null),w=y.exports;l()(y,{VApp:d["a"],VIcon:f["a"],VList:p["a"],VListItem:m["a"],VListItemContent:v["a"],VListItemIcon:h["a"],VListItemTitle:v["b"],VMain:g["a"],VNavigationDrawer:b["a"]});var _=a("f309");n["a"].use(_["a"]);var k=new _["a"]({}),x=(a("d3b7"),a("8c4f")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{"text-align":"center"}},[t._v("KT DEMO")])},A=[],j={},S=Object(u["a"])(j,O,A,!1,null,null,null),B=S.exports;n["a"].use(x["a"]);var E=[{path:"/",name:"Home",component:B},{path:"/haystackQA",name:"HaystackQA",component:function(){return a.e("about").then(a.bind(null,"4d80"))}}],T=new x["a"]({mode:"history",base:"/demo_front/",routes:E,linkActiveClass:"active"}),D=T,C=(a("b0c0"),a("bc3a")),L=a.n(C),P=a("2f62");n["a"].use(P["a"]);var V=new P["a"].Store({state:{datasetName:null,dataBase:[],dataSet:{},answerTop10:{},answer:{},toggleRight:!1,contexts:{},dialog:!1,dialogAnswer:!1,apiurl:"https://098d1a5b7905.ngrok.io"},mutations:{mutateDataBase:function(t,e){t.dataBase=e}},actions:{commitDataBase:function(t){var e=t.commit,a=t.state,n=a.apiurl+"/get/database";return L.a.get(n).then((function(t){for(var n=0;n<t.data.length;n++)t.data[n].show=!1,t.data[n].flex=4,t.data[n].dialog=!1,a.contexts[t.data[n].name]=t.data[n].contexts;e("mutateDataBase",t.data)})).catch((function(t){console.log(t.message),e("mutateDataBase",{})}))},pushDataBase:function(t){var e=t.apiurl+"/post/database";L.a.post(e,{database:t.datasetName})}},getters:{getStateDataBase:function(t){return t.dataBase}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:k,router:D,store:V,render:function(t){return t(w)}}).$mount("#app")},"6b54":function(t,e,a){},cf1b:function(t,e,a){"use strict";a("6b54")}});