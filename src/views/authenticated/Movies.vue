<template>
  <AddMovie
    v-if="addMovieIsVisible"
    @add-movie="(movie) => movies.unshift(movie)"
  ></AddMovie>
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
        class="flex items-start md:items-center justify-between flex-row px-5 gap-5 py-8 w-full text-white md:px-10"
      >
        <div
          class="flex flex-col gap-5 lg:flex-row lg:items-center lg:h-[37px] text-center"
        >
          <h1 class="text-xl xl:text-2xl">{{ $t("my_list_of_movies") }}</h1>
          <p>({{ $t("total") }} {{ searchedMovies.length }})</p>
        </div>
        <div class="flex items-center lg:w-[58%] lg:justify-end lg:gap-4">
          <DesktopSearch
            :placeholder="$t('search') + '...'"
            :search-title="$t('search')"
            closed-search-bar-width="lg:w-[30%]"
            opened-search-bar-width="w-[56%]"
            :search-value="searchValue"
            @search-movie="(e) => searchMovie(e)"
          ></DesktopSearch>
          <router-link
            to="/movies/add"
            class="bg-[#E31221] border border-[#E31221] px-5 py-1 rounded-[4px] text-white flex justify-center items-center gap-2 text-center"
          >
            <Plus />
            {{ $t("add_movie") }}
          </router-link>
        </div>
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
import AddMovie from "@/views/authenticated/AddMovie.vue";
import Plus from "@/components/icons/Plus.vue";
import axios from "@/config/axios/index.js";

export default {
  name: "Movies",
  components: {
    AddMovie,
    AuthWrapper,
    Movie,
    DesktopSearch,
    LoadingAnimation,
    Plus,
  },
  emits: ["addMovie", "searchMovie"],
  data() {
    return {
      movies: [],
      searchValue: "",
      searchedMovies: [],
      loading: false,
      count: 0,
    };
  },
  computed: {
    addMovieIsVisible() {
      return this.$route.name === "add-movie";
    },
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
      this.searchedMovies = this.movies.filter(
        (movie) =>
          movie.title.en
            .toLowerCase()
            .includes(this.searchValue.toLowerCase()) ||
          movie.title.ka.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
};
</script>
