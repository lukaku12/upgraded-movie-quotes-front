<template>
  <div
    :class="navBarIsOpen ? 'visible' : 'hidden'"
    class="absolute w-screen h-screen top-0 left-0"
    @click="setNavbarIsOpen(false)"
  ></div>
  <div
    :class="navBarIsOpen ? 'visible' : 'hidden'"
    class="fixed top-0 left-0 h-[658px] rounded-tr-xl rounded-br-xl px-16 pr-20 pt-12 bg-[#11101A] lg:pl-14 lg:pr-8 lg:bg-transparent lg:h-96 lg:mt-10 lg:static lg:flex lg:flex-col lg:w-1/4"
  >
    <div class="flex w-full h-[60px] gap-3 text-white min-w-[300px]">
      <img
        class="w-[60px] h-[60px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold text-base">Nino Tabagari</h1>
        <button class="text-xs text-start opacity-70 hover:opacity-100">
          Edit your profile
        </button>
      </div>
    </div>
    <nav>
      <ul class="text-white mt-5 flex flex-col gap-5 font-bold">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="flex mt-5 items-center gap-6 ml-3 hover:opacity-60"
            @click="setNavbarIsOpen(false)"
          >
            <img v-if="getRouteName === 'home'" src="@/assets/icons/home-red.svg" alt="camera-reels" />
            <img v-else src="@/assets/icons/home.svg" alt="home" />
            <p>News feed</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/movies"
            class="flex mt-5 items-center gap-6 ml-3 hover:opacity-60"
            @click="setNavbarIsOpen(false)"
          >
            <img v-if="getRouteName === 'movies'" src="@/assets/icons/camera-reels-red.svg" alt="camera-reels" />
            <img v-else src="@/assets/icons/camera-reels.svg" alt="camera-reels" />
            <p>List of movies</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { mapActions } from "pinia/dist/pinia.esm-browser";
import { useStylesStore } from "@/stores/styling/styles";

export default {
  name: "Sidebar",
  computed: {
    ...mapState(useStylesStore, ["navBarIsOpen"]),
    getRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(useStylesStore, ["setNavbarIsOpen"]),
  },
};
</script>
