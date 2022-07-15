<template>
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>
    <div
      v-else
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
  </AuthWrapper>
</template>

<script>
import DesktopSearch from "@/components/authenticated/DesktopSearch.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import Movie from "@/components/authenticated/movies/Movie.vue";
import axios from "@/config/axios/index.js";

export default {
  name: "Movies",
  components: {
    AuthWrapper,
    Movie,
    DesktopSearch,
    LoadingAnimation,
  },
  data() {
    return {
      movies: [],
      searchValue: "",
      searchedMovies: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios.get("movies").then((response) => {
      this.movies = response.data;
      this.searchedMovies = response.data;
      this.loading = false;
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
