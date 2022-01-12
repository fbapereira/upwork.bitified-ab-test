import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import store from "@/store";

import Home from "../views/Home.vue";
import List from "../views/List.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/List",
    name: "List",
    component: List,
    beforeEnter: (to, from, next) => {
      if (to.name === "List") {
        const user = store.getters.getUser;
        if (!user.name) {
          next("/");
        }
      }
      next();
    },
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
