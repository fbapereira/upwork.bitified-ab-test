import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import List from "../views/List.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
