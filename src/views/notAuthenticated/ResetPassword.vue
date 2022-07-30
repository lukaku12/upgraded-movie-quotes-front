<template>
  <PasswordResetSuccessfully v-if="passwordIsUpdated" />
  <FormLayout
    v-else
    :main-title="$t('create_new_password')"
    :sub-title="$t('create_new_password_message')"
    redirect-to-title=""
    redirect-to=""
    redirect-url-name=""
  >
    <VueForm v-slot="{ meta, values }" as="div" class="w-10/12">
      <basicInput
        :title="$t('password')"
        name="password"
        type="password"
        :placeholder="$t('create_new_password')"
        rules="required|min:8|max:15"
      />
      <basicInput
        :title="$t('confirm_password')"
        name="password_confirmation"
        type="password"
        :placeholder="$t('create_new_password')"
        rules="required|min:8|max:15"
      />
      <button
        type="button"
        class="w-full bg-[#E31221] py-[7px] mt-4 rounded-[4px] text-white"
        :disabled="!meta.valid"
        @click="resetPassword(meta, values)"
      >
        {{ $t("reset_password") }}
      </button>
      <div
        class="flex gap-2 mt-5 w-full items-center justify-center text-[white]"
      >
        <router-link
          to="/login"
          class="flex items-center gap-3 opacity-70 hover:opacity-100"
        >
          <LeftArrow />
          <span>{{ $t("back_to_log_in") }}</span>
        </router-link>
      </div>
    </VueForm>
  </FormLayout>
</template>

<script>
import PasswordResetSuccessfully from "@/components/notAuthenticated/PasswordResetSuccessfully.vue";
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
import { Form as VueForm } from "vee-validate";
import BasicInput from "@/components/Inputs/BasicInput.vue";
import LeftArrow from "@/components/icons/LeftArrow.vue";
import axios from "@/config/axios";

export default {
  name: "ResetPassword",
  components: {
    PasswordResetSuccessfully,
    FormLayout,
    LeftArrow,
    BasicInput,
    VueForm,
  },
  data() {
    return {
      passwordIsUpdated: false,
    };
  },
  mounted() {
    document.querySelector("html").style.overflow = "hidden";
  },
  unmounted() {
    document.querySelector("html").style.overflow = "auto";
  },
  methods: {
    resetPassword(meta, values) {
      const data = {
        token: this.$route.params.token,
        email: this.$route.query.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      };
      axios
        .post("/reset-password", data)
        .then((res) => {
          console.log(res);
          this.passwordIsUpdated = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
