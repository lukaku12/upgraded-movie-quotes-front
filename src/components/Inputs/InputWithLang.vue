<template>
  <div class="w-full h-auto relative text-white">
    <Field
      :name="name"
      class="w-full bg-transparent  p-2 pr-14 rounded border border-[#efefef5b] focus:outline-none font-bold text-lg"
      :placeholder="placeholder"
      rules="required|min:3|max:255"
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
  name: "InputWithLang",
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
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    onInput: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
