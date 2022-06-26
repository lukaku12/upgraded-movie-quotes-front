<template>
  <section
    class="w-screen h-screen flex flex-col items-center bg-login-background"
  >
    <div class="text-center flex flex-col gap-3 mt-20 mb-10">
      <h1 class="text-white text-[24px] font-bold">
        {{ mainTitle }}
      </h1>
      <h1 class="text-[#6C757D]">
        {{ subTitle }}
      </h1>
    </div>
    <form class="w-10/12">
      <slot />
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
export default {
  name: "FormLayout",
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
  },
  methods: {},
};
</script>
