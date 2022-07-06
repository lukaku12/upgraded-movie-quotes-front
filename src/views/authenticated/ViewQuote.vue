<template>
  <section
    class="w-full h-full flex flex-col items-center overflow-y-auto bg-[#222030]"
  >
    <AuthHeader></AuthHeader>
    <div
      class="w-full h-full flex justify-center lg:justify-start bg-[#0f0e14] font-bold"
    >
      <Navigation></Navigation>
      <div>
        <MobileSearch></MobileSearch>
        <Notifications></Notifications>
        <div
          v-if="dataIsFetched"
          class=" bg-landing-background-reverse pb-10 text-white z-50 md:max-w-[961px]"
        >
          <div class="flex flex-col items-center lg:my-10">
            <header
              class="w-full h-auto text-center text-xl font-bold relative flex flex-col items-center"
            >
              <div class="w-full relative border-b-[#efefef5b] border-b py-10">
                <div>
                  <div
                    class="absolute top-[50%] left-7 flex gap-4 items-center -translate-y-[50%]"
                  >
                    <router-link to="">
                      <img src="@/assets/icons/pen.svg" alt="pen" />
                    </router-link>
                    <p>|</p>
                    <router-link to="">
                      <img src="@/assets/icons/trash.svg" alt="trash" />
                    </router-link>
                  </div>
                  <router-link
                    :to="'/movies/' + movieSlug"
                    class="absolute right-5 top-1/2 -translate-y-[50%] opacity-80 hover:opacity-100"
                  ><img src="@/assets/icons/close.svg" alt=""
                  /></router-link>
                </div>
              </div>
              <div class="flex items-center gap-3 py-10 w-10/12 md:w-11/12">
                <img src="@/assets/post/profile-picture.png" alt="profile-picture" />
                <p>Nino Tabagari</p>
              </div>
            </header>
            <div
              class="w-10/12 h-auto flex flex-col gap-3 md:w-11/12"
            >
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
            <div class=" w-10/12 md:w-11/12 flex items-center justify-center my-5">
              <img class="w-full aspect-square md:aspect-video" :src="'http://127.0.0.1:8000/storage/thumbnails/' + quote.thumbnail" alt="thumbnail">
            </div>
            <div class="flex gap-4 w-10/12 md:w-11/12 mb-4">
              <div class="flex gap-2">
                <p>{{ post.comments.length }}</p>
                <button><img src="@/assets/icons/comment.svg" alt="comment" /></button>
              </div>
              <div class="flex gap-2">
                <p>{{ post.likes }}</p>
                <button>
                  <img src="@/assets/icons/heart.svg" class="like-post" alt="comment" />
                </button>
              </div>
            </div>
            <div class=" w-10/12 md:w-11/12">
              <div
                v-for="comment in post.comments"
                :key="comment.id"
                class="border-t-[#efefef5b] border-t-2 py-4 gap-3 flex flex-col"
              >
                <div class="flex items-center gap-3">
                  <img src="@/assets/post/profile-picture.png" alt="profile-picture" />
                  <p>{{ comment.userName }}</p>
                </div>
                <div>
                  <p>{{ comment.comment }}</p>
                </div>
              </div>
            </div>
            <div class="flex  w-10/12 md:w-11/12 items-center gap-3 border-t-[#efefef5b] border-t-2 pt-5">
              <img src="@/assets/post/profile-picture.png" alt="profile-picture" />
              <input
                type="text"
                placeholder="Write a comment"
                class="rounded-[10px] bg-[#24222F] px-4 py-2 w-full focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextArea from "@/components/Inputs/TextArea.vue";
import AuthHeader from "@/components/authenticated/BasicHeader.vue";
import AddQuoteComponent from "@/components/authenticated/landing/AddQuote.vue";
import Navigation from "@/components/authenticated/Sidebar.vue";
import MobileSearch from "@/components/authenticated/MobileSearch.vue";
import Notifications from "@/components/authenticated/Notifications.vue";
import axios from "axios";

export default {
  name: "ViewQuote",
  components: {
    MobileSearch,
    AuthHeader,
    AddQuoteComponent,
    Navigation,
    Notifications,
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
      console.log(this.$route.params.movie);
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
