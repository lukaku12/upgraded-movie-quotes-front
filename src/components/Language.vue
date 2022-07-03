<template>
  <div
    v-if="languagesAreVisible"
    class="w-screen h-screen bg-transparent top-0 left-0 fixed z-40"
    @click="hideLanguages"
  ></div>
  <div class="relative text-white hidden md:block">
    <button class="flex items-center gap-1" @click="showLanguages">
      <button v-if="selectedLanguage === 'Eng'">Eng</button>
      <button v-else>Geo</button>
      <img
        :class="languagesAreVisible && 'rotate-180'"
        src="@/assets/icons/down-arrow.svg"
        alt="down-arrow"
      />
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage === 'Eng'"
      class="absolute top-6 z-50"
      @click="setLanguage"
    >
      Geo
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage !== 'Eng'"
      class="absolute top-6 z-50"
      @click="setLanguage"
    >
      Eng
    </button>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      languagesAreVisible: false,
      selectedLanguage: "Eng",
    };
  },
  methods: {
    showLanguages() {
      this.languagesAreVisible = !this.languagesAreVisible;
    },
    hideLanguages() {
      this.languagesAreVisible = false;
    },
    setLanguage() {
      this.selectedLanguage = this.selectedLanguage === "Eng" ? "Geo" : "Eng";
      this.languagesAreVisible = false;
    },
  },
};
</script>
