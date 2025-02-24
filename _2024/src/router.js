import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Spotify from './views/Spotify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/spotify',
      name: 'spotify',
      component: Spotify
    }
  ]
})
