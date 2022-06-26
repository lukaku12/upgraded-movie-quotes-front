<template>
  <header class="flex w-10/12 justify-between h-[86px] items-center md:w-11/12">
    <div>
      <router-link
        :to="{ name: 'home' }"
        class="text-[#DDCCAA] text-base font-bold hidden md:flex"
      >
        MOVIE QUOTES
      </router-link>
      <button class="flex md:hidden">
        <img src="@/assets/icons/burger-menu.svg" alt="burger-menu" />
      </button>
    </div>
    <div class="flex items-center gap-7">
      <div class="flex items-center gap-12">
        <button class="flex md:hidden">
          <img src="@/assets/icons/search.svg" alt="" />
        </button>
        <button class="flex items-center text-white gap-1 relative">
          <p
            class="absolute bg-red-600 text-sm px-[6px] rounded-[50%] -top-[5px] -right-2"
          >
            3
          </p>
          <img src="@/assets/icons/notification-bell.svg" alt="bell" />
        </button>
        <button class="hidden md:flex items-center text-white gap-1">
          <p>Eng</p>
          <img src="@/assets/icons/down-arrow.svg" alt="down-arrow" />
        </button>
      </div>
      <router-link
        to=""
        class="border border-white text-white px-5 py-1 rounded-[4px] hover:bg-[#4d4d4d] hidden md:flex"
      >
        Log out
      </router-link>
    </div>
  </header>
</template>
