<template>
  <!-- eslint-disable vue/no-textarea-mustache -->
  <div class="w-full h-auto relative text-white">
    <Field
      :name="name"
      as="textarea"
      class="w-full bg-transparent h-[86px] min-h-[86px] max-h-[162px] p-2 pr-14 rounded border border-[#efefef5b] focus:outline-none font-bold text-lg"
      :placeholder="placeholder"
      rules="required|min:3|max:255"
      :readonly="readOnly"
      :value="value"
      @input="onInput"
    ></Field>
    <h1 class="absolute right-4 top-3 pointer-default select-none">
      {{ language }}
    </h1>
  </div>
</template>

<script>
import { Field } from "vee-validate";
export default {
  name: "TextArea",
  components: {
    Field,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "vue",
    },
    name: {
      type: String,
      default: "",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    onInput: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
