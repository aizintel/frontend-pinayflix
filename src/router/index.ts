import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MostViewed from '../views/MostViewed.vue'
import MostPopular from '../views/MostPopular.vue'
import MostLongest from '../views/MostLongest.vue'

import Stream from '../views/Stream.vue'
import Random from '../views/Random.vue'
import Latest from '../views/Latest.vue'
import Landing from '../views/Landing.vue'

const routes = [
    { path: '/', component: Landing, name: 'landing' },
    { path: '/pinay/home/:page?', component: Home, name: 'home' },
    { path: '/pinay/random/:page?', component: Random, name: 'random' },
    { path: '/pinay/latest/:page?', component: Latest, name: 'latest' },
    { path: '/pinay/most-viewed/:page?', component: MostViewed, name: 'most-viewed' },
    { path: '/pinay/most-popular/:page?', component: MostPopular, name: 'most-popular' },
    { path: '/pinay/most-longest/:page?', component: MostLongest, name: 'most-longest' },
    { path: '/pinay/stream', component: Stream, name: 'stream' }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
