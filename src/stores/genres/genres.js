import { defineStore } from "pinia";

export const useGenresStore = defineStore({
  id: "genres",
  state: () => ({
    selectedGenres: [],
  }),
  actions: {
    setGenres(payload) {
      this.selectedGenres.push(payload);
    },
    clearGenres() {
      this.selectedGenres = [];
    }
  },
});
