<template>
  <div class="pl-14 pr-8 h-96 mt-10 hidden lg:flex md:flex-col md:w-1/4">
    <div class="flex w-full h-[60px] gap-3 text-white">
      <img
        class="w-[60px] h-[60px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold text-base">Nino Tabagari</h1>
        <button class="text-xs text-start">Edit your profile</button>
      </div>
    </div>
    <nav>
      <ul class="text-white mt-5 flex flex-col gap-5">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="flex mt-5 items-center gap-6 ml-3"
          >
            <img src="@/assets/icons/home.svg" alt="home" />
            <p>News feed</p>
          </router-link>
        </li>
        <li>
          <router-link to="/movies" class="flex mt-5 items-center gap-6 ml-3">
            <img src="@/assets/icons/camera-reels.svg" alt="camera-reels" />
            <p>List of movies</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  //   computed: {
  //     getRouteName() {
  //       return this.$route.name;
  //     },
  //   },
};
</script>
