import Vue from 'vue'
import Router from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'
import Homepage from '@/components/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultContainer',
      redirect: '/home',
      component: DefaultContainer,
      children: [
        {
          path: '/home',
          name: 'Homepage',
          component: Homepage
        }
      ]
    }
  ]
})
