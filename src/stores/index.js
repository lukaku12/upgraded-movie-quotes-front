import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: true,
    navBarIsOpen: false,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    setAuthenticated(payload) {
      this.isAuthenticated = payload;
    },
    openNavbar() {
      this.navBarIsOpen = true;
    },
    hideNavbar() {
      this.navBarIsOpen = false;
    },
  },
});
