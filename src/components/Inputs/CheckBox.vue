<template>
  <div class="mt-7 flex items-center text-xs justify-between">
    <div class="flex items-center gap-2">
      <input
        id="remember_device"
        name="remember_device"
        class="w-5 h-5"
        type="checkbox"
      />
      <label class="text-base text-white" for="remember_device"
        >Remember me</label
      >
    </div>
    <div class="text-right">
      <button
        type="button"
        class="text-[#0D6EFD] font-bold text-base underline"
      >
        Forgot password
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: {},
};
</script>
