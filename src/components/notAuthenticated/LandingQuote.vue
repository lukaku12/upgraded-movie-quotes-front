<template>
  <section
    class="flex flex-col items-center justify-center w-full h-[431px] md:h-[600px] xl:aspect-video xl:h-auto relative"
  >
    <div class="flex w-full z-40 text-white font-bold">
      <h1 class="pl-8 pr-1 text-[20px] md:text-[50px] md:pl-20">&#9866;</h1>
      <div class="w-8/12 md:w-5/12">
        <h1 class="text-[20px] xl:text-[50px]">“{{ quote }}”</h1>
        <div class="flex text-[#D9D9D9] xl:text-[30px]">
          <h1>{{ movie }}</h1>
          <h1>,&nbsp;</h1>
          <h1>{{ year }}</h1>
        </div>
      </div>
    </div>
    <div class="w-full h-full absolute">
      <img
        :class="movie"
        class="w-full h-full opacity-90 landing-quote-image"
        :src="image"
        alt="interstellar-image"
      />
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
