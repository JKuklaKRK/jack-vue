import Vue from 'vue'
import Router from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'
import Homepage from '@/components/Homepage'
import CourtsQuiz from '@/components/CourtsQuiz'

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
        },
        {
          path: '/courts',
          name: 'CourtsQuiz',
          component: CourtsQuiz
        }
      ]
    }
  ]
})
