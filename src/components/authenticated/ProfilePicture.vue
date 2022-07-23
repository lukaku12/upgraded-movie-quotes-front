<template>
  <keep-alive>
    <img
      :class="classes + ' ' + extraClasses"
      :src="src"
      alt="profile-picture"
    />
  </keep-alive>
</template>

<script>
import { useUserStore } from "@/stores/user/user";
import { mapState } from "pinia";

export default {
  name: "ProfilePicture",
  props: {
    classes: {
      type: String,
      required: true,
    },
    extraClasses: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      storageImagePath: import.meta.env.VITE_LARAVEL_STORAGE_BASE_URL,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    src() {
      return this.storageImagePath + (this.imgSrc || this.user.picture);
    },
  },
};
</script>
