<template>
  <CheckYourEmail
    v-if="emailIsSent"
    :notification-text="$t('activate_account_message')"
  />
  <FormLayout
    v-else
    :main-title="$t('create_an_account')"
    :sub-title="$t('start_your_journey')"
    :redirect-to-title="$t('already_have_an_account')"
    :redirect-to="$t('log_in')"
    redirect-url-name="login"
  >
    <VueForm v-slot="{ meta, values }" as="div" class="w-10/12">
      <basicInput
        :title="$t('username')"
        name="username"
        :placeholder="$t('enter_your_name')"
        rules="required|min:3|max:15"
      />
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
      <basicInput
        :title="$t('confirm_password')"
        name="confirm_password"
        type="password"
        placeholder="Password"
        rules="required|min:8|max:15"
      />
      <li v-for="apiError in apiErrors" :key="apiError" class="text-red-600">
        {{ apiError[0] }}
      </li>
      <div class="flex flex-col w-full mt-4 gap-4">
        <button
          type="button"
          class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white"
          :disabled="!meta.valid"
          @click="register(meta, values)"
        >
          {{ isLoading ? $t("loading") : $t("get_started") }}
        </button>
        <GoogleAuth :google-action="$t('sign_up')" />
      </div>
    </VueForm>
    <PopupMessage
      v-if="oauthError"
      :message="oauthError"
      text-color="text-red-600"
    />
  </FormLayout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
import GoogleAuth from "@/components/notAuthenticated/GoogleAuth.vue";
import { Form as VueForm } from "vee-validate";
import axios from "@/config/axios";
import CheckYourEmail from "@/components/notAuthenticated/CheckYourEmail.vue";
import PopupMessage from "@/components/authenticated/PopupMessage.vue";

export default {
  name: "Register",
  components: {
    PopupMessage,
    CheckYourEmail,
    GoogleAuth,
    BasicInput,
    FormLayout,
    VueForm,
  },
  data() {
    return {
      apiErrors: "",
      oauthError: "",
      emailIsSent: false,
      isLoading: false,
    };
  },
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
    if (this.$route.query.error === "409") {
      this.oauthError = this.$t("email_already_exists");
    }
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
  },
  methods: {
    register(meta, values) {
      this.isLoading = true;
      if (!meta.valid) return;
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
      };
      axios
        .post("register", data)
        .then(() => {
          this.isLoading = false;
          this.emailIsSent = true;
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.apiErrors = error.response.data.errors;
          } else {
            this.apiErrors = "Something went wrong, please try again later.";
          }
          this.isLoading = false;
        });
    },
  },
};
</script>
