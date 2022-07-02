<template>
  <div
    v-if="notificationBarIsOpen"
    class="w-screen h-screen fixed top-0 left-0 bg-[#0000007c]"
    @click="setNotificationBarIsOpen(false)"
  ></div>
  <div
    v-if="notificationBarIsOpen"
    class="absolute w-screen bg-black h-auto right-0 pb-12 p-5 sm:p-12 text-white z-50 max-w-[961px] lg:right-10 lg:rounded-[12px]"
  >
    <div class="flex flex-col gap-10">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">Notifications</h1>
        <button class="underline">Mark as all read</button>
      </div>
      <div v-if="notifications.length === 0" class="text-center">
        <p>No News Notifications!</p>
      </div>
      <div v-else class="flex flex-col items-center gap-4">
        <div
          class="flex border-[#efefef5b] border-2 rounded-[4px] gap-5 w-full px-5 pr-0 py-5"
        >
          <div
            class="flex flex-col justify-center items-center gap-3 min-w-[60px]"
          >
            <img
              class="w-[60px] h-[60px]"
              src="@/assets/post/profile-picture.png"
              alt="profile"
            />
            <p class="text-green-600">New</p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1">
              <p class="text-xl font-bold">Nino Tabagari</p>
              <div class="flex items-center gap-2">
                <img src="@/assets/icons/chat-quote.svg" alt="chat-quote" />
                <p>Commented to your quote..</p>
              </div>
            </div>
            <p>5 min ago</p>
          </div>
        </div>
        <div
          class="flex border-[#efefef5b] border-2 rounded-[4px] gap-5 w-full px-5 pr-0 py-5"
        >
          <div
            class="flex flex-col justify-center items-center gap-3 min-w-[60px]"
          >
            <img
              class="w-[60px] h-[60px]"
              src="@/assets/post/profile-picture.png"
              alt="profile"
            />
            <p class="text-green-600">New</p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1">
              <p class="text-xl font-bold">Maia Nakashidze</p>
              <div class="flex items-center gap-2">
                <img src="@/assets/icons/heart-fill.svg" alt="chat-quote" />
                <p>Reacted to your quote</p>
              </div>
            </div>
            <p>10 min ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "Notifications",
  data() {
    return {
      notifications: ["s"],
    };
  },
  computed: {
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setNotificationBarIsOpen"]),
  },
};
</script>
