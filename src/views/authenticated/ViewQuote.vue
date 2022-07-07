<template>
  <AuthWrapper>
    <QuoteWrapper
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
          <p>{{ post.comments.length }}</p>
          <button>
            <img src="@/assets/icons/comment.svg" alt="comment" />
          </button>
        </div>
        <div class="flex gap-2">
          <p>{{ post.likes }}</p>
          <button>
            <img
              src="@/assets/icons/heart.svg"
              class="like-post"
              alt="comment"
            />
          </button>
        </div>
      </div>
      <div class="w-10/12 md:w-11/12">
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
      </div>
    </QuoteWrapper>
  </AuthWrapper>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import AuthWrapper from "@/components/authenticated/Wrapper.vue";
import QuoteWrapper from "@/components/authenticated/movies/QuoteWrapper.vue";
import axios from "axios";

export default {
  name: "ViewQuote",
  components: {
    QuoteWrapper,
    AuthWrapper,
    TextArea,
  },
  data() {
    return {
      quote: {},
      dataIsFetched: false,
      post: {
        id: 1,
        userName: "Maia Nakashidze",
        quote: "Follow your dream.",
        movie: "Billy Elliot",
        movieReleaseDate: "2000",
        likes: 10,
        comments: [
          {
            id: 1,
            userName: "Nina Baldadze",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc vel massa facilisis consequat elit morbi convallis convallis. Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu vitae mauris odio eget.",
          },
          {
            id: 2,
            userName: "Nika Tsetskhladze",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscin",
          },
        ],
      },
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
    axios
      .get(
        `http://127.0.0.1:8000/api/movies/${this.movieSlug}/quote/${this.quoteId}`
      )
      .then((response) => {
        this.quote = response.data;
        this.dataIsFetched = true;
      });
  },
};
</script>
