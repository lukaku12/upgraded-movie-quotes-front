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
            payload.sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at);
            });
            // filter notifications by unread
            const unreadNotificationsArray = payload.filter(notifications => notifications.read_at === null);
            console.log(unreadNotificationsArray);
            this.setUnreadNotifications(unreadNotificationsArray.length)

            this.notifications = payload;
        },
        addNotification(payload) {
            this.unreadNotifications += 1;
            this.notifications.unshift(payload);
        },
        setUnreadNotifications(payload) {
            this.unreadNotifications = payload;
        },
        setAllNotificationsAsRead() {
            this.notifications.forEach(notification => {
                notification.read_at = new Date();
            });
            this.unreadNotifications = 0;
        }
    },
});
