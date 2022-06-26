<template>
  <form-layout
    main-title="Log in to your account"
    sub-title="Welcome back! Please enter your details."
    action="Sign in"
    google-action="Sign in"
    redirect-to-title="Don't have an account?"
    redirect-to="Sign up"
    redirect-url-name="sign-up"
  >
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
  </form-layout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import FormLayout from "@/components/Layouts/FormLayout.vue";
export default {
  name: "Login",
  components: { BasicInput, CheckBox, FormLayout },
};
</script>
