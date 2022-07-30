<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <ResetPassword v-if="!isAuthenticated && routeIsPasswordReset" />
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";
import ResetPassword from "@/views/notAuthenticated/ResetPassword.vue";

export default {
  components: {
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
  },
};
</script>
