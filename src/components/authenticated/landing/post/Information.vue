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
        “{{ currentPost.title[locale] }}” {{ $t("movie") }}-{{ currentPost.movie.title[locale] }} ({{
          currentPost.movieReleaseDate || 2021
        }})
      </p>
    </div>
    <Thumbnail
      classes="w-full max-h-[501px] rounded-2xl"
      :img-src="currentPost.thumbnail"
    />
  </div>
</template>

<script>
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";
import Thumbnail from "@/components/authenticated/Thumbnail.vue";
export default {
  name: "PostInformation",
  components: { ProfilePicture, Thumbnail },
  props: {
    currentPost: {
      type: Object,
      required: true,
    },
  },
  computed: {
    locale() {
      return this.$i18next.language
    }
  },
};
</script>
