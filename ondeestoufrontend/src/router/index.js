import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home"
import Favoritos from "../components/Favoritos"
import LoginUser from "../components/LoginUser"
import Mapa from "../components/Mapa"
import Buscar from "../components/Buscar"

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
    },
    {
        path: "/buscar",
        name: "Buscar",
        component: Buscar
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