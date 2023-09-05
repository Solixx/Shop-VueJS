import Home from '../views/Home.vue'
import AdminPanel from '../views/AdminPanel.vue'
import Shop from '../views/Shop.vue'
import Commands from '../views/Commands.vue'
import Product from '../views/Product.vue'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/admin-panel/:id?", name: "AdminPanel", component: AdminPanel},
    {path: "/shop/:gender?", name: "Shop", component: Shop, props: true},
    {path: "/commands", name: "Commands", component: Commands},
    {path: "/product/:id", name: "Product", component: Product},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;