<template>
  <button
    :id="genre.id"
    type="button"
    class="py-1 px-2 rounded"
    :class="
      genreIsActive
        ? 'bg-gray-800 text-gray-400 outline-1 outline'
        : 'bg-gray-400 text-gray-500'
    "
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
