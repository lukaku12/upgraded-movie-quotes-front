<template>
  <AddQuote v-if="addQuoteIsVisible"></AddQuote>
  <AuthWrapper>
    <AddQuoteComponent></AddQuoteComponent>
    <Post v-for="post in posts" :key="post.id" :post="post"></Post>
  </AuthWrapper>
</template>

<script>
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import AddQuote from "@/views/authenticated/AddQuote.vue";
import axios from "@/config/axios";
export default {
  name: "AuthLanding",
  components: {
    AuthWrapper,
    Post,
    AddQuoteComponent,
    AddQuote,
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
  mounted() {
    axios.get("quotes").then((response) => {
      this.posts = response.data;
      console.log(this.posts);
    });
  },
};
</script>
