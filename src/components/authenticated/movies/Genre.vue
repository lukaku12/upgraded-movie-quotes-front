<template>
  <button
    type="button"
    class="bg-gray-400 py-1 px-2 rounded"
    :class="genreIsActive ? 'opacity-90' : 'opacity-40 hover:opacity-60'"
    @click="addGenreToActive(genre)"
  >
    {{ genre.name }}
  </button>
</template>

<script>
import { mapActions } from "pinia";
import { useGenresStore } from "@/stores/genres/genres";

export default {
  name: "Genre",
  props: {
    genre: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      genreIsActive: false,
    };
  },
  methods: {
    ...mapActions(useGenresStore, ["setGenres"]),
    addGenreToActive(genre) {
      this.setGenres(genre.id);
      this.genreIsActive = !this.genreIsActive;
    },
  },
};
</script>
