<template>
  <div
    v-if="languagesAreVisible"
    class="w-screen h-screen bg-transparent top-0 left-0 fixed z-40"
    @click="hideLanguages"
  ></div>
  <div class="relative text-white hidden md:block">
    <button class="flex items-center gap-1" @click="showLanguages">
      <button v-if="selectedLanguage === 'ka'">{{ $t("geo") }}</button>
      <button v-else>{{ $t("eng") }}</button>
      <DownArrow />
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage === 'ka'"
      class="absolute top-6 z-50"
      @click="setLanguageEn"
    >
      {{ $t("eng") }}
    </button>
    <button
      v-if="languagesAreVisible && selectedLanguage !== 'ka'"
      class="absolute top-6 z-50"
      @click="setLanguageKa"
    >
      {{ $t("geo") }}
    </button>
  </div>
</template>

<script>
import DownArrow from "@/components/icons/DownArrow.vue";
import { setLocale } from "@vee-validate/i18n";
export default {
  name: "Language",
  components: { DownArrow },
  data() {
    return {
      languagesAreVisible: false,
      languages: {
        en: { nativeName: "English" },
        ka: { nativeName: "Georgian" },
      },
    };
  },
  computed: {
    selectedLanguage() {
      return this.$i18next.language;
    },
  },
  methods: {
    showLanguages() {
      this.languagesAreVisible = !this.languagesAreVisible;
    },
    hideLanguages() {
      this.languagesAreVisible = false;
    },
    setLanguageKa() {
      this.$i18next.changeLanguage("ka");
      setLocale("ka");
      this.languagesAreVisible = false;
    },
    setLanguageEn() {
      this.$i18next.changeLanguage("en");
      setLocale("en");
      this.languagesAreVisible = false;
    },
  },
};
</script>
