<template>
  <div class="border-t-[#efefef5b] border-t-2 py-4 gap-3 flex flex-col">
    <div class="flex items-center gap-3">
      <ProfilePicture
        classes="max-w-[45px] max-h-[45px] rounded-[50%] aspect-square"
        :img-src="comment.picture"
      />
      <p class="font-bold">{{ comment.username }}</p>
    </div>
    <div class="lg:pl-[56px] lg:-mt-4">
      <p class="font-medium">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "../../ProfilePicture.vue";
export default {
  name: "PostComment",
  components: { ProfilePicture },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
