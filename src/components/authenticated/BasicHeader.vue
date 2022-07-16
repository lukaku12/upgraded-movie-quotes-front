<template>
  <header
    class="flex w-full justify-between h-[86px] items-center bg-[#222030] relative"
  >
    <div
      class="flex w-full px-6 md:px-16 justify-between h-[86px] items-center fixed top-0 bg-[#222030] z-50"
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
              <span
                v-if="unreadNotifications > 0"
                class="absolute bg-red-600 text-sm px-[6px] rounded-[50%] -top-[5px] -right-2"
              >
                {{ unreadNotifications }}
              </span>
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
import { useNotificationsStore } from "@/stores/notifications/notifications";
import { useUserStore } from "@/stores/user/user";

export default {
  name: "AuthHeader",
  components: { Language, BurgerMenu, Search, Triangle, NotificationBell },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useStylesStore, ["notificationBarIsOpen"]),
    ...mapState(useNotificationsStore, [
      "notifications",
      "unreadNotifications",
    ]),
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
          // this.$router.push({ name: "home" });
          document.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
