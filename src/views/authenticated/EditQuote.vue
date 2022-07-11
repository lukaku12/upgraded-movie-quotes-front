<template>
  <AuthWrapper>
    <QuoteWrapper
      :movie-slug="movieSlug"
      :quote="quote"
      :quote-id="quoteId"
      :data-is-fetched="dataIsFetched"
      name="Edit Quote"
      :view-quote="false"
    >
      <VueForm
        v-slot="{ values }"
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
              thumbnail === ''
                ? 'http://127.0.0.1:8000/storage/thumbnails/' + quote.thumbnail
                : thumbnail
            "
            alt="thumbnail"
          />
          <div
            class="absolute top-[50%] rounded-xl left-[50%] w-[135px] h-[84px] bg-[#222030] -translate-y-[50%] -translate-x-[50%] opacity-80"
          >
            <button
              class="w-full h-full flex flex-col justify-center items-center gap-2"
            >
              <Photo />Change photo
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
          class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
          @click="EditQuote(values)"
        >
          Save changes
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
import axios from "@/config/axios/index.js";
import Photo from "@/components/icons/Photo.vue";

export default {
  name: "EditQuote",
  components: {
    AuthWrapper,
    QuoteWrapper,
    TextArea,
    Photo,
    VueForm,
    Field,
  },
  data() {
    return {
      quote: {},
      thumbnail: "",
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
    axios
      .get(`movies/${this.movieSlug}/quote/${this.quoteId}`)
      .then((response) => {
        this.quote = response.data;
        this.dataIsFetched = true;
      });
  },
  methods: {
    EditQuote(values) {
      const formData = new FormData();
      formData.append("title_en", values.title_en);
      formData.append("title_ka", values.title_ka);
      formData.append("movie_id", this.quote.movie_id);
      if (values.thumbnail) {
        formData.append("thumbnail", values.thumbnail[0]);
      }
      axios
        .post(`movies/${this.movieSlug}/quote/${this.quoteId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.request.response);
        });
    },
    updateThumbnail(e) {
      this.thumbnail = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>
