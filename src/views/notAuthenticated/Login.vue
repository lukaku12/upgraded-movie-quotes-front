<template>
  <ForgotPassword v-if="routeForgotPassword" />
  <FormLayout
    v-else
    :main-title="$t('log_in_to_your_account')"
    :sub-title="$t('welcome_back_please_enter_your_details')"
    :redirect-to-title="$t('dont_have_an_account')"
    :redirect-to="$t('sign_up')"
    redirect-url-name="sign-up"
  >
    <VueForm v-slot="{ meta, values }" as="div" class="w-10/12">
      <basicInput
        :title="$t('email')"
        name="email"
        :placeholder="$t('enter_your_email')"
        rules="required|email"
      />
      <basicInput
        :title="$t('password')"
        name="password"
        type="password"
        :placeholder="$t('password')"
        rules="required|min:8|max:15"
      />
      <p class="text-red-600">{{ apiErrors }}</p>
      <CheckBox />
      <div class="flex flex-col w-full mt-4 gap-4">
        <button
          type="button"
          id="login"
          class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white"
          :disabled="!meta.valid"
          @click="login(meta, values)"
        >
          {{ $t("sign_in") }}
        </button>
        <GoogleAuth :google-action="$t('sign_in')" />
      </div>
    </VueForm>
  </FormLayout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
import GoogleAuth from "@/components/notAuthenticated/GoogleAuth.vue";
import ForgotPassword from "@/views/notAuthenticated/ForgotPassword.vue";
import { Form as VueForm } from "vee-validate";
import { setJwtToken } from "@/helpers/jwt";
import axios from "@/config/axios";
export default {
  name: "Login",
  components: {
    GoogleAuth,
    BasicInput,
    CheckBox,
    FormLayout,
    VueForm,
    ForgotPassword,
  },
  data() {
    return {
      apiErrors: "",
    };
  },
  computed: {
    routeForgotPassword() {
      return this.$route.path === "/forgot-password";
    },
  },
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
  },
  methods: {
    login(meta, values) {
      this.apiErrors = "";
      if (!meta.valid) return;
      axios
        .post("login", values)
        .then((response) => {
          setJwtToken(response.data.access_token, response.data.expires_in);
          this.$router.replace({ name: "home" });
          setTimeout(() => {
            document.location.reload();
          }, 100);
        })
        .catch((err) => {
          if (err.response.data.error === "User Does not exist!") {
            this.apiErrors = this.$t("your_provided_credentials_are_not_valid");
          } else if (
            err.response.data.error === "Please verify your email first!"
          ) {
            this.apiErrors = this.$t("please_verify_your_email_first");
          } else {
            this.apiErrors = "Something went wrong";
          }
        });
    },
  },
};
</script>
