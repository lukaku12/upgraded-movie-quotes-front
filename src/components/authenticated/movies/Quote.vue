<template>
  <div
    class="w-full h-full flex flex-col items-center py-5 bg-[#0a090f] gap-6 md:rounded-2xl relative hover:outline outline-1 outline-[gray]"
  >
    <router-link
      :to="'/movies/' + movieSlug + '/quote/' + quote.id"
      class="absolute w-full h-full z-0 top-0 left-0"
    ></router-link>
    <div
      class="w-full flex flex-col md:w-11/12 md:flex-row items-center md:items-start gap-6"
    >
      <div class="w-11/12 h-full">
        <img
          class="w-full h-full max-h-[371px] aspect-video rounded-2xl duration-300"
          :src="'http://127.0.0.1:8000/storage/thumbnails/' + quote.thumbnail"
          alt="post-image"
        />
      </div>
      <div class="w-11/12 h-full flex flex-col justify-center items-center">
        <h1 class="text-start text-[#CED4DA] text-2xl z-10 mr-4">
          "{{ localeQuote }}"
        </h1>
      </div>
      <div class="absolute right-5 bottom-5 md:top-5 w-[30px] h-[30px]">
        <button class="w-full h-full" @click="toggleOptions">
          <ThreeDots />
        </button>
        <QuoteOptions
          v-if="optionsAreVisible"
          :quote-id="quote.id"
          :movie-slug="movieSlug"
        ></QuoteOptions>
      </div>
    </div>
    <div class="flex gap-4 w-11/12 border-[#efefef5b] border-t-2">
      <PostActions :current-post="quote" :user="user"/>
    </div>
  </div>
</template>

<script>
import QuoteOptions from "./QuoteOptions.vue";
import ThreeDots from "@/components/icons/ThreeDots.vue";
import PostActions from "@/components/authenticated/landing/post/Actions.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user/user";
export default {
  name: "Quote",
  components: { PostActions, QuoteOptions, ThreeDots },
  props: {
    quote: {
      type: Object,
      required: true,
    },
    movieSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      optionsAreVisible: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    localeQuote() {
      return (this.$i18next.language === 'en') ? this.quote.title.en : this.quote.title.ka;
    },
  },
  methods: {
    toggleOptions() {
      this.optionsAreVisible = !this.optionsAreVisible;
    },
  },
};
</script>
