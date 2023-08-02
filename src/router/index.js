import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/opiniones/:title",
    name: "opiniones",
    component: () =>
      import(/* webpackChunkName: "opiniones" */ "../views/OpinionesView.vue"),
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
