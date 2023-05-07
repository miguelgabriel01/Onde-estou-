import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home"
import Favoritos from "../components/Favoritos"
import LoginUser from "../components/LoginUser"
import Mapa from "../components/Mapa"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "LoginUser",
        component: LoginUser
    },
    {
        path: "/favoritos",
        name: "Favoritos",
        component: Favoritos
    },
    {
        path: "/mapa",
        name: "Mapa",
        component: Mapa
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" })
    }
})

export default router