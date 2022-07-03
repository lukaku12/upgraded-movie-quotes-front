<template>
  <!-- eslint-disable vue/no-textarea-mustache -->
  <div class="w-full h-auto relative text-white">
    <textarea
      class="w-full bg-transparent h-[86px] p-2 pr-14 rounded border border-[#efefef5b] focus:outline-none font-bold text-lg"
      :placeholder="placeholder"
      >{{ value }}</textarea
    >
    <h1 class="absolute right-4 top-3 pointer-default select-none">
      {{ language }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "TextArea",
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
  },
};
</script>
