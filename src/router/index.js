import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import History from '@/pages/HistoryPage'
import Skill from '@/pages/SkillPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
