import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/video/:id',
    name: 'video-watch',
    component: () => import(/* webpackChunkName: "video-watch" */ '@/views/VideoWatch.vue'),
    params: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
