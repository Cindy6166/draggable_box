import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import DraggableBox from "../components/DraggableBox.vue"
const routes: Array<any> = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/draggableBox",
        name: "draggablBox",
        component: DraggableBox,
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(useAuthStore().isLogin === false && to.path !== '/login') next('/login');
  else next();
})

export default router;
