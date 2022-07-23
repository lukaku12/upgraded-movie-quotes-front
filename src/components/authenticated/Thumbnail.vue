<template>
  <keep-alive>
    <img :class="classes" :src="src" alt="thumbnail" />
  </keep-alive>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
    };
  },
  computed: {
    src() {
      return this.storageImagePath + this.imgSrc;
    },
  },
};
</script>
