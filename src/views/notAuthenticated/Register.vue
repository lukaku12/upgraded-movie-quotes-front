<template>
  <form-layout
    :main-title="$t('create_an_account')"
    :sub-title="$t('start_your_journey')"
    :action="$t('get_started')"
    :google-action="$t('sign_up')"
    :redirect-to-title="$t('already_have_an_account')"
    :redirect-to="$t('log_in')"
    redirect-url-name="login"
    request-url="register/create"
  >
    <basic-input
      :title="$t('username')"
      name="username"
      :placeholder="$t('enter_your_name')"
      :value="userNameValue"
      :on-input="updateUserNameValue"
      rules="required|min:3|max:15"
    ></basic-input>
    <basic-input
      :title="$t('email')"
      name="email"
      :placeholder="$t('enter_your_email')"
      :value="emailValue"
      :on-input="updateEmailValue"
      rules="required|email"
    ></basic-input>
    <basic-input
      :title="$t('password')"
      name="password"
      type="password"
      :placeholder="$t('password')"
      :value="passwordValue"
      :on-input="updatePasswordValue"
      rules="required|min:8|max:15"
    ></basic-input>
    <basic-input
      :title="$t('confirm_password')"
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
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
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
