import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Privacy from '@/views/Privacy';
import Terms from '@/views/Terms';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/privacy',
      component: Privacy
    },
    {
      path: '/terms',
      component: Terms
    }
  ]
});

export default router;
