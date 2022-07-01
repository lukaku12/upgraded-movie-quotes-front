<template>
  <form-layout
    main-title="Log in to your account"
    sub-title="Welcome back! Please enter your details."
    action="Sign in"
    google-action="Sign in"
    redirect-to-title="Don't have an account?"
    redirect-to="Sign up"
    redirect-url-name="sign-up"
    request-url="http://localhost:8000/api/login"
  >
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
    <check-box></check-box>
  </form-layout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
export default {
  name: "Login",
  components: { BasicInput, CheckBox, FormLayout },
  data() {
    return {
      emailValue: "",
      passwordValue: "",
    };
  },
  methods: {
    updateEmailValue(e) {
      this.emailValue = e.target.value;
    },
    updatePasswordValue(e) {
      this.passwordValue = e.target.value;
    },
  },
};
</script>
