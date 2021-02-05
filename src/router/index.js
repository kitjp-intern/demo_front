import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HaystackQA from '../views/HaystackQA/parent'
import Question from  '../views/HaystackQA/Question'
import Answer from '../views/HaystackQA/Answer'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  { path: '/HaystackQA',
    component: HaystackQA,
    childlen:[
    {
      path: '',
      components: {
        child:Question
      }
    },
    {
      path: 'answer',
      components: {
        child:Answer
    }}]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
})

export default router
