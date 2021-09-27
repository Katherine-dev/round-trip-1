import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RouteComponent from '@/ui/components/RouteComponent.vue';

Vue.use(VueRouter);

const routeSearch: RouteConfig = {
  name: 'route-search',
  path: '/',
  component: RouteComponent,
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    routeSearch,

  ],
});

export default router;
