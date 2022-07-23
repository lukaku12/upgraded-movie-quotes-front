<template>
  <div class="flex items-center gap-3">
    <ProfilePicture
      classes="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
      :img-src="currentPost.user.picture"
    />
    <p>{{ currentPost.user.username }}</p>
  </div>
  <div class="flex flex-col gap-5 mt-3">
    <div class="flex">
      <p>
        “{{ localeQuote }}” {{ $t("movie") }}-{{ localeMovie }} ({{
          currentPost.movieReleaseDate || 2021
        }})
      </p>
    </div>
    <img
      class="w-full max-h-[501px] rounded-2xl"
      :src="'http://127.0.0.1:8000/storage/thumbnails/' + currentPost.thumbnail"
      alt="post-image"
    />
  </div>
</template>

<script>
import ProfilePicture from "../../ProfilePicture.vue";
export default {
  name: "PostInformation",
  components: { ProfilePicture },
  props: {
    currentPost: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localeQuote() {
      return this.$i18next.language === "en"
        ? this.currentPost.title.en
        : this.currentPost.title.ka;
    },
    localeMovie() {
      return this.$i18next.language === "en"
        ? this.currentPost.movie.title.en
        : this.currentPost.movie.title.ka;
    },
  },
};
</script>
