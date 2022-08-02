<template>
  <div class="flex flex-col py-3 w-full">
    <label class="text-white mb-2" :for="name">{{ title }}</label>
    <Field
      :id="name"
      :name="name"
      class="border rounded py-2 px-4 focus:outline-none bg-[#CED4DA] text-[#6C757D] font-semibold"
      :type="type"
      :placeholder="placeholder"
      :rules="rules"
      :value="value"
      :readonly="readOnly"
    />
    <ErrorMessage class="text-red-600" :name="name"></ErrorMessage>
  </div>
</template>
<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  name: "BasicInput",
  components: { Field, ErrorMessage },
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "required",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
