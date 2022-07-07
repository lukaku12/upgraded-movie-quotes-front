<template>
  <AddQuote v-if="addQuoteIsVisible"></AddQuote>
  <AuthWrapper>
    <AddQuoteComponent></AddQuoteComponent>
    <Post></Post>
    <Post></Post>
    <Post></Post>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import AddQuote from "@/views/authenticated/AddQuote.vue";
export default {
  name: "AuthLanding",
  components: {
    AuthWrapper,
    Post,
    AddQuoteComponent,
    AddQuote,
  },
  computed: {
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
};
</script>
