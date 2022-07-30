<template>
  <div></div>
</template>

<script>
import { setJwtToken } from "@/helpers/jwt";

export default {
  computed: {
    token() {
      return this.$route.query.token;
    },
    expiresIn() {
      return this.$route.query.expires_in;
    },
  },
  mounted() {
    setJwtToken(this.token, this.expiresIn);
    window.location.href = "/";
  },
};
</script>
