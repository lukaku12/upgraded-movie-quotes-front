<template>
  <div
    :class="navBarIsOpen ? 'visible' : 'hidden'"
    class="fixed w-screen h-screen top-0 left-0 z-z-1000"
    @click="setNavbarIsOpen(false)"
  ></div>
  <div class="hidden lg:w-[500px] lg:h-full lg:flex"></div>
  <div
    :class="navBarIsOpen ? 'visible' : 'hidden'"
    class="fixed top-0 animate-pop-up lg:animate-none left-0 h-[658px]
           rounded-tr-xl z-1000 rounded-br-xl px-16 pr-20 bg-[#11101A] lg:z-40
           lg:bg-transparent lg:h-96 lg:top-[124px] lg:flex lg:flex-col
    ">
    <div
      class="flex w-full items-center h-[60px] gap-3 text-white mt-14 lg:mt-0"
    >
      <img
        class="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
        :class="routeName === 'edit-profile' && 'border-green-600 border-2'"
        :src="'http://127.0.0.1:8000/storage/thumbnails/' + user.picture"
        alt="profile-picture"
      />
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold h-[25px]">{{ user.username }}</h1>
        <router-link
          :to="{ name: 'edit-profile' }"
          class="text-xs text-start opacity-70 hover:opacity-100"
          @click="setNavbarIsOpen(false)"
        >
          {{ $t('edit_your_profile') }}
        </router-link>
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
            <HomeSvg
              :fill-color="routeName === 'home' ? '#FF0000' : '#FFFFFF'"
            />
            <p>{{ $t('news_feed') }}</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/movies"
            class="flex mt-5 items-center gap-6 ml-3 hover:opacity-60"
            @click="setNavbarIsOpen(false)"
          >
            <CameraReelsSvg
              :fill-color="routePath.includes('movies') ? '#FF0000' : '#FFFFFF'"
            />
            <p>{{ $t('list_of_movies') }}</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HomeSvg from "@/components/icons/Home.vue";
import CameraReelsSvg from "@/components/icons/CameraReels.vue";
import { mapState, mapActions } from "pinia";
import { useStylesStore } from "@/stores/styling/styles";
import { useUserStore } from "@/stores/user/user";
import axios from "@/config/axios/index";

export default {
  name: "Sidebar",
  components: { CameraReelsSvg, HomeSvg },
  computed: {
    ...mapState(useStylesStore, ["navBarIsOpen"]),
    ...mapState(useUserStore, ["user"]),
    routeName() {
      return this.$route.name;
    },
    routePath() {
      return this.$route.path;
    },
  },
  mounted() {
    if (this.user.username === "") {
      axios.get("user").then((res) => {
        this.setUser(res.data);
      });
    }
  },
  methods: {
    ...mapActions(useStylesStore, ["setNavbarIsOpen"]),
    ...mapActions(useUserStore, ["setUser"]),
  },
};
</script>
