<template>
  <NotAuthLanding v-if="!isAuthenticated"></NotAuthLanding>
  <AuthLanding v-if="isAuthenticated"></AuthLanding>
</template>

<script>
import NotAuthLanding from "@/views/notAuthenticated/Landing.vue";
import AuthLanding from "@/views/authenticated/Landing.vue";
import { useNotificationsStore } from "@/stores/notifications/notifications";
import { mapActions } from "pinia";
import axios from "@/config/axios";

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
  mounted() {
    axios.get("user").then((res) => {
      window.Echo.channel("notify-user." + res.data.id).listen(
        "NotifyUser",
        (e) => {
          this.addNotification(e[0]);
          console.log(e[0]);
        }
      );
    });
  },
  methods: {
    ...mapActions(useNotificationsStore, ["addNotification"]),
  },
};
</script>