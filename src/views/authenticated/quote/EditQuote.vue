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
      :quote="quote"
      :quote-id="quoteId"
      :data-is-fetched="dataIsFetched"
      :name="$t('edit_quote')"
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
            placeholder="Start create new quote"
            language="Eng"
            :value="quote.title.en"
          ></TextArea>
          <TextArea
            name="title_ka"
            placeholder="ახალი ციტატა"
            :value="quote.title.ka"
            language="ქარ"
          ></TextArea>
        </div>
        <div
          class="w-10/12 md:w-11/12 flex items-center justify-center my-5 relative"
        >
          <img
            class="w-full aspect-square md:aspect-video rounded-xl"
            :src="
              thumbnail === '' ? storageImagePath + quote.thumbnail : thumbnail
            "
            alt="thumbnail"
          />
          <div
            class="absolute top-[50%] rounded-xl left-[50%] w-[135px] h-[84px] bg-[#222030] -translate-y-[50%] -translate-x-[50%] opacity-80"
          >
            <button
              class="w-full h-full flex flex-col justify-center items-center gap-2"
            >
              <Photo />{{ $t("change_photo") }}
            </button>
            <Field
              type="file"
              name="thumbnail"
              class="w-full h-full absolute z-20 top-0 left-0 opacity-0"
              @change="updateThumbnail"
            />
          </div>
        </div>
        <button
          type="button"
          :disabled="!meta.valid"
          class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
          @click="EditQuote(values)"
        >
          {{ $t("save_changes") }}
        </button>
      </VueForm>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import { Form as VueForm, Field } from "vee-validate";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import axios from "@/config/axios";
import Photo from "@/components/icons/Photo.vue";
import PopupMessage from "@/components/authenticated/PopupMessage.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user/user";

export default {
  name: "EditQuote",
  components: {
    AuthWrapper,
    QuoteWrapper,
    TextArea,
    Photo,
    VueForm,
    Field,
    PopupMessage,
    LoadingAnimation,
  },
  data() {
    return {
      quote: {},
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
      thumbnail: "",
      dataIsFetched: false,
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
      .get(`quote/${this.quoteId}`)
      .then((response) => {
        this.quote = response.data;
        this.dataIsFetched = true;
        this.loading = false;
      });
  },
  methods: {
    EditQuote(values) {
      this.apiError = "";

      const formData = new FormData();
      formData.append("title_en", values.title_en);
      formData.append("title_ka", values.title_ka);
      formData.append("movie_id", this.quote.movie_id);
      if (values.thumbnail) {
        formData.append("thumbnail", values.thumbnail[0]);
      }

      axios
        .post(`quote/${this.quoteId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
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
    updateThumbnail(e) {
      this.thumbnail = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>
