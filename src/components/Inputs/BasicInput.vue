<template>
  <div class="flex flex-col py-3 w-full">
    <label class="text-white mb-2" :for="name">{{ title }}</label>
    <input
      :id="name"
      :type="type"
      :placeholder="placeholder"
      class="border rounded py-2 px-4 focus:outline-none bg-[#CED4DA] text-[#6C757D] font-semibold"
    />
  </div>
</template>
<script>
export default {
  name: "BasicInput",
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
  },
};
</script>
