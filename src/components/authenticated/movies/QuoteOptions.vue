<template>
  <div
    class="absolute z-40 rounded-[10px] flex flex-col gap-y-8 items-start p-7 pr-10 w-[250px] h-[200px] bottom-10 right-0 md:top-7 md:-right-5 bg-[#24222F]"
  >
    <router-link
      :to="'/movies/' + movieSlug + '/quote/' + quoteId"
      class="flex gap-4 w-full"
    >
      <img src="@/assets/icons/eye.svg" alt="eye" /> view post
    </router-link>
    <button class="flex gap-4 w-full">
      <img src="@/assets/icons/pen.svg" alt="pen" /> Edit
    </button>
    <button class="flex gap-4 w-full">
      <img src="@/assets/icons/trash.svg" alt="trash" />Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "QuoteOptions",
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
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
};
</script>
