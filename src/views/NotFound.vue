<template>
  <div
    class="flex flex-col w-screen h-screen justify-center items-center bg-login-background text-white"
  >
    <img
      src="@/assets/images/ghost-not-found-page.png"
      alt="ghost"
      class="mb-7"
    />
    <h1 class="text-[24px] font-extrabold mb-5">Whoops!</h1>
    <p class="mb-8 font-semibold">{{ $t('not_found') }}</p>
    <router-link
      :to="{ name: 'home' }"
      class="bg-[#E31221] mb-10 py-[7px] px-6 rounded-[4px] text-white font-semibold"
    >
      {{ $t('return_home') }}
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
