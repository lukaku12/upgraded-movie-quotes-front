<template>
  <div
    class="w-full h-full flex flex-col items-center py-5 bg-black gap-6 md:rounded-2xl"
  >
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
        <h1 class="text-start text-[#CED4DA] text-2xl">
          "{{ quote.title.en }}"
        </h1>
      </div>
    </div>
    <div class="flex gap-4 w-11/12 border-[#efefef5b] border-t-2 pt-7">
      <div class="flex gap-2">
        <p>3</p>
        <button>
          <img src="@/assets/icons/comment.svg" alt="comment" />
        </button>
      </div>
      <div class="flex gap-2">
        <p>10</p>
        <button>
          <img src="@/assets/icons/heart.svg" class="like-post" alt="comment" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
