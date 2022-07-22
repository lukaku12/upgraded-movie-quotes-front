<template>
  <div
    v-if="notificationBarIsOpen"
    class="w-screen h-screen fixed top-0 left-0 bg-[#0000006b] z-1000"
    @click="setNotificationBarIsOpen(false)"
  ></div>
  <div
    v-if="notificationBarIsOpen"
    class="fixed w-screen max-h-[calc(100vh-150px)] bg-black h-auto right-0 pb-12 p-5 sm:p-12 text-white z-1000 max-w-[961px] lg:right-10 lg:rounded-[12px]"
  >
    <div class="flex flex-col gap-10">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">{{ $t("notifications") }}</h1>
        <button class="underline" @click="markAllNotificationsAsRead">
          {{ $t("mark_as_all_read") }}
        </button>
      </div>
      <div v-if="notifications.length === 0" class="text-center">
        <p>No News Notifications!</p>
      </div>
      <div
        v-else
        class="flex flex-col items-center gap-4 max-h-[calc(100vh-300px)] overflow-y-auto"
      >
        <div
          v-for="notification in notifications"
          :key="notification.id"
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
            <p v-if="notification.read_at === null" class="text-green-600">
              {{ $t("new") }}
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1">
              <p class="text-xl font-bold">{{ notification.username }}</p>
              <div class="flex items-center gap-2">
                <HeartFillRed
                  v-if="notification.message === 'Reacted to your quote'"
                />
                <ChatQuote v-else />
                <p>{{ notification.message }}</p>
              </div>
            </div>
            <p>
              {{ timeDiff(notification.created_at) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import { useNotificationsStore } from "@/stores/notifications/notifications";
import ChatQuote from "../icons/ChatQuote.vue";
import HeartFillRed from "../icons/HeartFillRed.vue";
import timeDiff from "time-diff-for-humans";
import axios from "@/config/axios";

export default {
  name: "Notifications",
  components: { ChatQuote, HeartFillRed },
  computed: {
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
    ...mapState(useNotificationsStore, [
      "notifications",
      "unreadNotifications",
    ]),
  },
  mounted() {
    axios.get("notifications").then((res) => {
      this.setNotifications(res.data.data);
    });
  },
  methods: {
    ...mapActions(useStylesStore, ["setNotificationBarIsOpen"]),
    ...mapActions(useNotificationsStore, [
      "setNotifications",
      "setUnreadNotifications",
      "setAllNotificationsAsRead",
    ]),
    markAllNotificationsAsRead() {
      this.setAllNotificationsAsRead();
      axios.post("notifications/read-all");
    },
    timeDiff(date) {
      return timeDiff(date, this.$i18next.language);
    },
  },
};
</script>
