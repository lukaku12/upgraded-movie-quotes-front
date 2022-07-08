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
        <h1 class="text-start text-[#CED4DA] text-2xl z-40">
          "{{ quote.title.en }}"
        </h1>
      </div>
      <div class="absolute right-5 bottom-5 md:top-5">
        <button class="w-[24px] h-[24px]" @click="toggleOptions">
          <img
            class="w-full h-full z-40"
            src="@/assets/icons/three-dots.svg"
            alt="three-dots"
          />
        </button>
        <QuoteOptions
          v-if="optionsAreVisible"
          :quote-id="quote.id"
          :movie-slug="movieSlug"
        ></QuoteOptions>
      </div>
    </div>
    <div class="flex gap-4 w-11/12 border-[#efefef5b] border-t-2 pt-7">
      <div class="flex gap-2 z-40">
        <p>3</p>
        <button>
          <img
            class="hover:bg-red-600"
            src="@/assets/icons/comment.svg"
            alt="comment"
          />
        </button>
      </div>
      <div class="flex gap-2 z-40">
        <p>10</p>
        <button>
          <HeartSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteOptions from "./QuoteOptions.vue";
import HeartSvg from "@/components/icons/Heart.vue";
export default {
  name: "Quote",
  components: { QuoteOptions, HeartSvg },
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
  methods: {
    toggleOptions() {
      this.optionsAreVisible = !this.optionsAreVisible;
    },
  },
};
</script>
