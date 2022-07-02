<template>
  <header
    class="flex w-10/12 justify-between h-[86px] items-center md:w-11/12 bg-[#222030]"
  >
    <div>
      <router-link
        :to="{ name: 'home' }"
        class="text-[#DDCCAA] text-base font-bold hidden lg:flex"
      >
        MOVIE QUOTES
      </router-link>
      <button class="flex lg:hidden" @click="setNavbarIsOpen(true)">
        <img src="@/assets/icons/burger-menu.svg" alt="burger-menu" />
      </button>
    </div>
    <div class="flex items-center gap-7">
      <div class="flex items-center gap-12 relative">
        <button class="flex lg:hidden" @click="setSearchBarIsOpen(true)">
          <img src="@/assets/icons/search.svg" alt="search" />
        </button>
        <div>
          <button class="flex items-center text-white gap-1 relative" @click="setNotificationBarIsOpen">
            <p
              class="absolute bg-red-600 text-sm px-[6px] rounded-[50%] -top-[5px] -right-2"
            >
              3
            </p>
            <img src="@/assets/icons/notification-bell.svg" alt="bell" />
          </button>
          <div v-if="notificationBarIsOpen" class="relative">
            <img class="absolute top-3 right-0" src="@/assets/icons/triangle.svg" alt="triangle" />
          </div>
        </div>
        <button class="hidden lg:flex items-center text-white gap-1">
          <p>Eng</p>
          <img src="@/assets/icons/down-arrow.svg" alt="down-arrow" />
        </button>
      </div>
      <router-link
        to=""
        class="border border-white text-white px-5 py-1 rounded-[4px] hover:bg-[#4d4d4d] hidden lg:flex"
      >
        Log out
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapActions,mapState } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "AuthHeader",
  computed: {
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, ["setNavbarIsOpen", "setSearchBarIsOpen", "setNotificationBarIsOpen"]),
  },
};
</script>
