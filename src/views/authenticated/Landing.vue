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
        <Notifications></Notifications>
        <AddQuote></AddQuote>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  </section>
</template>

<script>
import BasicHeader from "@/components/authenticated/BasicHeader.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuote from "@/components/authenticated/landing/AddQuote.vue";
import Navigation from "@/components/authenticated/landing/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
export default {
  name: "AuthLanding",
  components: {
    MobileSearch,
    BasicHeader,
    Post,
    AddQuote,
    Navigation,
    Notifications
  },
};
</script>
