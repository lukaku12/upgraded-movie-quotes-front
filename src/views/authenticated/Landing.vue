<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <BasicHeader></BasicHeader>
    <div class="w-full h-full flex flex-col items-center bg-[#0f0e14]">
      <AddQuote></AddQuote>
      <Post></Post>
      <Post></Post>
    </div>
  </section>
</template>

<script>
import BasicHeader from "@/components/authenticated/BasicHeader.vue";
import Post from "@/components/authenticated/Post.vue";
import AddQuote from "@/components/authenticated/AddQuote.vue";
export default {
  name: "AuthLanding",
  components: {
    BasicHeader,
    Post,
    AddQuote,
  },
};
</script>
