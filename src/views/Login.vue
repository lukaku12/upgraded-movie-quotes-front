<template>
  <section
    class="w-screen h-screen flex flex-col items-center bg-login-background"
  >
    <div class="text-center flex flex-col gap-3 mt-20 mb-14">
      <h1 class="text-white text-[24px] font-bold">Log in to your account</h1>
      <h1 class="text-[#6C757D]">Welcome back! Please enter your details.</h1>
    </div>
    <form class="w-10/12" @submit.prevent="submit">
      <basic-input
        title="Email"
        name="email"
        placeholder="Enter your email"
      ></basic-input>
      <basic-input
        title="Password"
        name="password"
        type="password"
        placeholder="Password"
      ></basic-input>
      <check-box></check-box>
      <div class="flex flex-col w-full mt-4 gap-4">
        <button
          type="submit"
          class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white"
        >
          Sign in
        </button>
        <button
          type="button"
          class="w-full border border-white py-[7px] text-white rounded-[4px] flex justify-center items-center gap-2 font-bold"
        >
          <img src="@/assets/icons/google.svg" alt="google" class="w-5 h-5" />
          <p class="pt-[3px]">Sign in with Google</p>
        </button>
      </div>
    </form>
    <div class="flex w-full justify-center mt-10 font-bold">
      <h1 class="text-[#6C757D]">Already have an account?&nbsp;</h1>
      <router-link
        :to="{ name: 'sign-up' }"
        class="text-[#0D6EFD] font-bold text-base underline"
        >Sign up</router-link
      >
    </div>
  </section>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import CheckBox from "../components/Inputs/CheckBox.vue";
export default {
  name: "Login",
  components: { BasicInput, CheckBox },
  methods: {
    submit() {
      console.log("submit");
    },
  },
};
</script>
