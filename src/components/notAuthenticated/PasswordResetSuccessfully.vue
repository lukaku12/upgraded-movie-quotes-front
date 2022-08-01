<template>
  <div
    class="w-screen h-screen max-h-screen bg-[#000000e1] flex flex-col justify-center items-center fixed top-0 left-0 z-50"
  ></div>
  <section
    class="w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col pb-16 items-center bg-login-background md:w-full md:h-auto md:max-w-2xl md:rounded-[10px] z-50"
  >
    <main
      class="pt-14 flex flex-col justify-center items-center text-white gap-5 w-7/12 text-center"
    >
      <SuccessCheckmark />
      <h1 class="text-[32px]">{{ $t("success") + "!" }}</h1>
      <p>{{ $t("success_message") }}</p>
      <router-link
        :to="{ name: 'login' }"
        type="button"
        class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white mt-5"
      >
        {{ $t("go_to_login") }}
      </router-link>
    </main>
  </section>
</template>

<script>
import SuccessCheckmark from "@/components/icons/SuccessCheckmark.vue";
export default {
  name: "PasswordResetSuccessfully",
  components: {
    SuccessCheckmark,
  },
};
</script>
