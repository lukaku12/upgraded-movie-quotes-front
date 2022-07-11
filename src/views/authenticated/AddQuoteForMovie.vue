<template>
  <AuthWrapper>
    <QuoteWrapper
      :movie-slug="movieSlug"
      :data-is-fetched="dataIsFetched"
      name="Add Quote"
      :view-quote="false"
    >
      <VueForm
        v-slot="{ values }"
        class="w-full h-auto flex flex-col items-center"
      >
        <div class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12">
          <TextArea
            name="title_en"
            placeholder="Frankly, my dear, I don't give a damn."
            language="Eng"
          ></TextArea>
          <TextArea
            name="title_ka"
            placeholder="ციტატა ქართულ ენაზე"
            language="ქარ"
          ></TextArea>
        </div>
        <div
          class="flex w-10/12 md:w-11/12 py-3 my-3 h-auto bg-black rounded-lg gap-6 items-center"
        >
          <img
            class="h-full max-h-[108px] max-w-[155px] rounded-lg aspect-square xl:aspect-auto"
            :src="
              'http://127.0.0.1:8000/storage/thumbnails/' +
              movie.quotes[0].thumbnail
            "
            alt="post-image"
          />
          <div class="flex flex-col gap-2">
            <div class="flex h-auto items-center justify-center">
              <CameraReelsSvg fill-color="#FFFFFF" />
              <h1 class="text-xs md:text-xl mx-3">
                {{ movie.movie.title.en }} ({{
                  movie.movie.created_at.substring(0, 4)
                }})
              </h1>
            </div>
            <p class="text-xs md:text-xl">Director: Nick cassavetes</p>
          </div>
        </div>
        <button
          type="button"
          class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
          @click="addQuote(values)"
        >
          Add quote
        </button>
      </VueForm>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import CameraReelsSvg from "@/components/icons/CameraReels.vue";
import { Form as VueForm } from "vee-validate";
import axios from "@/config/axios/index.js";
export default {
  name: "AddQuoteForMovie",
  components: { QuoteWrapper, AuthWrapper, TextArea, CameraReelsSvg, VueForm },
  data() {
    return {
      movie: {},
      dataIsFetched: false,
    };
  },
  computed: {
    movieSlug() {
      return this.$route.params.movie;
    },
    quoteId() {
      return this.$route.params.quote;
    },
  },
  mounted() {
    axios.get(`movies/${this.movieSlug}`).then((response) => {
      this.movie = response.data;
      this.dataIsFetched = true;
    });
  },
  methods: {
    addQuote(values) {
      const data = {
        title_en: values.title_en,
        title_ka: values.title_ka,
        movie_id: this.movie.movie.id,
      };
      console.log(data);
      axios
        .post(`movies/${this.movieSlug}/quote/add`, data)
        .then((response) => {
          console.log(response);
          // this.$router.push(`/movies/${this.movieSlug}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
