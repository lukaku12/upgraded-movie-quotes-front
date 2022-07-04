<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <AuthHeader></AuthHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14] font-bold"
    >
      <Navigation></Navigation>
      <div class="w-full flex flex-col items-center">
        <MobileSearch></MobileSearch>
        <Notifications></Notifications>
        <div
          class="w-full flex flex-col items-center min-h-[calc(100vh-86px)] bg-[#0f0e14]"
        >
          <div
            class="flex flex-col md:items-center md:flex-row px-10 py-8 gap-5 w-full text-white"
          >
            <h1 class="text-2xl">My list of movies</h1>
            <p>(total {{ movies.length }})</p>
          </div>
          <div
            class="flex flex-col items-center w-full h-full sm:grid md:grid-cols-2 2xl:grid-cols-3 mb-10"
          >
            <Movie
              v-for="movie in movies"
              :key="movie.id"
              :movie="movie"
            ></Movie>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
import Movie from "@/components/authenticated/movies/Movie.vue";
import axios from "axios";

export default {
  name: "Movies",
  components: {
    MobileSearch,
    AuthHeader,
    Movie,
    Navigation,
    Notifications,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/movies").then((response) => {
      this.movies = response.data;
      console.log(response.data);
    });
  },
};
</script>
