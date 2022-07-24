<template>
  <FormLayout
    :main-title="$t('forgot_password')"
    :sub-title="$t('forgot_password_message')"
    redirect-to-title=""
    redirect-to=""
    redirect-url-name=""
  >
    <VueForm v-slot="{ meta, values }" as="div" class="w-10/12">
      <basicInput
        :title="$t('email')"
        name="email"
        type="email"
        :placeholder="$t('enter_your_email')"
        rules="required|min:8|max:15"
      />
      <button
        type="button"
        class="w-full bg-[#E31221] py-[7px] mt-4 rounded-[4px] text-white"
        :disabled="!meta.valid"
        @click="sendEmail(meta, values)"
      >
        {{ $t("send_instructions") }}
      </button>
      <div class="flex gap-2 mt-5 w-full items-center justify-center text-[white]">
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
import FormLayout from "@/components/notAuthenticated/FormLayout.vue";
import { Form as VueForm } from "vee-validate";
import BasicInput from "@/components/Inputs/BasicInput.vue";
import LeftArrow from "@/components/icons/LeftArrow.vue";
export default {
  components: {
    LeftArrow,
    FormLayout,
    BasicInput,
    VueForm,
  },
  methods: {
    sendEmail(meta, values) {
      console.log(meta, values);
    },
  },
};
</script>
