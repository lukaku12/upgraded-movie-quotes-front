<template>
  <login v-if="routeLogin"></login>
  <Register v-else-if="routeRegister"></Register>
  <section
    class="w-full h-full flex flex-col items-center bg-landing-background overflow-y-auto"
    :class="(routeLogin || routeRegister) && 'overflow-y-hidden'"
  >
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
    <main
      class="h-full w-full mt-44 flex flex-col items-center justify-center gap-8 mb-10"
    >
      <h1
        class="text-[#DDCCAA] text-2xl font-bold text-center xl:text-6xl xl:leading-[90px]"
      >
        Find any quote in <br />
        milions of movie lines
      </h1>
      <router-link
        :to="{ name: 'sign-up' }"
        class="bg-[#E31221] font-semibold px-5 py-2 rounded-[4px] text-white"
      >
        Get started
      </router-link>
    </main>
    <div class="mt-20 w-full h-full">
      <landing-quote
        :image="interstellar"
        quote="You have to leave somethig behind to go forward"
        movie="Interstellar"
        year="2014"
      ></landing-quote>
      <landing-quote
        :image="theRoyalTenenebaums"
        quote="I think we`re just gonnahave to be secretly in lovewith earch other and leave it that"
        movie="The Royal Tenenbaums"
        year="2001"
      ></landing-quote>
      <landing-quote
        :image="lordOfRings"
        quote="I see in your eyes the same fear that would take the heart of me...."
        movie="The Lord of the Rings"
        year="2003"
      ></landing-quote>
    </div>
    <footer class="h-[32px] w-full bg-[#0D0B14] flex items-center pl-8">
      <p class="text-[#DDCCAA] text-[8px] font-bold">
        © 2022 MOVIE QUOTES. ALL RIGHTS RESERVED.
      </p>
    </footer>
  </section>
</template>

<script>
import LandingQuote from "@/components/notAuthenticated/LandingQuote.vue";
import interstellar from "@/assets/images/interstellar-image.png";
import lordOfRings from "@/assets/images/lord-of-rings-image.png";
import theRoyalTenenebaums from "@/assets/images/the-royal-tenenbaums-image.png";
import Login from "@/views/notAuthenticated/Login.vue";
import Register from "@/views/notAuthenticated/Register.vue";

export default {
  name: "NotAuthLanding",
  components: {
    LandingQuote,
    Login,
    Register,
  },
  data() {
    return {
      interstellar,
      lordOfRings,
      theRoyalTenenebaums,
    };
  },
  computed: {
    routeLogin() {
      return this.$route.path === "/login";
    },
    routeRegister() {
      return this.$route.path === "/register";
    },
  },
};
</script>
