<template>
  <VueFrom
    class="flex items-center gap-3 border-t-[#efefef5b] border-t-2 pt-5"
    @submit="addComment"
  >
    <ProfilePicture
      classes="max-w-[52px] max-h-[52px] rounded-[50%] aspect-square"
    />
    <Field
      v-model="commentData"
      type="text"
      rules="required"
      :name="currentPost.id + 'comment'"
      :placeholder="$t('write_a_comment')"
      class="rounded-[10px] bg-[#24222F] px-4 py-2 w-full focus:outline-none"
    />
  </VueFrom>
</template>

<script>
import { Field, Form as VueFrom } from "vee-validate";
import axios from "@/config/axios";
import ProfilePicture from "@/components/authenticated/ProfilePicture.vue";

export default {
  name: "PostAddComment",
  components: { VueFrom, Field, ProfilePicture },
  props: {
    currentPost: {
      type: Object,
      required: true,
    },
    user: {
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
      // eslint-disable-next-line vue/no-mutating-props
      this.currentPost.comments.push({
        body: this.commentData,
        user_id: this.user.id,
        username: this.user.username,
        picture: this.user.picture,
      });
      const sendCommentData = {
        quote_id: this.currentPost.id,
        comment_body: this.commentData,
      };
      axios
        .post("comment/add", sendCommentData, {
          headers: { "X-Socket-Id": window.Echo.socketId() },
        })
        .then(() => {
          this.commentData = "";
        });
      axios
        .post(
          "notify-user",
          {
            quote_id: this.currentPost.id,
            user_id: this.user.id,
            username: this.user.username,
            read_at: null,
            message: `Commented to your movie quote`,
          },
          { headers: { "X-Socket-Id": window.Echo.socketId() } }
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
