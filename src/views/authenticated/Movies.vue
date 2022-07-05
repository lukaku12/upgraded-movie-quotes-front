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
            class="flex flex-col md:items-center justify-between md:flex-row px-10 py-8 gap-5 w-full text-white"
          >
            <div
              class="flex flex-col gap-5 lg:flex-row lg:items-center lg:h-[37px]"
            >
              <h1 class="text-2xl">My list of movies</h1>
              <p>(total {{ searchedMovies.length }})</p>
            </div>
            <DesktopSearch
              :movies="movies"
              :search-value="searchValue"
              :search-movie="searchMovie"
              width="w-[56%]"
            ></DesktopSearch>
          </div>
          <div
            class="flex flex-col items-center w-full h-full sm:grid md:grid-cols-2 2xl:grid-cols-3 mb-10"
          >
            <Movie
              v-for="movie in searchedMovies"
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
import DesktopSearch from "@/components/authenticated/DesktopSearch.vue";
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
    DesktopSearch,
  },
  data() {
    return {
      movies: [],
      searchValue: "",
      searchedMovies: [],
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/movies").then((response) => {
      this.movies = response.data;
      this.searchedMovies = response.data;
    });
  },
  methods: {
    searchMovie(e) {
      this.searchValue = e.target.value;
      this.searchedMovies = this.movies.filter((movie) =>
        movie.title.en.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
};
</script>
