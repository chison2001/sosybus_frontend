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
router.beforeEach((to, from, next) => {
    const publicPages= ['/login', '/register'];
    const authRequired =!publicPages.includes(to.path);
    if(authRequired) {
        next('/login')
    } else {
        next()
    }
})
export default router