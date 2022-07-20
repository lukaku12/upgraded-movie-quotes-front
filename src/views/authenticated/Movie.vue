<template>
  <PopupMessage v-if="apiSuccess" :message="apiSuccess" />
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>

    <div
      v-if="movie.length !== 0 && !loading"
      class="w-full flex flex-col items-center min-h-[calc(100vh-86px)] bg-[#0f0e14]"
    >
      <div
        class="flex flex-col xl:flex-row px-5 md:px-10 py-8 xl:px-0 gap-5 w-full text-white"
      >
        <div class="flex flex-col gap-5 w-full xl:w-[60%] xl:max-w-[809px]">
          <img
            class="h-full max-h-[450px] rounded-2xl aspect-square md:aspect-video xl:aspect-auto"
            :src="
              'http://127.0.0.1:8000/storage/thumbnails/' +
              movie.thumbnail
            "
            alt="post-image"
          />
        </div>
        <div class="w-full xl:w-[40%]">
          <h1 class="text-2xl text-[#DDCCAA]">
            {{ movie.title.en }} ({{
              movie.created_at.substring(0, 4)
            }})
          </h1>
          <div class="w-full flex gap-2 font-bold mt-4">
            <button class="bg-gray-400 py-1 px-2 rounded">Drama</button>
            <button class="bg-gray-400 py-1 px-2 rounded">Romance</button>
          </div>
          <div class="flex flex-col gap-4 ml-3 my-4">
            <p>{{ $t('director') }}: Nick cassavetes</p>
            <p>{{ $t('budget') }}: 2.000.000$</p>
          </div>
          <div class="w-full md:pr-4">
            <p>
              In a nursing home, resident Duke reads a romance story to an old
              woman who has senile dementia with memory loss. In the late 1930s,
              wealthy seventeen year-old Allie Hamilton is spending summer
              vacation in Seabrook. Local worker Noah Calhoun meets Allie at a
              carnival
              <br />
              <br />
              In a nursing home, resident Duke reads a romance story to an old
              woman who has senile dementia with memory loss.
            </p>
          </div>
          <div class="pb-10 border-[#efefef5b] border-b-2 md:border-none">
            <router-link
              :to="'/movies/' + movieSlug + '/quote/add'"
              class="bg-[#E31221] border border-[#E31221] mt-7 px-5 py-1 max-w-[152px] rounded-[4px] text-white flex justify-center items-center gap-2"
            >
              <Plus />
              {{ $t('add_quote') }}
            </router-link>
          </div>
        </div>
      </div>
      <main class="flex w-full flex-col items-center text-white lg:items-start">
        <div
          class="w-full py-8 gap-5 text-start px-10 flex flex-col lg:flex-row"
        >
          <h1 class="text-2xl">{{ $t('all_quotes') }}</h1>
          <h2>({{ $t('total') }} {{ movie.quotes.length }})</h2>
        </div>
        <div
          v-if="movie.quotes.length !== 0"
          class="w-full flex items-center flex-col gap-10 mb-10 h-full max-w-[809px]"
        >
          <Quote
            v-for="quote in movie.quotes"
            :key="quote.id"
            :quote="quote"
            :movie-slug="movie.slug"
          ></Quote>
        </div>
      </main>
    </div>
  </AuthWrapper>
  <NotFound v-if="!movieExists"></NotFound>
</template>

<script>
import Quote from "@/components/authenticated/movies/Quote.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import PopupMessage from "@/components/authenticated/PopupMessage.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import NotFound from "@/views/NotFound.vue";
import axios from "@/config/axios/index.js";
import Plus from "@/components/icons/Plus.vue";

export default {
  name: "Movie",
  components: {
    AuthWrapper,
    NotFound,
    Quote,
    Plus,
    PopupMessage,
    LoadingAnimation,
  },
  data() {
    return {
      movie: [],
      movieExists: true,
      loading: false,
    };
  },
  computed: {
    movieSlug() {
      return this.$route.params.movie;
    },
    apiSuccess() {
      return this.$route.params.apiSuccess;
    },
  },
  mounted() {
    this.loading = true;
    axios
      .get(`movies/${this.movieSlug}`)
      .then((response) => {
        console.log(response.data);
        this.movie = response.data;
        this.loading = false;
      })
      .catch(() => {
        this.movieExists = false;
      });
  },
};
</script>
