import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MostViewed from '../views/MostViewed.vue'
import MostPopular from '../views/MostPopular.vue'
import MostLongest from '../views/MostLongest.vue'
import Category from '../views/Category.vue'
import Stream from '../views/Stream.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/pinay/category', component: Category, name: 'category' },
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
