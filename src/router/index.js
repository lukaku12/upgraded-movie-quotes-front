import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import NotFound from "@/views/NotFound.vue";
// import Forbidden from "@/views/Forbidden.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name: "home" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "sign-up" },
    { path: "/:notFound(.*)", component: NotFound, name: "not-found" },
  ],
});

export default router;
