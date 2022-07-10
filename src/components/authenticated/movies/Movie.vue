<template>
  <div
    class="flex flex-col items-center gap-5 w-full h-full max-w-4xl pr-4 pb-6 pl-4 text-white lg:rounded-[10px]"
  >
    <div
      class="flex flex-col items-center md:items-start gap-5 w-full h-full max-w-[440px]"
    >
      <router-link
        :to="'/movies/' + movie.slug"
        class="w-full overflow-hidden rounded-2xl h-full cursor-pointer max-h-[450px]"
      >
        <img
          class="w-full h-full max-h-[371px] scale-110 rounded-2xl hover:scale-100 duration-300"
          :src="'http://127.0.0.1:8000/storage/thumbnails/' + movie.thumbnail"
          alt="post-image"
        />
      </router-link>
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl md:text-base">
          {{ movie.title.en }} ({{ movie.created_at.substring(0, 4) }})
        </h1>
        <p class="flex gap-3">
          {{ movie.quotes.length }}
          <ChatQuote />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ChatQuote from "@/components/icons/ChatQuote.vue";
export default {
  name: "Movie",
  components: { ChatQuote },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movieSlug() {
      return this.movie.title.en
        .replace(/\s/g, "-")
        .toLowerCase()
        .replace(/\./g, "");
    },
  },
};
</script>
