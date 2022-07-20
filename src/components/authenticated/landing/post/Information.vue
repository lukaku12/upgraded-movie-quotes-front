<template>
  <div class="flex items-center gap-3">
    <img
      class="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
      :src="
        'http://127.0.0.1:8000/storage/thumbnails/' + currentPost.user.picture
      "
      alt="profile-picture"
    />
    <p>{{ currentPost.user.username }}</p>
  </div>
  <div class="flex flex-col gap-5 mt-3">
    <div class="flex">
      <p>
        “{{ currentPost.title.en }}” {{ $t('movie') }}-{{ currentPost.movie.title.en }} ({{
          currentPost.movieReleaseDate || 2021
        }})
      </p>
    </div>
    <img
      class="w-full max-h-[501px]"
      :src="'http://127.0.0.1:8000/storage/thumbnails/' + currentPost.thumbnail"
      alt="post-image"
    />
  </div>
</template>

<script>
export default {
  name: "PostInformation",
  props: {
    currentPost: {
      type: Object,
      required: true,
    },
  },
};
</script>
