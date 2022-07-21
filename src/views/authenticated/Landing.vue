<template>
  <AddQuote v-if="addQuoteIsVisible"></AddQuote>
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>
    <div v-else>
      <AddQuoteComponent></AddQuoteComponent>
      <Post
        v-for="post in posts"
        :key="post.id"
        :loading="loading"
        :post="post"
      ></Post>
    </div>
  </AuthWrapper>
</template>

<script>
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import AddQuote from "@/views/authenticated/AddQuote.vue";
import axios from "@/config/axios";
export default {
  name: "AuthLanding",
  components: {
    LoadingAnimation,
    AuthWrapper,
    Post,
    AddQuoteComponent,
    AddQuote,
  },
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  computed: {
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
  mounted() {
    this.loading = true;
    axios.get("quotes").then((response) => {
      this.posts = response.data;
      this.loading = false;
    });

    window.Echo.channel("add-comment").listen("AddComment", (e) => {
      const currentPost = this.posts.filter((post) => post.id === e[0].quote_id);
      const currentPostComments = currentPost[0].comments;
      currentPostComments.push(e[0]);
    });

    window.Echo.channel("add-like").listen("AddLike", (e) => {
      const currentPost = this.posts.filter((post) => post.id === e.quote_id);
      currentPost[0].likes.push(e);
    });

    window.Echo.channel("remove-like").listen("RemoveLike", (e) => {
      const currentPost = this.posts.filter((post) => post.id === e.quote_id);
      const currentPostLikes = currentPost[0].likes;
      const userLike = currentPostLikes.filter((like) => like.user_id === e.user_id);

      currentPostLikes.splice(currentPostLikes.indexOf(userLike[0]), 1);
    });
  },
};
</script>
