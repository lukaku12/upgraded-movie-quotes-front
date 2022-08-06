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
      <LoadingAnimation v-if="loadingMorePosts" classes="h-[100px]" />
    </div>
  </AuthWrapper>
</template>

<script>
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import Post from "@/components/authenticated/landing/Post.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import AddQuote from "@/views/authenticated/quote/AddQuote.vue";
import axios from "@/config/axios";
import { mapActions } from "pinia";
import { useNotificationsStore } from "@/stores/notifications/notifications";
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
      currentPage: 1,
      loadingMorePosts: false,
      lastPage: null,
    };
  },
  computed: {
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
  mounted() {
    this.scroll();

    axios.get("user").then((res) => {
      window.Echo.private("notify-user." + res.data.id).listen(
        "NotifyUser",
        (e) => {
          this.addNotification(e[0]);
        }
      );
    });

    this.loading = true;
    axios.get(`quotes?page=${this.currentPage}`).then((response) => {
      this.posts = response.data.data;
      this.lastPage = response.data.last_page;
      this.loading = false;
    });

    window.Echo.channel("add-comment").listen("AddComment", (e) => {
      const currentPost = this.posts.filter(
        (post) => post.id === e[0].quote_id
      );
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
      const userLike = currentPostLikes.filter(
        (like) => like.user_id === e.user_id
      );

      currentPostLikes.splice(currentPostLikes.indexOf(userLike[0]), 1);
    });
  },
  methods: {
    ...mapActions(useNotificationsStore, ["addNotification"]),
    loadMore() {
      this.loadingMorePosts = true;
      this.currentPage++;
      axios.get(`quotes?page=${this.currentPage}`).then((response) => {
        this.posts.push(...response.data.data);
        this.loadingMorePosts = false;
      });
    },
    scroll() {
      if (this.$route.name === "landing") {
        window.onscroll = () => {
          let bottomOfWindow =
            Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            ) +
              window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            if (this.lastPage === this.currentPage) return;
            this.loadMore();
          }
        };
      }
    },
  },
};
</script>
