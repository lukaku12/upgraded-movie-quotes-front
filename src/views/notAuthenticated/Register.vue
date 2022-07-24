<template>
  <FormLayout
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
      <p class="text-center text-red-600">{{ apiErrors }}</p>
      <div class="flex flex-col w-full mt-4 gap-4">
        <button
          type="button"
          class="w-full bg-[#E31221] py-[7px] rounded-[4px] text-white"
          :disabled="!meta.valid"
          @click="register(meta, values)"
        >
          {{ $t('get_started') }}
        </button>
        <GoogleAuth :google-action="$t('sign_up')"/>
      </div>
    </VueForm>
  </FormLayout>
</template>

<script>
import BasicInput from "@/components/Inputs/BasicInput.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
import GoogleAuth from "@/components/notAuthenticated/GoogleAuth.vue";
import { Form as VueForm } from "vee-validate";
import { setJwtToken } from "@/helpers/jwt";
import axios from "@/config/axios";

export default {
  name: "Register",
  components: { GoogleAuth, BasicInput, FormLayout, VueForm },
  data() {
    return {
      apiErrors: "",
    };
  },
  mounted() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  unmounted() {
    document.querySelector("html").style.overflowY = "auto";
  },
  methods: {
    register(meta, values) {
      if (!meta.valid) return;
      axios
        .post("register/create", values)
        .then((response) => {
          setJwtToken(response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          this.apiErrors = error.response.data.message;
        });
    },
  },
};
</script>
