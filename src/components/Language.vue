<template>
  <div
    v-if="languagesAreVisible"
    class="w-screen h-screen bg-transparent top-0 left-0 fixed z-40"
    @click="hideLanguages"
  ></div>
  <div class="relative text-white hidden md:block">
    <button class="flex items-center gap-1" @click="showLanguages">
      <button v-if="selectedLanguage === 'Eng'">{{ $t('eng') }}</button>
      <button v-else>{{ $t('geo') }}</button>
      <DownArrow />
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage === 'Eng'"
      class="absolute top-6 z-50"
      @click="setLanguage"
    >
      {{ $t('geo') }}
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage !== 'Eng'"
      class="absolute top-6 z-50"
      @click="setLanguage"
    >
      {{ $t('eng') }}
    </button>
  </div>
</template>

<script>
import DownArrow from "./icons/DownArrow.vue";
export default {
  name: "Language",
  components: { DownArrow },
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
