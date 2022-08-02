<template>
  <button
    type="button"
    class="w-full border border-white py-[7px] text-white rounded-[4px] flex justify-center items-center gap-2 font-bold"
    @click="googleAuth"
  >
    <GoogleIcon />
    <span class="pt-[3px]">{{ googleAction }} {{ $t("with_google") }}</span>
  </button>
</template>

<script>
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
export default {
  name: "GoogleAuth",
  components: { GoogleIcon },
  props: {
    googleAction: {
      type: String,
      required: true,
    },
  },
  methods: {
    googleAuth() {
      window.location.href = import.meta.env.VITE_API_BASE_URL + "auth/redirect";
    },
  },
};
</script>
