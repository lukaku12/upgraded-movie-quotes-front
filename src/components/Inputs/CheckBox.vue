<template>
  <div class="mt-7 flex items-center text-xs justify-between">
    <div class="flex items-center gap-2">
      <input
        id="remember_device"
        name="remember_device"
        class="w-5 h-5"
        type="checkbox"
      />
      <label class="text-base text-white" for="remember_device">{{
        $t("remember_me")
      }}</label>
    </div>
    <div class="text-right">
      <router-link
        :to="{ name: 'forgot-password' }"
        class="text-[#0D6EFD] font-bold text-base underline"
      >
        {{ $t("forgot_password") }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: {},
};
</script>
