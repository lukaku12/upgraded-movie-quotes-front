import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: {
            created_at: "",
            email: "",
            email_verified_at: null,
            id: 1,
            updated_at: "",
            username: "",
        }
    }),
    actions: {
        setUser(payload) {
            this.user = payload;
        },
    },
});
