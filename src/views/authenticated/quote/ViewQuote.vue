<template>
  <AuthWrapper>
    <div
      v-if="loading"
      class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-transparent text-white mb-12 lg:rounded-[10px]"
    >
      <LoadingAnimation />
    </div>
    <QuoteWrapper
      v-else
      :movie-slug="movieSlug"
      :quote="quote"
      :quote-id="quoteId"
      :data-is-fetched="dataIsFetched"
      :view-quote="true"
      :user="user"
    >
      <div class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12">
        <TextArea
          name="titleEn"
          placeholder="Start create new quote"
          language="Eng"
          :value="quote.title.en"
          :read-only="true"
        ></TextArea>
        <TextArea
          name="titleKa"
          placeholder="ახალი ციტატა"
          :value="quote.title.ka"
          language="ქარ"
          :read-only="true"
        ></TextArea>
      </div>
      <div class="w-10/12 md:w-11/12 flex items-center justify-center my-5">
        <Thumbnail
          classes="w-full aspect-square md:aspect-video rounded-xl"
          :img-src="quote.thumbnail"
        />
      </div>
      <div class="flex gap-4 w-10/12 md:w-11/12 mb-4">
        <PostActions :current-post="quote" :user="user"></PostActions>
      </div>
      <div class="w-10/12 md:w-11/12 relative">
        <div>
          <PostComment
            v-for="comment in quote.comments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
        <PostAddComment :current-post="quote" :user="user" />
      </div>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import PostComment from "@/components/authenticated/landing/post/Comment.vue";
import PostActions from "@/components/authenticated/landing/post/Actions.vue";
import PostAddComment from "@/components/authenticated/landing/post/AddComment.vue";
import { useUserStore } from "@/stores/user/user";
import axios from "@/config/axios";
import { mapState } from "pinia";
import Thumbnail from "@/components/authenticated/Thumbnail.vue";

export default {
  name: "ViewQuote",
  components: {
    PostAddComment,
    PostComment,
    PostActions,
    QuoteWrapper,
    AuthWrapper,
    TextArea,
    LoadingAnimation,
    Thumbnail,
  },
  data() {
    return {
      quote: {},
      dataIsFetched: false,
      loading: true,
      showAllComments: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    movieSlug() {
      return this.$route.params.movie;
    },
    quoteId() {
      return this.$route.params.quote;
    },
  },
  mounted() {
    this.loading = true;
    axios
      .get(`movies/${this.movieSlug}/quote/${this.quoteId}`)
      .then((response) => {
        this.quote = response.data;
        this.dataIsFetched = true;
        this.loading = false;
      });
  },
  methods: {
    setShowAllComments() {
      this.showAllComments = !this.showAllComments;
    },
  },
};
</script>
