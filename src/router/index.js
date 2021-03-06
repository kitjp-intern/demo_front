import Vue from 'vue'
import VueRouter from 'vue-router'
import HaystackQA from '../views/HaystackQA/HaystackQA'
import Question from  '../views/HaystackQA/Question'
import Answer from '../views/HaystackQA/Answer'

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: HaystackQA,
    children:[
    {
      path:'',
      component:Question
    },
    {
      path:'answer',
      component:Answer
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
})

export default router
