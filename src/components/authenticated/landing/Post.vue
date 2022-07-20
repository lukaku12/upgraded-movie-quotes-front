<template>
  <div
    class="flex flex-col gap-5 w-full max-w-[1024px] p-6 md:p-10 bg-[#090a0e] text-white mb-12 lg:rounded-[10px]"
  >
    <div class="relative">
      <PostInformation :current-post="currentPost" />
      <PostActions :current-post="currentPost" :user="user" />

      <div v-if="currentPost.comments.length < 3 || showAllComments">
        <PostComment
          v-for="comment in currentPost.comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
      <div v-else>
        <PostComment :comment="currentPost.comments[0]" />
      </div>
      <button
        v-if="currentPost.comments.length >= 3"
        class="opacity-80 underline absolute -bottom-8 right-0"
        @click="setShowAllComments"
      >
        {{ !showAllComments ? $t('show_all_comments') : $t('hide_comments') }}
      </button>

      <PostAddComment :current-post="currentPost" :user="user" />
    </div>
  </div>
</template>

<script>
import PostInformation from "@/components/authenticated/landing/post/Information.vue";
import PostComment from "@/components/authenticated/landing/post/Comment.vue";
import PostActions from "@/components/authenticated/landing/post/Actions.vue";
import PostAddComment from "@/components/authenticated/landing/post/AddComment.vue";
import { useUserStore } from "@/stores/user/user";
import { mapState } from "pinia";

export default {
  name: "Post",
  components: { PostAddComment, PostInformation, PostActions, PostComment },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentPost: this.post,
      showAllComments: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    setShowAllComments() {
      this.showAllComments = !this.showAllComments;
    },
  },
};
</script>
