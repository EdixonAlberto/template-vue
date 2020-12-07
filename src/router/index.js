import Vue from 'vue';
import VueRouter from 'vue-router';

// VIEWS
const Home = () => import('@views/home');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    else return { y: 0, behavior: 'smooth' };
  },
  routes
});

export default router;
