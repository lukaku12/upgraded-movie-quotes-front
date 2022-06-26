<template>
  <header
    class="flex w-10/12 justify-between h-20 items-center mt-4 md:w-11/12"
  >
    <router-link
      :to="{ name: 'home' }"
      class="text-[#DDCCAA] text-base font-bold"
    >
      MOVIE QUOTES
    </router-link>
    <div class="flex items-center gap-3">
      <div class="hidden md:flex items-center gap-8">
        <button class="flex items-center text-white gap-1">
          <p>Eng</p>
          <img src="@/assets/icons/down-arrow.svg" alt="" />
        </button>
        <router-link
          :to="{ name: 'sign-up' }"
          class="bg-[#E31221] border border-[#E31221] font-semibold px-4 py-1 rounded-[4px] text-white"
        >
          Sign Up
        </router-link>
      </div>
      <router-link
        :to="{ name: 'login' }"
        class="border border-white text-white px-5 py-1 rounded-[4px] hover:bg-[#4d4d4d]"
      >
        Log in
      </router-link>
    </div>
  </header>
</template>
