import { createRouter, createWebHashHistory } from "vue-router";
import { staticRoutes } from "./static.router";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes,
  });