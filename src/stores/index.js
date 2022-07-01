import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: true,
  }),
  actions: {
    setAuthenticated(payload) {
      this.isAuthenticated = payload;
    },
  },
});
