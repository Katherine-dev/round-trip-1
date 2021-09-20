import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ExampleView from '@/ui/views/ExampleView.vue';

Vue.use(VueRouter);

const examplePage: RouteConfig = {
  name: 'example',
  path: '/',
  component: ExampleView,
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    examplePage,
  ],
});

export default router;
