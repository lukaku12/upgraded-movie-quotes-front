<template>
  <AuthWrapper>
    <QuoteWrapper
      :movie-slug="movieSlug"
      :data-is-fetched="dataIsFetched"
      name="Add Quote"
      :view-quote="false"
    >
      <div class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12">
        <TextArea
          name="titleEn"
          placeholder="Frankly, my dear, I don't give a damn."
          language="Eng"
        ></TextArea>
        <TextArea
          name="titleKa"
          placeholder="ციტატა ქართულ ენაზე"
          language="ქარ"
        ></TextArea>
      </div>
      <div class="flex w-10/12 md:w-11/12 py-3 my-3 h-auto bg-black rounded-lg gap-6 items-center">
        <img
          class="h-full max-h-[108px] max-w-[155px] rounded-lg aspect-video xl:aspect-auto"
          :src="
            'http://127.0.0.1:8000/storage/thumbnails/' +
            movie.quotes[0].thumbnail
          "
          alt="post-image"
        />
        <div class="flex flex-col gap-2">
          <div class="flex h-auto items-center justify-center">
            <img src="@/assets/icons/camera-reels.svg" alt="camera-reels" />
            <h1 class="text-xl mx-3">
              {{ movie.movie.title.en }} ({{
                movie.movie.created_at.substring(0, 4)
              }})
            </h1>
          </div>
          <p>Director: Nick cassavetes</p>
        </div>
      </div>
      <button
        type="button"
        class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
      >
        Add quote
      </button>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import axios from "axios";
export default {
  name: "AddQuoteForMovie",
  components: { QuoteWrapper, AuthWrapper, TextArea },
  data() {
    return {
      movie: {},
      dataIsFetched: false,
    };
  },
  computed: {
    movieSlug() {
      console.log(this.$route.params.movie);
      return this.$route.params.movie;
    },
    quoteId() {
      return this.$route.params.quote;
    },
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/movies/${this.movieSlug}`)
      .then((response) => {
        this.movie = response.data;
        this.dataIsFetched = true;
      });
  },
};
</script>
