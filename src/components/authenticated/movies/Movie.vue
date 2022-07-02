<template>
  <div
    class="flex flex-col items-center gap-5 w-full h-full max-w-4xl pr-4 pb-4 pl-4 text-white lg:rounded-[10px]"
  >
    <div
      class="flex flex-col items-center md:items-start gap-5 w-full h-full max-w-[440px] max-h-[371px]"
    >
      <img
        class="w-full h-full"
        src="@/assets/post/post-image.png"
        alt="post-image"
      />
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl md:text-base">
          {{ movie.title.en }} ({{ movie.created_at.substring(0, 4) }})
        </h1>
        <p class="flex gap-3">
          10 <img src="@/assets/icons/chat-quote.svg" alt="quotes" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
