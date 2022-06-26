<template>
  <section
    class="flex flex-col items-center justify-center w-screen h-[431px] relative"
  >
    <div class="flex w-full z-50 text-white font-bold">
      <h1 class="pl-8 pr-1">&#9866;</h1>
      <div class="w-8/12">
        <h1 class="text-[20px]">“{{ quote }}”</h1>
        <div class="flex text-[#D9D9D9]">
          <h1>{{ movie }}</h1>
          <h1>,&nbsp;</h1>
          <h1>{{ year }}</h1>
        </div>
      </div>
    </div>
    <div class="w-full h-full absolute">
      <img class="w-full h-full" :src="image" alt="interstellar-image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    movie: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>
