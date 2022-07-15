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
        <img
          class="w-full aspect-square md:aspect-video rounded-xl"
          :src="'http://127.0.0.1:8000/storage/thumbnails/' + quote.thumbnail"
          alt="thumbnail"
        />
      </div>
      <div class="flex gap-4 w-10/12 md:w-11/12 mb-4">
        <div class="flex gap-2">
          <!-- <p>{{ post.comments.length }}</p> -->
          <button>
            <CommentIcon />
          </button>
        </div>
        <div class="flex gap-2">
          <!-- <p>{{ post.likes }}</p> -->
          <button>
            <HeartSvg />
          </button>
        </div>
      </div>
      <!-- <div class="w-10/12 md:w-11/12">
        <div
          v-for="comment in post.comments"
          :key="comment.id"
          class="border-t-[#efefef5b] border-t-2 py-4 gap-3 flex flex-col"
        >
          <div class="flex items-center gap-3">
            <img
              class="max-w-[52px] max-h-[52px]"
              src="@/assets/post/profile-picture.png"
              alt="profile-picture"
            />
            <p>{{ comment.userName }}</p>
          </div>
          <div>
            <p>{{ comment.comment }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex w-10/12 md:w-11/12 items-center gap-3 border-t-[#efefef5b] border-t-2 pt-5"
      >
        <img
          class="max-w-[52px] max-h-[52px]"
          src="@/assets/post/profile-picture.png"
          alt="profile-picture"
        />
        <input
          type="text"
          placeholder="Write a comment"
          class="rounded-[10px] bg-[#24222F] px-4 py-2 w-full focus:outline-none"
        />
      </div> -->
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import HeartSvg from "@/components/icons/Heart.vue";
import axios from "@/config/axios/index.js";
import CommentIcon from "@/components/icons/CommentIcon.vue";

export default {
  name: "ViewQuote",
  components: {
    QuoteWrapper,
    AuthWrapper,
    TextArea,
    HeartSvg,
    CommentIcon,
    LoadingAnimation,
  },
  data() {
    return {
      quote: {},
      dataIsFetched: false,
      loading: true,
    };
  },
  computed: {
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
};
</script>
