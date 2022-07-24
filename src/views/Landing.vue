<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";
import { useNotificationsStore } from "@/stores/notifications/notifications";
import { mapActions } from "pinia";

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
