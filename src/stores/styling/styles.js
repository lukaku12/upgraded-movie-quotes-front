import { defineStore } from "pinia";

export const useStylesStore = defineStore({
  id: "styles",
  state: () => ({
    navBarIsOpen: false,
    searchBarIsOpen: false,
    notificationBarIsOpen: false,
  }),
  actions: {
    setNavbarIsOpen(payload) {
      this.navBarIsOpen = payload;
    },
    setSearchBarIsOpen(payload) {
      this.searchBarIsOpen = payload;
    },
    setNotificationBarIsOpen() {
      this.notificationBarIsOpen = !this.notificationBarIsOpen;
    },
  },
});
