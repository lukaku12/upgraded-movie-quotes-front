<template>
  <form-layout
    main-title="Create an account"
    sub-title="Start your journey!"
    action="Get started"
    google-action="Sign up"
    redirect-to-title="Already have an account?"
    redirect-to="Log in"
    redirect-url-name="login"
    request-url="http://127.0.0.1:8000/api/register/create"
  >
    <basic-input
      title="Name"
      name="username"
      placeholder="Enter your name"
      :value="userNameValue"
      :on-input="updateUserNameValue"
      rules="required|min:3|max:15"
    ></basic-input>
    <basic-input
      title="Email"
      name="email"
      placeholder="Enter your email"
      :value="emailValue"
      :on-input="updateEmailValue"
      rules="required|email"
    ></basic-input>
    <basic-input
      title="Password"
      name="password"
      type="password"
      placeholder="Password"
      :value="passwordValue"
      :on-input="updatePasswordValue"
      rules="required|min:8|max:15"
    ></basic-input>
    <basic-input
      title="Confirm password"
      name="confirm_password"
      type="password"
      placeholder="Password"
      :value="confirmPasswordValue"
      :on-input="updateConfirmPasswordValue"
      rules="required|min:8|max:15"
    ></basic-input>
  </form-layout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";

export default {
  name: "Register",
  components: { BasicInput, FormLayout },
  data() {
    return {
      userNameValue: "",
      emailValue: "",
      passwordValue: "",
      confirmPasswordValue: "",
    };
  },
  methods: {
    updateUserNameValue(e) {
      this.userNameValue = e.target.value;
    },
    updateEmailValue(e) {
      this.emailValue = e.target.value;
    },
    updatePasswordValue(e) {
      this.passwordValue = e.target.value;
    },
    updateConfirmPasswordValue(e) {
      this.confirmPasswordValue = e.target.value;
    },
  },
};
</script>
