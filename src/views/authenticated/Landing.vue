<template>
  <AddQuote v-if="addQuoteIsVisible"></AddQuote>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <AuthHeader></AuthHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14] font-bold"
    >
      <Navigation></Navigation>
      <div class="w-full flex flex-col items-center">
        <MobileSearch></MobileSearch>
        <Notifications></Notifications>
        <AddQuoteComponent></AddQuoteComponent>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  </section>
</template>

<script>
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
import AddQuote from "@/views/authenticated/AddQuote.vue";
export default {
  name: "AuthLanding",
  components: {
    MobileSearch,
    AuthHeader,
    Post,
    AddQuoteComponent,
    Navigation,
    Notifications,
    AddQuote,
  },
  computed: {
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
};
</script>
