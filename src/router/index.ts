import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
const routes:Array<any> = [
    {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/login",
        component: Login,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router