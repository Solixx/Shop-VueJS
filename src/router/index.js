import Home from '../views/Home.vue'
import AdminPanel from '../views/AdminPanel.vue'
import Shop from '../views/Shop.vue'
import Commands from '../views/Commands.vue'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/admin-panel", name: "AdminPanel", component: AdminPanel},
    {path: "/shop/:gender?", name: "Shop", component: Shop, props: true},
    {path: "/commands", name: "Commands", component: Commands},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;