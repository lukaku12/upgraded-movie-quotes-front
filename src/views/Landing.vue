<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <ResetPassword v-if="!isAuthenticated && routeIsPasswordReset" />
  <EmailIsVerified v-if="!isAuthenticated && routeIsEmailIsVerified" />
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";
import ResetPassword from "@/views/notAuthenticated/ResetPassword.vue";
import EmailIsVerified from "@/views/notAuthenticated/EmailIsVerified.vue";
import { setLocale } from "@vee-validate/i18n";

export default {
  components: {
    EmailIsVerified,
    ResetPassword,
    NotAuthLanding,
    AuthLanding,
  },
  computed: {
    isAuthenticated() {
      return document.cookie.includes("jwt_token");
    },
    routeIsPasswordReset() {
      return this.$route.name === "reset-password";
    },
    routeIsEmailIsVerified() {
      return this.$route.name === "email-is-verified";
    },
  },
  mounted() {
    setLocale(this.$i18next.language);
  },
};
</script>
