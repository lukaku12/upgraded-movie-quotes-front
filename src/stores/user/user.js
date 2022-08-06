import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      id: null,
      username: "",
      email: "",
      email_verified_at: null,
      updated_at: "",
      created_at: "",
    },
  }),
  actions: {
    setUser(payload) {
      this.user = payload;
    },
  },
});
