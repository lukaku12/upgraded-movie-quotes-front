<template>
  <login v-if="routeLogin || routeForgotPassword"></login>
  <Register v-else-if="routeRegister"></Register>
  <section
    class="w-full h-full flex flex-col items-center bg-landing-background overflow-y-auto"
    :class="(routeLogin || routeRegister) && 'overflow-y-hidden'"
  >
    <header
      :class="!mainIsHidden && 'opacity-0'"
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
          <Language></Language>
          <router-link
            :to="{ name: 'sign-up' }"
            class="bg-[#E31221] border border-[#E31221] font-semibold px-4 py-1 rounded-[4px] text-white"
          >
            {{ $t("sign_up") }}
          </router-link>
        </div>
        <router-link
          :to="{ name: 'login' }"
          class="border border-white text-white px-5 py-1 rounded-[4px] hover:bg-[#4d4d4d]"
        >
          {{ $t("log_in") }}
        </router-link>
      </div>
    </header>
    <main
      :class="!mainIsHidden && 'opacity-0'"
      class="h-full w-full mt-44 flex flex-col items-center justify-center gap-8 mb-10"
    >
      <h1
        class="text-[#DDCCAA] text-2xl h-[190px] xl:h-auto font-bold text-center xl:text-6xl xl:leading-[90px]"
      >
        {{ $t("find_any_quote_in") }} <br />
        {{ $t("millions_of_movie_lines") }}
      </h1>
      <router-link
        :to="{ name: 'sign-up' }"
        class="bg-[#E31221] font-semibold px-5 py-2 rounded-[4px] text-white"
      >
        {{ $t("get_started") }}
      </router-link>
    </main>
    <div :class="mainIsHidden ? ' mt-20 w-full h-full ' : 'bg-black'">
      <landing-quote
        id="landing-quote"
        :image="interstellar"
        :mobile-image="interstellarMobile"
        :quote="$t('interstellar_quote')"
        :movie="$t('interstellar')"
        :style="styles"
        year="2014"
      ></landing-quote>
      <landing-quote
        :image="theRoyalTenenebaums"
        :mobile-image="theRoyalTenenebaumsMobile"
        :quote="$t('the_royal_tenenbaums_quote')"
        :movie="$t('the_royal_tenenbaums')"
        :style="styles2"
        year="2001"
      ></landing-quote>
      <landing-quote
        :image="lordOfRings"
        :mobile-image="lordOfRingsMobile"
        :quote="$t('the_lord_of_the_rings_quote')"
        :movie="$t('the_lord_of_the_rings')"
        :style="styles3"
        year="2003"
      ></landing-quote>
    </div>
    <footer :class="mainIsHidden && 'opacity-0'" class="h-[32px] w-full bg-[#0D0B14] flex items-center pl-8">
      <p class="text-[#DDCCAA] text-[8px] font-bold">
        © 2022 {{ $t("copyright") }}.
      </p>
    </footer>
  </section>
</template>

<script>
import LandingQuote from "@/components/notAuthenticated/LandingQuote.vue";
import interstellar from "@/assets/images/interstellar-image.png";
import lordOfRings from "@/assets/images/lord-of-rings-image.png";
import theRoyalTenenebaums from "@/assets/images/the-royal-tenenbaums-image.png";
import interstellarMobile from "@/assets/images/interstellar-image-mobile.png";
import lordOfRingsMobile from "@/assets/images/lord-of-rings-image-mobile.png";
import theRoyalTenenebaumsMobile from "@/assets/images/the-royal-tenenbaums-image-mobile.png";
import Login from "@/views/notAuthenticated/Login.vue";
import Register from "@/views/notAuthenticated/Register.vue";
import Language from "@/components/Language.vue";

export default {
  name: "NotAuthLanding",
  components: {
    Language,
    LandingQuote,
    Login,
    Register,
  },
  data() {
    return {
      interstellar,
      lordOfRings,
      theRoyalTenenebaums,
      interstellarMobile,
      lordOfRingsMobile,
      theRoyalTenenebaumsMobile,
      mainIsHidden: true,
      styles: "",
      styles2: "",
      styles3: "",
    };
  },
  computed: {
    routeLogin() {
      return this.$route.path === "/login";
    },
    routeRegister() {
      return this.$route.path === "/register";
    },
    routeForgotPassword() {
      return this.$route.path === "/forgot-password";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset;
      const screenHeight = window.innerHeight;
      const landingQuoteTop = document.getElementById("landing-quote").offsetTop;
      if (scrollTop > landingQuoteTop) {
        this.mainIsHidden = false;
        this.styles = "width: 100vw; height: 100vh; top: 0; left: 0; position: fixed; z-index: 500;";
        this.styles2 = `width: 100vw; height: 100vh; top: calc(100vh + 644px); left: 0; position: absolute; z-index: 500;`;
        if ( scrollTop > screenHeight + 644 ) {
          this.styles2 = "width: 100vw; height: 100vh; top: 0; left: 0; position: fixed; z-index: 500;";
        }
        
        this.styles3 = "width: 100vw; height: 100vh; top: calc(200vh + 644px);; left: 0; position: absolute; z-index: 1000; ";
      } if (scrollTop < 644) {
        this.mainIsHidden = true;
        this.styles = "";
        this.styles2 = "";
        this.styles3 = "";
      }
    },
  
  },
};
</script>
