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
        <BurgerMenu />
      </button>
    </div>
    <div class="flex items-center gap-7">
      <div class="flex items-center gap-12 relative">
        <button class="flex lg:hidden" @click="setSearchBarIsOpen(true)">
          <Search />
        </button>
        <div>
          <button
            class="flex items-center text-white gap-1 relative"
            @click="setNotificationBarIsOpen"
          >
            <p
              class="absolute bg-red-600 text-sm px-[6px] rounded-[50%] -top-[5px] -right-2"
            >
              2
            </p>
            <NotificationBell />
          </button>
          <div v-if="notificationBarIsOpen" class="relative">
            <Triangle />
          </div>
        </div>
        <Language></Language>
      </div>
      <button
        class="border border-white text-white px-5 py-1 rounded-[4px] hover:bg-[#4d4d4d] hidden lg:flex"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import Language from "@/components/Language.vue";
import axios from "@/config/axios";
import BurgerMenu from "../icons/BurgerMenu.vue";
import Search from "../icons/Search.vue";
import Triangle from "../icons/Triangle.vue";
import NotificationBell from "../icons/NotificationBell.vue";

export default {
  name: "AuthHeader",
  components: { Language, BurgerMenu, Search, Triangle, NotificationBell },
  computed: {
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
  },
  methods: {
    ...mapActions(useStylesStore, [
      "setNavbarIsOpen",
      "setSearchBarIsOpen",
      "setNotificationBarIsOpen",
    ]),
    logout() {
      axios
        .post("logout")
        .then((response) => {
          console.log(response);
          document.cookie =
            "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
