<template>
  <div
    v-if="notificationBarIsOpen"
    class="absolute w-screen bg-black h-auto left-0 right-0 p-12 text-white z-50 border"
  >
    <div class="flex flex-col gap-10">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">Notifications</h1>
        <button class="underline">Mark as all read</button>
      </div>
      <div v-if="notifications.length === 0" class="text-center">
        <p>No News Notifications!</p>
      </div>
      <div v-else class="border border-r-2 flex items-center px-3 gap-4">
        <div>
          <img src="@/assets/post/profile-picture.png" alt="profile">
          <p class="text-green-600">New</p>
        </div>
        <div>
          <p>Nino Tabagari</p>
          <img src="" alt="">
          <p>Commented to your  quote..</p>
          <p>5 min ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "Notifications",
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
  },
};
</script>
