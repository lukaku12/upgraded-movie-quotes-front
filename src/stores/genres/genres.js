import { defineStore } from "pinia";

export const useGenresStore = defineStore({
  id: "genres",
  state: () => ({
    selectedGenres: [],
  }),
  actions: {
    setGenres(payload) {
      if (this.selectedGenres.includes(payload)) {
        this.selectedGenres = this.selectedGenres.filter(
          (genre) => genre !== payload
        );
      } else {
        this.selectedGenres.push(payload);
      }
    },
    clearSelectedGenres() {
      this.selectedGenres = [];
    },
  },
});
