import { defineStore } from "pinia";

export const useNotificationsStore = defineStore({
    id: "notifications",
    state: () => ({
        notifications: [],
    }),
    actions: {
        setNotifications(payload) {
            this.notifications = payload;
        },
        addNotification(payload) {
            console.log(payload);
            this.notifications.unshift(payload);
        }
    },
});
