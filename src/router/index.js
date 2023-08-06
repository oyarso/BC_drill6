import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import OpinionesView from '@/views/OpinionesView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/opiniones/:id",
    name: "opiniones",
    component: OpinionesView
  },
{
  path: '/:catchAll(.*)',
  name: 'notfound',
  component: NotFoundComponent
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
