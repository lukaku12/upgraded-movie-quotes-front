import { defineStore } from "pinia";

export const useNotificationsStore = defineStore({
  id: "notifications",
  state: () => ({
    notifications: [],
    unreadNotifications: 0,
  }),
  actions: {
    setNotifications(payload) {
      // sort notifications by date
      payload.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      this.notifications = payload;
      this.setUnreadNotifications();
    },
    addNotification(payload) {
      this.notifications.unshift(payload);
      this.setUnreadNotifications();
    },
    setUnreadNotifications() {
      this.unreadNotifications = this.notifications.filter(
        (notifications) => notifications.read_at === null
      ).length;
    },
    setAllNotificationsAsRead() {
      this.notifications.forEach((notification) => {
        notification.read_at = new Date();
      });
      this.unreadNotifications = 0;
    },
  },
});
