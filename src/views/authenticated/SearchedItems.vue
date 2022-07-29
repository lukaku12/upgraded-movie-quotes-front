<template>
  <AddQuote v-if="addQuoteIsVisible"></AddQuote>
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>
    <div v-else class="w-full">
      <AddQuoteComponent></AddQuoteComponent>
      <div v-if="posts.length !== 0">
        <Post
          v-for="post in posts"
          :key="post.id"
          :loading="loading"
          :post="post"
        ></Post>
      </div>
      <div v-if="searchNotFound" class="max-w-[1024px] w-[100%] mt-24">
        <h1 class="text-white text-center text-3xl">{{ $t('no_results_found') }}</h1>
      </div>
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
  name: "SearchedItems",
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
      searchNotFound: false,
      loading: false,
    };
  },
  computed: {
    searchValue() {
      return this.$route.query.value;
    },
    searchType() {
      return this.$route.query.type;
    },
    addQuoteIsVisible() {
      return this.$route.name === "add-quote";
    },
  },
  watch: {
    $route: {
      handler() {
        this.getSearchedItems();
      },
      immediate: true,
    },
  },
  mounted() {
    this.getSearchedItems();
  },
  methods: {
    getSearchedItems() {
      this.loading = true;
      axios
        .post("search", {
          value: this.searchValue,
          type: this.searchType,
        })
        .then((res) => {
          this.posts = res.data;
          this.searchNotFound = res.data.length === 0;
          this.loading = false;
        });
    },
  }
};
</script>
