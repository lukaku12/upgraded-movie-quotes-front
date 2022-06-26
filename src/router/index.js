import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/notAuthenticated/Landing.vue";
import NotFound from "@/views/NotFound.vue";
// import Forbidden from "@/views/Forbidden.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name: "home" },
    { path: "/login", component: Landing, name: "login" },
    { path: "/register", component: Landing, name: "sign-up" },
    { path: "/:notFound(.*)", component: NotFound, name: "not-found" },
  ],
});

export default router;
