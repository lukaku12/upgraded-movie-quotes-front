<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <BasicHeader></BasicHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14]"
    >
      <Navigation></Navigation>
      <div>
        <MobileSearch></MobileSearch>
        <AddQuote></AddQuote>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  </section>
</template>

<script>
import BasicHeader from "@/components/authenticated/BasicHeader.vue";
import Post from "@/components/authenticated/Post.vue";
import AddQuote from "@/components/authenticated/AddQuote.vue";
import Navigation from "@/components/authenticated/Navigation.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
export default {
  name: "AuthLanding",
  components: {
    MobileSearch,
    BasicHeader,
    Post,
    AddQuote,
    Navigation,
  },
};
</script>
