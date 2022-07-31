<template>
  <div
    class="absolute z-40 rounded-[10px] flex flex-col gap-y-8 items-start p-7 pr-10 w-[250px] h-[200px] bottom-10 right-0 md:top-7 md:-right-5 bg-[#24222F] cursor-default"
  >
    <router-link
      :to="'/movies/' + movieSlug + '/quote/' + quoteId"
      class="flex gap-4 w-full"
    >
      <EyeIcon />
      {{ $t("view_post") }}
    </router-link>
    <router-link
      :to="'/movies/' + movieSlug + '/quote/' + quoteId + '/edit'"
      class="flex gap-4 w-full"
    >
      <Pen />{{ $t("edit") }}
    </router-link>
    <button class="flex gap-4 w-full" @click="deleteQuote">
      <Trash />
      {{ $t("delete") }}
    </button>
  </div>
</template>

<script>
import Trash from "@/components/icons/Trash.vue";
import Pen from "@/components/icons/Pen.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import axios from "@/config/axios";
export default {
  name: "QuoteOptions",
  components: { Trash, Pen, EyeIcon },
  props: {
    quoteId: {
      type: Number,
      required: true,
    },
    movieSlug: {
      type: String,
      required: true,
    },
  },
  emits: ['delete-quote'],
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    deleteQuote() {
      axios
        .delete("movies/" + this.movieSlug + "/quote/" + this.quoteId)
        .then((response) => {
          console.log(response);
          this.$emit("delete-quote", this.quoteId);
          this.$router.push("/movies/" + this.movieSlug);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
