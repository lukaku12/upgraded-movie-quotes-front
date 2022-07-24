import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "@/router/guards.js";

import Landing from "@/views/Landing.vue";
import NotFound from "@/views/NotFound.vue";
import Movies from "@/views/authenticated/Movies.vue";
import Movie from "@/views/authenticated/Movie.vue";
import EditProfile from "@/views/authenticated/EditProfile.vue";
import ViewQuote from "@/views/authenticated/ViewQuote.vue";
import EditQuote from "@/views/authenticated/EditQuote.vue";
import AddQuoteForMovie from "@/views/authenticated/AddQuoteForMovie.vue";
// import Forbidden from "@/views/Forbidden.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing, name: "home" },
    { path: "/login", component: Landing, name: "login" },
    { path: "/register", component: Landing, name: "sign-up" },
    { path: "/forgot-password", component: Landing, name: "forgot-password" },
    { path: "/reset-password/:token", component: Landing, name: "reset-password" },
    {
      path: "/quotes/create",
      component: Landing,
      name: "add-quote",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies",
      component: Movies,
      name: "movies",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies/add",
      component: Movies,
      name: "add-movie",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies/:movie",
      component: Movie,
      name: "movie",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies/:movie/quote/add",
      component: AddQuoteForMovie,
      name: "add-quote-for-movie",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies/:movie/quote/:quote",
      component: ViewQuote,
      name: "view-quote",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/movies/:movie/quote/:quote/edit",
      component: EditQuote,
      name: "edit-quote",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/profile/edit",
      component: EditProfile,
      name: "edit-profile",
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/404",
      component: NotFound,
      name: "404",
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      name: "not-found",
      beforeEnter: [isAuthenticated],
    },
  ],
});

export default router;
