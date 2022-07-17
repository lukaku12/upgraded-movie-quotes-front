<template>
  <div class="border-t-[#efefef5b] border-t-2 py-4 gap-3 flex flex-col">
    <div class="flex items-center gap-3">
      <img
        class="max-w-[45px] max-h-[45px] rounded-[50%] aspect-square"
        :src="'http://127.0.0.1:8000/storage/thumbnails/' + comment.picture"
        alt="profile-picture"
      />
      <p class="font-bold">{{ comment.username }}</p>
    </div>
    <div class="lg:pl-[56px] lg:-mt-4">
      <p class="font-medium">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
