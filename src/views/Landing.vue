<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/index";

export default {
  components: {
    NotAuthLanding,
    AuthLanding,
  },
  computed: {
    ...mapState(useAuthStore, ["isAuthenticated"]),
  },
};
</script>
