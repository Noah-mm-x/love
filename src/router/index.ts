import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/a",
    name: "Index",
    component: () => import("@/views/Index.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;