<template>
  <div class="flex gap-4 my-4">
    <div class="flex gap-2">
      <p>{{ currentPost.comments.length }}</p>
      <button><CommentIcon /></button>
    </div>
    <div class="flex gap-2">
      <p>{{ currentPost.likes.length }}</p>
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
  components: { HeartSvg, CommentIcon, HeartFillRed},
  props: {
    currentPost: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    }
  },
  computed: {
    quoteLikesUserIDs() {
      return this.currentPost.likes.map((like) => like.user_id);
    },
  },
  methods: {
    likeQuote() {
      this.currentPost.likes.push({user_id: this.user.id})
      axios
          .post("like/add", { quote_id: this.currentPost.id })
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    },
    unlikeQuote() {
      this.currentPost.likes.pop()
      axios
          .post("like/remove", { quote_id: this.currentPost.id })
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    },
  }
}
</script>