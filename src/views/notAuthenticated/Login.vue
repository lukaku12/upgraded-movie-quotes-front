<template>
  <form-layout
    :main-title="$t('log_in_to_your_account')"
    :sub-title="$t('welcome_back_please_enter_your_details')"
    :action="$t('sign_in')"
    :google-action="$t('sign_in')"
    :redirect-to-title="$t('dont_have_an_account')"
    :redirect-to="$t('sign_up')"
    redirect-url-name="sign-up"
    request-url="login"
  >
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
