<template>
  <div
    class="flex flex-col gap-5 w-full max-w-4xl p-10 bg-black text-white mb-12 lg:rounded-[10px]"
  >
    <div class="flex items-center gap-3">
      <img
        class="max-w-[52px] max-h-[52px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <p>{{ post.userName }}</p>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex">
        <p>
          “{{ post.quote }}” movie- {{ post.movie }}. ({{
            post.movieReleaseDate
          }})
        </p>
      </div>
      <img class="w-full" src="@/assets/post/post-image.png" alt="post-image" />
    </div>
    <div class="flex gap-4">
      <div class="flex gap-2">
        <p>{{ post.comments.length }}</p>
        <button><img src="@/assets/icons/comment.svg" alt="comment" /></button>
      </div>
      <div class="flex gap-2">
        <p>{{ post.likes }}</p>
        <button>
          <img src="@/assets/icons/heart.svg" class="like-post" alt="comment" />
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
            class="max-w-[52px] max-h-[52px]"
            src="@/assets/post/profile-picture.png"
            alt="profile-picture"
          />
          <p>{{ comment.userName }}</p>
        </div>
        <div>
          <p>{{ comment.comment }}</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3 border-t-[#efefef5b] border-t-2 pt-5">
      <img
        class="max-w-[52px] max-h-[52px]"
        src="@/assets/post/profile-picture.png"
        alt="profile-picture"
      />
      <input
        type="text"
        placeholder="Write a comment"
        class="rounded-[10px] bg-[#24222F] px-4 py-2 w-full focus:outline-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: {
        id: 1,
        userName: "Maia Nakashidze",
        quote: "Follow your dream.",
        movie: "Billy Elliot",
        movieReleaseDate: "2000",
        likes: 10,
        comments: [
          {
            id: 1,
            userName: "Nina Baldadze",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc vel massa facilisis consequat elit morbi convallis convallis. Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu vitae mauris odio eget.",
          },
          {
            id: 2,
            userName: "Nika Tsetskhladze",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscin",
          },
        ],
      },
    };
  },
};
</script>
