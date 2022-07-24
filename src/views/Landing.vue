<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";

export default {
  components: {
    NotAuthLanding,
    AuthLanding,
  },
  computed: {
    isAuthenticated() {
      return document.cookie.includes("jwt_token");
    },
  },
};
</script>
