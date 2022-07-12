<template>
  <div
    class="flex flex-col gap-5 w-full max-w-[1024px] p-10 bg-[#090a0e] text-white mb-12 lg:rounded-[10px]"
  >
    <div class="flex items-center gap-3">
      <img
        class="max-w-[52px] max-h-[52px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <p>{{ post.user.username }}</p>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex">
        <p>
          “{{ post.title.en }}” movie-{{ post.movie.title.en }} ({{
            post.movieReleaseDate || 2021
          }})
        </p>
      </div>
      <img
        class="w-full max-h-[501px]"
        :src="'http://127.0.0.1:8000/storage/thumbnails/' + post.thumbnail"
        alt="post-image"
      />
    </div>
    <div class="flex gap-4">
      <div class="flex gap-2">
        <p>{{ post.comments.length }}</p>
        <button><CommentIcon /></button>
      </div>
      <div class="flex gap-2">
        <p>TODO</p>
        <button>
          <HeartSvg fill-color="#FFFFFF" hover:fill-color="#FF0000" />
        </button>
      </div>
    </div>
    <div>
      <div
        v-for="comment in post.comments"
        :key="comment.id"
        class="border-t-[#efefef5b] border-t-2 py-4 gap-3 flex flex-col"
      >
        <div class="flex items-center gap-3">
          <img
            class="max-w-[45px] max-h-[45px]"
            src="@/assets/post/profile-picture.png"
            alt="profile-picture"
          />
          <p class="font-bold">{{ comment.username }}</p>
        </div>
        <div class="lg:pl-[56px] lg:-mt-4">
          <p class="font-medium">{{ comment.body }}</p>
        </div>
      </div>
    </div>
    <VueFrom
      class="flex items-center gap-3 border-t-[#efefef5b] border-t-2 pt-5"
      @submit="addComment"
    >
      <img
        class="max-w-[52px] max-h-[52px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <Field
        v-model="commentData"
        type="text"
        rules="required"
        :name="post.id + 'comment'"
        placeholder="Write a comment"
        class="rounded-[10px] bg-[#24222F] px-4 py-2 w-full focus:outline-none"
      />
    </VueFrom>
  </div>
</template>

<script>
import HeartSvg from "@/components/icons/Heart.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import { Form as VueFrom, Field } from "vee-validate";
import axios from "@/config/axios";
export default {
  name: "Post",
  components: { HeartSvg, CommentIcon, VueFrom, Field },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentData: "",
    };
  },
  methods: {
    addComment() {
      if (this.commentData === "") return;
      const sendCommentData = {
        quote_id: this.post.id,
        comment_body: this.commentData,
      };
      axios
        .post("comment/add", sendCommentData)
        .then(() => {
          this.commentData = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
