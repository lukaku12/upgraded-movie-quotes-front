<template>
  <PopupMessage v-if="apiError" :message="apiError" text-color="text-red-600" />
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>
    <QuoteWrapper
      v-else
      :movie-slug="movieSlug"
      :data-is-fetched="dataIsFetched"
      :name="$t('add_quote')"
      :view-quote="false"
      :user="user"
    >
      <VueForm
        v-slot="{ values, meta }"
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
          <Thumbnail
            classes="h-full max-h-[108px] max-w-[155px] rounded-lg aspect-square md:aspect-video"
            :img-src="movie.thumbnail"
          />
          <div class="flex flex-col gap-2">
            <div class="flex h-auto items-center justify-center">
              <CameraReelsSvg fill-color="#FFFFFF" />
              <h1 class="text-xs md:text-xl mx-3">
                {{
                  $i18next.language === "en" ? movie.title.en : movie.title.ka
                }}
                ({{ movie.created_at.substring(0, 4) }})
              </h1>
            </div>
            <p class="text-xs md:text-xl">
              {{ $t("director") }}: Nick cassavetes
            </p>
          </div>
        </div>
        <button
          type="button"
          :disabled="!meta.valid"
          class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
          @click="addQuote(values)"
        >
          {{ $t("add_quote") }}
        </button>
      </VueForm>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import PopupMessage from "@/components/authenticated/PopupMessage.vue";
import CameraReelsSvg from "@/components/icons/CameraReels.vue";
import { Form as VueForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user/user";
import Thumbnail from "@/components/authenticated/Thumbnail.vue";
export default {
  name: "AddQuoteForMovie",
  components: {
    QuoteWrapper,
    AuthWrapper,
    TextArea,
    CameraReelsSvg,
    VueForm,
    PopupMessage,
    LoadingAnimation,
    Thumbnail,
  },
  data() {
    return {
      movie: {},
      dataIsFetched: false,
      apiSuccess: "",
      apiError: "",
      loading: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    movieSlug() {
      return this.$route.params.movie;
    },
    quoteId() {
      return this.$route.params.quote;
    },
  },
  mounted() {
    this.loading = true;
    axios
      .get(`movies/${this.movieSlug}`)
      .then((response) => {
        console.log(response.data);
        this.movie = response.data;
        this.dataIsFetched = true;
        this.loading = false;
      })
      .catch(() => {
        this.$router.push("/404");
      });
  },
  methods: {
    addQuote(values) {
      this.apiError = "";
      const data = {
        title_en: values.title_en,
        title_ka: values.title_ka,
        movie_id: this.movie.id,
      };
      axios
        .post(`movies/${this.movieSlug}/quote/add`, data)
        .then((response) => {
          this.$router.push({
            path: `/movies/${this.movieSlug}`,
            name: "movie",
            params: { apiSuccess: response.data },
            props: true,
          });
        })
        .catch(() => {
          this.apiError = "Something went wrong!";
        });
    },
  },
};
</script>
