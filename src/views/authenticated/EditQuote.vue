<template>
  <AuthWrapper>
    <QuoteWrapper
      :movie-slug="movieSlug"
      :quote="quote"
      :quote-id="quoteId"
      :data-is-fetched="dataIsFetched"
      :view-quote="false"
    >
        <div class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12">
          <TextArea
            name="titleEn"
            placeholder="Start create new quote"
            language="Eng"
            :value="quote.title.en"
          ></TextArea>
          <TextArea
            name="titleKa"
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
            :src="'http://127.0.0.1:8000/storage/thumbnails/' + quote.thumbnail"
            alt="thumbnail"
          />
          <div
            class="absolute top-[50%] rounded-xl left-[50%] w-[135px] h-[84px] bg-[#222030] -translate-y-[50%] -translate-x-[50%] opacity-80"
          >
            <button
              class="w-full h-full flex flex-col justify-center items-center gap-2"
            >
              <img src="@/assets/icons/photo.svg" alt="photo" /> Change Photo
            </button>
          </div>
        </div>
        <button
          type="button"
          class="bg-[#E31221] w-10/12 md:w-11/12 border border-[#E31221] mt-1 font-bold px-7 py-2 rounded-[4px] text-white"
        >
          Save changes
        </button>
      </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import axios from "axios";

export default {
  name: "ViewQuote",
  components: {
    AuthWrapper,
    QuoteWrapper,
    TextArea,
  },
  data() {
    return {
      quote: {},
      dataIsFetched: false,
      post: {
        id: 1,
        userName: "Maia Nakashidze",
        quote: "Follow your dream.",
        movie: "Billy Elliot",
        movieReleaseDate: "2000",
        likes: 10,
        comments: [
          {
            id: 1,
            userName: "Nina Baldadze",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc vel massa facilisis consequat elit morbi convallis convallis. Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu vitae mauris odio eget.",
          },
          {
            id: 2,
            userName: "Nika Tsetskhladze",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscin",
          },
        ],
      },
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
      .get(
        `http://127.0.0.1:8000/api/movies/${this.movieSlug}/quote/${this.quoteId}`
      )
      .then((response) => {
        this.quote = response.data;
        this.dataIsFetched = true;
      });
  },
};
</script>
