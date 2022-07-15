<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <AuthHeader></AuthHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14] font-bold"
    >
      <Navigation></Navigation>
      <div class="w-full min-h-[calc(100vh-86px)]">
        <MobileSearch></MobileSearch>
        <Notifications></Notifications>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import Notifications from "@/components/authenticated/Notifications.vue";

export default {
  name: "AuthWrapper",
  components: {
    MobileSearch,
    AuthHeader,
    Navigation,
    Notifications,
  },
};
</script>
