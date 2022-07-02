<template>
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
        <div class="flex flex-col px-10 py-8 gap-5 w-full max-w-4xl text-white">
          <h1 class="text-2xl">My list of movies</h1>
          <p>(total 25)</p>
        </div>
        <Movie></Movie>
        <Movie></Movie>
      </div>
    </div>
  </section>
</template>

<script>
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
import Movie from "@/components/authenticated/movies/Movie.vue";
export default {
  name: "Movies",
  components: {
    MobileSearch,
    AuthHeader,
    Movie,
    Navigation,
    Notifications,
  },
};
</script>
