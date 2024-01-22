import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginVue from "../views/Login.vue";
import RegisterVue from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: LoginVue,
    },
    {
        path: "/register",
        name: "register",
        component: RegisterVue,
    },
];


const router =createRouter({
    history : createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})
export default router