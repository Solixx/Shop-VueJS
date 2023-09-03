import Home from '../views/Home.vue'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {path: "/", name: "Home", component: Home, props: (route) => ({ products: route.params.products })},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;