<template>
  <div
    class="flex flex-col w-screen h-screen justify-center items-center bg-login-background text-white"
  >
    <img
      src="@/assets/images/gandolf-for-forbidden-page.png"
      alt="ghost"
      class="mb-7"
    />
    <div class="flex flex-col w-10/12 items-center text-center">
      <h1 class="text-[24px] font-extrabold mb-5">{{ $t('you_shall_not_pass') }}</h1>
      <p class="mb-8 font-semibold">
        {{ $t('sorry_but_you_dont_have_permission_to_access_this_page') }}
      </p>
      <router-link
        :to="{ name: 'home' }"
        class="bg-[#E31221] mb-10 py-[7px] px-6 rounded-[4px] text-white font-semibold"
      >
        {{ $t('return_home') }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
