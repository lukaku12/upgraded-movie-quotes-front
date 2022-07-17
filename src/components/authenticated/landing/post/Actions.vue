<template>
  <div class="flex gap-4 my-4">
    <div class="flex gap-2 z-40">
      <p class="w-2">{{ currentPost.comments.length }}</p>
      <button><CommentIcon /></button>
    </div>
    <div class="flex gap-2 z-40">
      <p class="w-2">{{ postLikes.length }}</p>
      <button v-if="!quoteLikesUserIDs.includes(user.id)" @click="likeQuote">
        <HeartSvg fill-color="#FFFFFF" hover:fill-color="#FF0000" />
      </button>
      <button v-else @click="unlikeQuote">
        <HeartFillRed />
      </button>
    </div>
  </div>
</template>

<script>
import HeartFillRed from "@/components/icons/HeartFillRed.vue";
import HeartSvg from "@/components/icons/Heart.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import axios from "@/config/axios";
export default {
  name: "PostActions",
  components: { HeartSvg, CommentIcon, HeartFillRed },
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
      postLikes: this.currentPost.likes,
    };
  },
  computed: {
    quoteLikesUserIDs() {
      return this.postLikes.map((like) => like.user_id);
    },
  },
  methods: {
    likeQuote() {
      this.postLikes.push({ user_id: this.user.id });

      axios.post("like/add", { quote_id: this.currentPost.id });
      axios
        .post(
          "notify-user",
          {
            quote_id: this.currentPost.id,
            user_id: this.user.id,
            username: this.user.username,
            read_at: null,
            message: `Reacted to your quote`,
          },
          { headers: { "X-Socket-Id": window.Echo.socketId() } }
        )
        .then((res) => {
          console.log(res);
        });
    },
    unlikeQuote() {
      const userLike = this.postLikes.filter(
        (like) => like.user_id === this.user.id
      );
      this.postLikes.splice(this.postLikes.indexOf(userLike[0]), 1);

      axios.post("like/remove", { quote_id: this.currentPost.id });
    },
  },
};
</script>
