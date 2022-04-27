import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import DraggableBox from "../components/DraggableBox.vue"
const routes: Array<any> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/draggableBox",
    name: "draggablBox",
    component: DraggableBox,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
