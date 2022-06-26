<template>
  <form-layout
    main-title="Create an account"
    sub-title="Start your journey!"
    action="Get started"
    google-action="Sign up"
    redirect-to-title="Already have an account?"
    redirect-to="Log in"
    redirect-url-name="login"
  >
    <basic-input
      title="Name"
      name="name"
      placeholder="Enter your name"
    ></basic-input>
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
    <basic-input
      title="Confirm password"
      name="confirm-password"
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
  name: "Register",
  components: { BasicInput, CheckBox, FormLayout },
};
</script>
