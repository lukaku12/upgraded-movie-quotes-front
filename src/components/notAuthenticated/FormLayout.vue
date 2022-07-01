<template>
  <div
    class="w-screen h-screen max-h-screen bg-[#000000e1] flex flex-col justify-center items-center fixed top-0 left-0 z-50"
    @click="redirectToHome"
  ></div>
  <section
    class="w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col pb-16 items-center bg-login-background md:w-full md:h-auto md:max-w-2xl md:rounded-[10px] z-50"
  >
    <div class="text-center flex flex-col gap-3 mt-20 mb-10">
      <h1 class="text-white text-[24px] font-bold">
        {{ mainTitle }}
      </h1>
      <h1 class="text-[#6C757D]">
        {{ subTitle }}
      </h1>
    </div>
    <VeeForm v-slot="{ handleSubmit, meta, values }" as="div" class="w-10/12">
      <form @submit.prevent="handleSubmit($event, submitForm(meta, values))">
        <slot />
        <p class="text-center text-red-600">{{ apiErrors }}</p>
        <div class="flex flex-col w-full mt-4 gap-4">
          <button
            type="submit"
            class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white"
          >
            {{ action }}
          </button>
          <button
            type="button"
            class="w-full border border-white py-[7px] text-white rounded-[4px] flex justify-center items-center gap-2 font-bold"
          >
            <img src="@/assets/icons/google.svg" alt="google" class="w-5 h-5" />
            <p class="pt-[3px]">{{ googleAction }} with Google</p>
          </button>
        </div>
      </form>
    </VeeForm>
    <div class="flex w-full justify-center mt-10 font-bold">
      <h1 class="text-[#6C757D]">{{ redirectToTitle }}&nbsp;</h1>
      <router-link
        :to="{ name: redirectUrlName }"
        class="text-[#0D6EFD] font-bold text-base underline"
        >{{ redirectTo }}</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { Form as VeeForm } from "vee-validate";
import { useAuthStore } from "../../stores";
import { mapActions } from "pinia/dist/pinia";

export default {
  name: "FormLayout",
  components: { VeeForm },
  props: {
    mainTitle: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    googleAction: {
      type: String,
      required: true,
    },
    redirectToTitle: {
      type: String,
      required: true,
    },
    redirectTo: {
      type: String,
      required: true,
    },
    redirectUrlName: {
      type: String,
      required: true,
    },
    requestUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apiErrors: "",
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["setAuthenticated"]),
    redirectToHome() {
      this.$router.push({ name: "home" });
    },
    submitForm(meta, values) {
      if (!meta.valid) return;
      axios
        .post(this.requestUrl, values)
        .then(() => {
          this.setAuthenticated(true);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          const errors = JSON.parse(err.request.response);
          this.apiErrors = errors.message;
        });
    },
  },
};
</script>
