<template>
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
      class="absolute top-6"
      @click="setLanguage"
    >
      Geo
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage !== 'Eng'"
      class="absolute top-6"
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
    setLanguage() {
      this.selectedLanguage = this.selectedLanguage === "Eng" ? "Geo" : "Eng";
      this.languagesAreVisible = false;
    },
  },
};
</script>
