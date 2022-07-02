import { defineStore } from "pinia";

export const useStylesStore = defineStore({
  id: "styles",
  state: () => ({
    navBarIsOpen: false,
    searchBarIsOpen: false,
    desktopSearchBarIsOpen: false,
    notificationBarIsOpen: false,
  }),
  actions: {
    setNavbarIsOpen(payload) {
      this.navBarIsOpen = payload;
    },
    setSearchBarIsOpen(payload) {
      this.searchBarIsOpen = payload;
    },
    setDesktopSearchBarIsOpen(payload) {
      this.desktopSearchBarIsOpen = payload;
    },
    setNotificationBarIsOpen() {
      this.notificationBarIsOpen = !this.notificationBarIsOpen;
    },
  },
});
