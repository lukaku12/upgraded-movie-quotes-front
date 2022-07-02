<template>
  <div
    class="flex flex-col gap-5 w-full max-w-4xl p-10 text-white lg:rounded-[10px] md:pb-0"
  >
    <div class="flex flex-col gap-5">
      <img
        class="w-full aspect-video lg:aspect-square"
        src="@/assets/post/post-image.png"
        alt="post-image"
      />
      <div class="flex flex-col gap-4">
        <h1 class="text-2xl md:text-base">Loki Mobius (2021)</h1>
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
};
</script>
