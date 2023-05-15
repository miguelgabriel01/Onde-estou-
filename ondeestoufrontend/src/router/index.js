import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home"
import Favorites from "../components/Favorites"
import LoginUser from "../components/LoginUser"
import Map from "../components/Map"

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
        path: "/favorites",
        name: "Favorites",
        component: Favorites
    },
    {
        path: "/map",
        name: "Map",
        component: Map
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