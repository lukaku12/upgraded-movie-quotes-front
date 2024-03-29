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
        <Thumbnail
          classes="w-full h-full max-h-[371px] aspect-video rounded-2xl duration-300"
          :img-src="quote.thumbnail"
        />
      </div>
      <div class="w-11/12 h-full flex flex-col justify-center items-center">
        <h1 class="text-start text-[#CED4DA] text-2xl z-10 mr-4">
          "{{ quote.title[locale] }}"
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
          @delete-quote="(id) => deleteQuote(id)"
        ></QuoteOptions>
      </div>
    </div>
    <div class="flex gap-4 w-11/12 border-[#efefef5b] border-t-2">
      <PostActions :current-post="quote" :user="user" />
    </div>
  </div>
</template>

<script>
import QuoteOptions from "@/components/authenticated/movies/QuoteOptions.vue";
import ThreeDots from "@/components/icons/ThreeDots.vue";
import PostActions from "@/components/authenticated/landing/post/Actions.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user/user";
import Thumbnail from "@/components/authenticated/Thumbnail.vue";
export default {
  name: "Quote",
  components: { PostActions, QuoteOptions, ThreeDots, Thumbnail },
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
  emits: ["delete-quote"],
  data() {
    return {
      optionsAreVisible: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    locale() {
      return this.$i18next.language
    },
  },
  methods: {
    toggleOptions() {
      this.optionsAreVisible = !this.optionsAreVisible;
    },
    deleteQuote(id) {
      this.$emit("delete-quote", id);
    },
  },
};
</script>
