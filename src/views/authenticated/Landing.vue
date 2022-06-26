<template>
  <section
    class="w-full h-full flex flex-col items-center bg-[#222030] overflow-y-auto"
  >
    <BasicHeader></BasicHeader>
    <Post></Post>
    <Post></Post>
  </section>
</template>

<script>
import BasicHeader from "@/components/authenticated/BasicHeader.vue";
import Post from "@/components/authenticated/Post.vue";
export default {
  name: "AuthLanding",
  components: {
    BasicHeader,
    Post,
  },
};
</script>
