<template>
  <div
    class="flex flex-col items-center gap-5 w-full h-full max-w-4xl pr-4 pb-4 pl-4 text-white lg:rounded-[10px]"
  >
    <div class="flex flex-col items-center md:items-start gap-5 w-full h-full">
      <img
        class="w-full w-full h-full max-w-[440px] max-h-[371px]"
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
