import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";
import NotFound from "@/views/NotFound.vue";
import Movies from "@/views/authenticated/Movies.vue";
import Movie from "@/views/authenticated/Movie.vue";
import EditProfile from "@/views/authenticated/EditProfile.vue";
// import Forbidden from "@/views/Forbidden.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name: "home" },
    { path: "/login", component: Landing, name: "login" },
    { path: "/register", component: Landing, name: "sign-up" },
    { path: "/quote/create", component: Landing, name: "add-quote" },
    { path: "/movies", component: Movies, name: "movies" },
    { path: "/movies/:movie", component: Movie, name: "movie" },
    { path: "/profile/edit", component: EditProfile, name: "edit-profile" },
    { path: "/:notFound(.*)", component: NotFound, name: "not-found" },
  ],
});

export default router;
