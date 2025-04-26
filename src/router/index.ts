import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MostViewed from '../views/MostViewed.vue'
import MostPopular from '../views/MostPopular.vue'
import MostLongest from '../views/MostLongest.vue'
import Category from '../views/Category.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/pinay/category', component: Category },
    { path: '/pinay/most-viewed', component: MostViewed },
    { path: '/pinay/most-popular', component: MostPopular },
    { path: '/pinay/most-longest', component: MostLongest }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
